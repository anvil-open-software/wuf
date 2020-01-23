import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FieldConfig } from '@anviltech/wuf-ang-dynamic-form';


@Injectable()
export class DynamicFormMetadataService {

    constructor(private http: HttpClient) {
    }

    validators: any = {
        required: {
            name: 'required',
            validator: Validators.required,
            // message: 'This field is required', // This will come from the translation file
            translationKey: {
                message: 'PAGES.DOCUMENT.FORM.VALIDATORS.REQUIRED'
            }
        },
        email: {
            name: 'pattern',
            validator: Validators.pattern(
                '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
            ),
            // message: 'Invalid email', // This will come from the translation file
            translationKey: {
                message: 'PAGES.DOCUMENT.FORM.VALIDATORS.EMAIL'
            }
        }
    };

    /**
     * Get metadata from BFF for the given object type.
     * @param {string} objectType - The name of the entity type.  Corresponds with metadata
     * files at /data/dynamicForms/metadata/[objectType].json
     * @return {Observable<any>}
     */
    getMetadataFromApi(objectType: string) {
        return this.http.get<any>('/api/dynamicform');
    }

    /**
     * A function to covert camel case attribute names into display names.
     * @param text
     * @return {string}
     */
    private camelCaseToSentenceCase(text) {
        const result = text.replace( /([A-Z])/g, ' $1' ).toLowerCase(); // Convert uppercase to space + lower case
        return result.trim().charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter
    }

    /**
     *
     * @param {string[]} validatorNames
     * @return {any[]}
     */
    private getValidators(validatorNames: string[]) {
        if(!validatorNames || !validatorNames.length) {
            return [];
        }

        const validators: any[] = [];

        for (let i = 0; i < validatorNames.length; i++ ) {
            const validatorName = validatorNames[i];
            if (this.validators.hasOwnProperty(validatorName)) {
                validators.push(this.validators[validatorName]);
            }
        }

        return validators;
    }

    /**
     * Create a translation key object.  Only create new translation keys if relevant properties do not already exist in the field
     * object.  If properties for a given display field already exist in the object, these values won't be used (i.e., translation is
     * overridden).
     * @param {string} key
     * @param {string} translationPath
     * @return {any}
     */
    private getTranslationKey(key: string, translationPath: string) {

        const i18nKey = key.toUpperCase();
        const keyPath = translationPath + '.' + i18nKey + '.';

        return {
            label: keyPath + 'LABEL',
            hint: keyPath + 'HINT'
        };
    }

