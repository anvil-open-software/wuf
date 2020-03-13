import { Injectable } from '@angular/core';
import { FieldConfig } from '../models/field.interface';
import { Validators } from '@angular/forms';


@Injectable()
export class WufDynamicFormService {

    constructor() {
    }



    /**
     * Return whether the control is required based on the presence of a Validator.required in the control
     *  {FieldConfig} field
     *  {boolean}
     */
    isRequired(field: FieldConfig) {
        if (!field.hasOwnProperty('validators') || !field.validators.length) {
            return false;
        }

        for (let i = 0; i < field.validators.length; i++) {
            if (field.validators[i].validator === Validators.required) {
                return true;
            }
        }
    }
}
