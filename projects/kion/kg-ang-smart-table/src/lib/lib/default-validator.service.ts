/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KgSmartTableValidatorService } from './validator.service';

@Injectable()
export class DefaultKgSmartTableValidatorService implements KgSmartTableValidatorService {
    getFormGroup(): FormGroup {
        return new FormGroup({});

    }
}
