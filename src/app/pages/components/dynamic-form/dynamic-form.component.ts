import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { DynamicFormMetadataService } from './dynamic-form-metadata.service';

import { FieldConfig, WufDynamicFormComponent } from '@anviltech/wuf-ang-dynamic-form';
import { HttpClient } from '@angular/common/http';

declare var require: any;
const Color = require('color');


@Component({
    selector: 'app-theme',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
    providers: [DynamicFormMetadataService],
    encapsulation: ViewEncapsulation.Emulated
})
export class DynamicFormComponent implements OnInit {

    translateSubscription: Subscription;
    baseBreadcrumb: string;
    formData: string;
    maxWidth: string = '700px';

    /***** prebuilt form stuff *****/
    prebuiltFormInputs: FormGroup;
    @ViewChild(WufDynamicFormComponent, { static: false }) prebuiltForm: any;
    prebuiltFormConfig: any = [];
    prebuiltFormConfigData = [
        {
            type: 'input',
            label: 'Username',
            inputType: 'text',
            name: 'name',
            validators: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Name required'
                }
            ]
        },
        {
            type: 'input',
            label: 'Email Address',
            inputType: 'email',
            name: 'email',
            hint: 'Enter a valid email address',
            validators: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Email required'
                },
                {
                    name: 'pattern',
                    validator: Validators.pattern(
                        '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
                    ),
                    message: 'Invalid email'
                }
            ]
        },
        {
            type: 'input',
            label: 'Password',
            inputType: 'password',
            name: 'password',
            validators: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Password required'
                }
            ]
        },
        {
            type: 'radio',
            label: 'Citizenship',
            name: 'citizenshiup',
            value: 'us',
            options: [
                {
                    'value': 'us',
                    'label': 'US Citizen'
                },
                {
                    'value': 'non-us',
                    'label': 'Non US Citizen'
                }
            ],
            validators: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Gender required'
                }
            ]
        },
        {
            type: 'date',
            label: 'Date of birth',
            name: 'dob'
        },
        {
            type: 'select',
            label: 'Country',
            name: 'country',
            value: 'us',
            options: [
                {
                    'value': 'china',
                    'label': 'China'
                },
                {
                    'value': 'uk',
                    'label': 'UK'
                },
                {
                    'value': 'us',
                    'label': 'US'
                }
            ],
            validators: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Country required'
                }
            ]
        },
        {
            type: 'multi',
            label: 'Colors',
            name: 'colors',
            value: ['red', 'green'],
            options: [
                {
                    'value': 'red',
                    'label': 'Red'
                },
                {
                    'value': 'green',
                    'label': 'Green'
                },
                {
                    'value': 'blue',
                    'label': 'Blue'
                }
            ],
            validators: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'At least one color required'
                }
            ]
        },
        {
            type: 'group',
            name: 'multipleOptions',
            inputType: 'switchGroup',
            label: 'Multiple options (switch group)',
            fields: [
                {
                    type: 'switch',
                    label: 'Option 1',
                    name: 'option1'
                },
                {
                    type: 'switch',
                    label: 'Option 2',
                    name: 'option2',
                    value: true
                },
                {
                    type: 'switch',
                    label: 'Option 3',
                    name: 'option3'
                },
            ]
        },
        {
            type: 'group',
            name: 'address',
            label: 'Address',
            hint: 'Add your complete address below.',
            fields: [
                {
                    type: 'textarea',
                    label: 'Street',
                    name: 'street',
                    validators: [
                        {
                            name: 'required',
                            validator: Validators.required,
                            message: 'Street required'
                        }
                    ]
                },
                {
                    type: 'input',
                    label: 'City',
                    inputType: 'text',
                    name: 'city',
                    validators: [
                        {
                            name: 'required',
                            validator: Validators.required,
                            message: 'City required'
                        }
                    ]
                },
                {
                    type: 'select',
                    label: 'State',
                    name: 'state',
                    value: 'ca',
                    options: [
                        {
                            'value': 'ca',
                            'label': 'California'
                        },
                        {
                            'value': 'wa',
                            'label': 'Washington'
                        },
                        {
                            'value': 'dc',
                            'label': 'Washington DC'
                        }
                    ],
                    validators: [
                        {
                            name: 'required',
                            validator: Validators.required,
                            message: 'Country required'
                        }
                    ]
                },
                {
                    type: 'input',
                    label: 'Postal Code',
                    inputType: 'postalCode',
                    name: 'postalCode',
                    classNames: 'postalCode',
                    validators: [
                        {
                            name: 'required',
                            validator: Validators.required,
                            message: 'Postal code required'
                        }
                    ]
                }
            ]
        },
        {
            type: 'checkbox',
            label: 'Accept terms',
            name: 'term',
            value: true,
            validators: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'You must accept the terms of agreement'
            }
            ]
        }
    ];

    /***** merged form stuff *****/
    @ViewChild(WufDynamicFormComponent, { static: false }) mergedForm: any;
    mergedFormConfig: FieldConfig[] = [];
    formSubmitting: boolean = false;
    finalFormConfig: FieldConfig[];
    mergedFormInputs: FormGroup;

    mergedFormSourceObject: any = {
        id: 'DontShow',
        firstName: 'Darren',
        lastName: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: ''
        }
    };

    mergedFormMetadata: any = {
        blacklist: ['id'],
        email: {
            type: 'input',
            inputType: 'email',
            hint: 'Enter a valid email address',
            validators: ['required', 'email']
        },
        password: {
            type: 'input',
            inputType: 'password',
            validators: ['required']
        },
        postalCode: {
            type: 'input',
            inputType: 'text',
            validators: ['required'],
            classNames: 'postalCode'
        },
        state: {
            type: 'select',
            value: '',
            options: [
                {
                    value: 'ca',
                    label: 'CA'
                },
                {
                    value: 'dc',
                    label: 'DC'
                },
                {
                    value: 'wa',
                    label: 'WA'
                }
            ],
            validators: ['required']
        },
        country: {
            type: 'select',
            value: 'us',
            options: [
                {
                    value: 'china',
                    label: 'China'
                },
                {
                    value: 'uk',
                    label: 'UK'
                },
                {
                    value: 'us',
                    label: 'US'
                }
            ],
            validators: ['required']
        },
        default: {
            type: 'input',
            inputType: 'text',
            validators: ['required']
        }
    };

    constructor(
        public translate: TranslateService,
        private formBuilder: FormBuilder,
        private metadataService: DynamicFormMetadataService
    ) {
        // Subscribe to language changes
        this.translateSubscription = translate.onLangChange.subscribe(($event: LangChangeEvent) => {
            this.onLanguageChange($event);
        });
    }

    ngOnInit() {
        this.translateStrings();
        this.initFormInputFields();
    }

    initFormInputFields() {
        // Set up the example forms' input fields
        this.mergedFormInputs = this.formBuilder.group({
            sourceDataObject: [''],
            metadata: [''],
            finalFormData: ['']
        });

        // Set up the data source for the merged form's input fields
        this.mergedFormInputs.patchValue({
            sourceDataObject: [this.getJSONforDisplay(this.mergedFormSourceObject)],
            metadata: [this.getJSONforDisplay(this.mergedFormMetadata)],
            finalFormData: [this.getJSONforDisplay([])],
        });
    }

    getJSONforDisplay(obj) {
        return JSON.stringify(obj, null,  4);
    }

    translateStrings() {
        this.translate.get([
            'FRAME.BREADCRUMB'
        ]).subscribe((res: string) => {
            this.baseBreadcrumb = res['FRAME.BREADCRUMB'];
        });
    }


    /***** prebuilt form events *****/
    onGenerateMergedFormFromDataClick() {
        this.prebuiltFormConfig = this.prebuiltFormConfigData;
        this.prebuiltForm = WufDynamicFormComponent;

        setTimeout(() => {
            // Scroll form into view
            const target = document.querySelector('#prebuiltFormTitle');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 250);
    }


    /***** merged form events *****/
    onLanguageChange($event) {
        // Language has changed.  Now update the display.
        this.translateStrings();
    }

    onMetaDataChange() {
        this.mergedFormInputs.controls.finalFormData.setValue('{}');
    }

    onGenerateFormFromDataClick() {
        this.createFinalData();
        this.mergedFormConfig = this.finalFormConfig;
        this.mergedForm = WufDynamicFormComponent;

        setTimeout(() => {
            // Scroll form into view
            const target = document.querySelector('#mergedFormTitle');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 250);
    }

    onCreateFinalDataClick() {
        this.mergedFormConfig = [];
        this.createFinalData();

        // Display final metadata in form
        this.mergedFormInputs.controls.finalFormData.setValue(JSON.stringify(this.finalFormConfig, null,  4));
    }

    createFinalData() {
        // Merge source data object with meta data in order to generate final form data
        let sourceDataObj: any;
        let metadata: any;

        try {
            sourceDataObj = JSON.parse(this.mergedFormInputs.controls.sourceDataObject.value);
        }
        catch (e) {
            this.mergedForm.showErrorMessage('Invalid JSON found in Source Data Object field');
            return;
        }

        try {
            metadata = JSON.parse(this.mergedFormInputs.controls.metadata.value);
        }
        catch (e) {
            this.mergedForm.showErrorMessage('Invalid JSON found in Metadata field');
            return;
        }

        this.finalFormConfig = this.metadataService.convertObjectToFieldConfig(sourceDataObj, metadata, 'PAGES.TESTDOCUMENT.FORM', '',  true);
    }

    onCancelClickInsideForm() {
        // Call the cancel method on the DynamicFormComponent
        this.mergedForm.cancel();
    }

    onSubmitOutsideForm() {
        // Call the submit method on the DynamicFormComponent
        this.mergedForm.submit();
    }

    onMergedFormSubmit(results?: any) {
        this.formSubmitting = true;
        this.formData = JSON.stringify(results);
        // TODO: send data to server. On success, show success message
        this.mergedForm.showSuccessMessage('Form submitted successfully!');

        // TODO: this is just for demo purposes
        setTimeout( () => {
            this.formSubmitting = false;
        }, 1000);
    }

    onMergedFormCancel() {
    }

    onMergedFormValidationErrors(errors?: any) {
        this.formSubmitting = false;
        this.mergedForm.showErrorMessage('Form errors found.  Please check your entries and try again.');
    }

}