    /**
     * Convert a raw data object (e.g., from a DB), and use the metadata to create form field metadata
     * that can be used to generate a dynamic form.
     * @param {object} sourceObject - The source object from the DB
     * @param {object} metadata - A metadata object retrieved from the BFF.  This is combined with the source object data to construct the
     * final
     * FieldConfig used to generate the form.
     * @param {string} translationPath - The starting path for a translation string
     * @param {string} metadataPath - The path to the associated metadata
     * @param {boolean} isEditable - Whether or not to allow the user to edit the fields
     * @return {FieldConfig[]}
     */
    convertObjectToFieldConfig(sourceObject: any, metadata: any, translationPath: string, metadataPath: string,  isEditable?: boolean): FieldConfig[] {

        if (!sourceObject || ! metadata) {
            return;
        }

        const formMetadata: FieldConfig[] = [];
        const canEdit: boolean = (isEditable !== undefined) ? isEditable : true;

        Object.keys(sourceObject).forEach(key => {

            const newField: any = {
                name: key
            };

            const currentMetadataPath: string = metadataPath + key;
            const currentObj: any = this.getFromPath(sourceObject, key);
            let fieldMetadata: any = this.getFromPath(metadata, currentMetadataPath);

            // Handle nulls (which are otherwise treated as objects)
            if (currentObj === null) {
                return;
            }

            // Look for exclusion in the metadata
            if (this.getIsExcluded(metadata, key, fieldMetadata)) {
                // The metadata explicitly excludes this field, so do nothing
                return;
            }

            // Don't do anything for arrays

            if (Array.isArray(currentObj)) {
                return;
            }

            // if (Array.isArray(currentObj)) {
            //     // This field is a list
            //
            //     // Use the field-specific meta data or the default list type metadata
            //     fieldMetadata = fieldMetadata ? fieldMetadata : metadata['list'];
            //
            //     // Add properties from the metadata
            //     newField.type = 'list';
            //     newField.value = currentObj;
            //     newField.classNames = fieldMetadata['classNames'] || undefined;
            //
            //     // Determine whether the form is editable or not.  The metadata value from the BFF is the definitive source of truth.
            //     newField.disabled = fieldMetadata.hasOwnProperty('disabled') ? fieldMetadata['disabled'] : !canEdit;
            //     newField.readonly = fieldMetadata.hasOwnProperty('readonly') ? fieldMetadata['readonly'] : !canEdit;
            //
            //     // Add translation key (this must come last)
            //     newField.translationKey = this.getTranslationKey(currentMetadataPath, translationPath);
            //
            //     formMetadata.push(newField);
            // }

            if (typeof currentObj === 'object') {
                // This field is actually a nested object, so iterate through it recursively

                newField.type = 'group';
                newField.fields = this.convertObjectToFieldConfig(currentObj, metadata, translationPath, currentMetadataPath + '.', isEditable);

                // Determine whether or not to show this group as a new section in the form with its own header
                newField.showAsGroup = fieldMetadata && fieldMetadata.hasOwnProperty('showAsGroup') ? fieldMetadata['showAsGroup'] : true;

                // Add translation key (this must come last)
                newField.translationKey = this.getTranslationKey(currentMetadataPath, translationPath);

                formMetadata.push(newField);
            }
            else {
                // This is a normal field

                newField.value = currentObj || undefined;
                fieldMetadata = fieldMetadata ? fieldMetadata : metadata['default'];

                // Add validators
                newField.validators = this.getValidators(fieldMetadata.validators);
                if (!newField.validators.length) {
                    // Remove the validator property if it's not needed
                    delete newField.validators;
                }

                // Add the remainder of the fields from the metadata
                newField.type = fieldMetadata['type'] || 'input';
                newField.inputType = fieldMetadata['inputType'] || 'text';
                newField.options = fieldMetadata['options'] || undefined;
                // newField.hint = fieldMetadata['hint'] || undefined; // This is being added in translation file
                newField.rows = fieldMetadata['rows'] || undefined;
                newField.classNames = fieldMetadata['classNames'] || undefined;

                // Determine whether the form is editable or not.  The metadata value from the BFF is the definitive source of truth.
                newField.disabled = fieldMetadata.hasOwnProperty('disabled') ? fieldMetadata['disabled'] : !canEdit;
                newField.readonly = fieldMetadata.hasOwnProperty('readonly') ? fieldMetadata['readonly'] : !canEdit;

                // Add translation key (this must come last)
                newField.translationKey = this.getTranslationKey(currentMetadataPath, translationPath);

                formMetadata.push(newField);
            }

        });

        return formMetadata;
    }

    /**
     * Get the value of an object's child property via a path string.
     * getFromPath({result: {data: 1}}, 'result.data'; // returns 1
     * getFromPath({result: [ {data: 1} ]}, 'result.0.data'); // returns 1
     * @param obj
     * @param {string} path
     * @return {any}
     */
    getFromPath(obj: any, path: string) {
        if (obj === null) {
            return undefined;
        }

        const keys = path.split('.');
        const currentKey = keys.shift(); // get the first attribute key in the path by removing it in place
        let currentValue: any;

        // Special handling for arrays
        if (Array.isArray(obj)) {
            if (typeof parseInt(currentKey, 10) === 'number') {
                // Use number as an index to select a specific array element
                currentValue = obj[parseInt(currentKey, 10)];
            }
            else {
                // Return the entire collection
                currentValue = obj;
            }
        }

        if (typeof obj[currentKey] === 'object' && keys.length) {
            // Process nested objects

            const childPath = keys.join('.');
            return this.getFromPath(obj[currentKey], childPath);
        }
        else {
            // We've reached the end of the path. Return the current value.
            currentValue = obj[currentKey];
        }

        return currentValue;
    }

    getIsExcluded(metadata: any, key: string, fieldMetadata) {
        let exclude: boolean = false;

        // Check if the element is explicitly excluded
        if (fieldMetadata && fieldMetadata.exclude) {
            return true;
        }

        // Check if the element is on the blacklist
        if (metadata.hasOwnProperty('blacklist') && metadata.blacklist.indexOf(key) > -1) {
            // This item is on the blacklist.
            exclude = true;

            if (fieldMetadata && fieldMetadata.exclude === false)  {
                // However, the item can be on the blacklist but still explicitly INCLUDED.
                exclude = false;
            }
        }

        return exclude;
    }

}
