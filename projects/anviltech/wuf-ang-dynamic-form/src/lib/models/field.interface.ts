import { Validators } from '@angular/forms';


export interface TranslationKey {
    label: string;
    hint?: string;
    message?: string;
}

export interface Validator {
    name: string;
    validator: Validators;
    message: string;
    translationKey?: TranslationKey;
}

export interface Option {
    label: string;
    value: any;
    hint: string;
    translationKey?: TranslationKey;
}

export interface FieldConfig {
    label?: string;
    name?: string;
    type: string;
    inputType?: string;
    options?: Option[];
    value?: any;
    hint?: string;
    classNames?: string;
    rows?: number; // Number of rows to display in a textarea
    fields?: FieldConfig[];
    validators?: Validator[];
    translationKey?: TranslationKey;
    readonly?: boolean;
    disabled?: boolean;
    showAsGroup?: boolean;
    listConfig?: any;
}
