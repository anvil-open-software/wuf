/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

import { WufSmartTableValidatorService } from '@anviltech/wuf-ang-smart-table';


@Injectable()
export class SmartTableWufSmartTableValidatorService implements WufSmartTableValidatorService {
    getFormGroup(): FormGroup {
        // here define and return the FormGroup with the FormControl(s) loaded.
        return new FormGroup({
            'id': new FormControl(
                null,
                [
                    Validators.required,
                ],
                null),
            'name': new FormControl(
                null,
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(15)
                ],
                null)
        });
    }
}
