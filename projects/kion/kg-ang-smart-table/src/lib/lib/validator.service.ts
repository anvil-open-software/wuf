import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable()
export abstract class KgSmartTableValidatorService {
    abstract getFormGroup(): FormGroup;
}
