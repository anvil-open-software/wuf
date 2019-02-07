/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WufSmartTableValidatorService } from './validator.service';

@Injectable()
export class DefaultWufSmartTableValidatorService implements WufSmartTableValidatorService {
    getFormGroup(): FormGroup {
        return new FormGroup({});

    }
}
