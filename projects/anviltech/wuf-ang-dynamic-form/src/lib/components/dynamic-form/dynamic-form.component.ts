import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FieldConfig } from '../../models/field.interface';


@Component({
    selector: 'wuf-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class WufDynamicFormComponent implements OnInit {
    @Input() fields: FieldConfig[] = [];
    @Output() onSubmit?: EventEmitter<any> = new EventEmitter();
    @Output() onCancel?: EventEmitter<any> = new EventEmitter();
    @Output() onValidationError?: EventEmitter<any> = new EventEmitter();
    @Input() maxWidth?: string = '700px';
    @ViewChild('dynamicForm') ngForm: NgForm;
    @ViewChild('wm') wm: ElementRef;
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.createFormGroup(this.fields);
    }

    get value() {
        return this.form.value;
    }

    createList(items) {
        // TODO: create a list
    }

    createFormGroup(fields: any[], formGroup?: FormGroup) {
        if (!fields || !fields.length) {
            return;
        }

        const newGroup = formGroup ? formGroup : this.fb.group({});

        fields.forEach(field => {
            let control: any;

            // Return if it's not a type we can handle as a control
            if (field.type === 'button') {
                return;
            }
            else if (field.type === 'list') {
                this.createList(field.value);
                return;
            }

            if (field.type === 'group' && field.fields.length) {
                // Create a nested form group
                const childGroup = new FormGroup({});
                control = this.createFormGroup(field.fields, childGroup);
            }
            else {
                // Create a form control
                control = this.fb.control(
                    {
                        value: field.value,
                        disabled: field.disabled || field.readonly ? true : false
                    },
                    this.bindValidations(field.validators || [])
                );
            }

            newGroup.addControl(field.name, control);
        });

        return newGroup;
    }

    bindValidations(validators: any) {
        if (validators.length > 0) {
            const validList = [];
            validators.forEach(valid => {
                validList.push(valid.validator);
            });

            return Validators.compose(validList);
        }
        return null;
    }

    /***** messaging *****/

    public showErrorMessage(errorMssg: string) {
        this.wm.nativeElement.clearAll();
        this.wm.nativeElement.errorMessage = errorMssg;
        const target = this.wm.nativeElement;
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    public showSuccessMessage(successMssg: string) {
        this.wm.nativeElement.clearAll();
        this.wm.nativeElement.successMessage = successMssg;
        const target = this.wm.nativeElement;
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    /***** form state *****/

    get isValid() {
        return this.form.valid;
    }

    get isDirty() {
        return this.form.dirty;
    }

    get isSubmittable() {
        if (!this.form) {
            return false;
        }

        return this.form.valid && this.form.dirty;
    }

    /***** submit *****/

    onFormSubmit() {
        this.submitForm();
    }

    private submitForm() {
        this.wm.nativeElement.clearAll(); // clear all messages

        event.preventDefault();
        event.stopPropagation();

        if (this.form.valid && this.onSubmit) {
            this.onSubmit.emit(this.form.value);
        }
        else {
            this.validateAllFormFields(this.form);
        }
    }

    public submit() {
        this.submitForm();
    }

    markControlsAsTouched(formGroup: any) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);

            if (control.hasOwnProperty('controls')) {
                // This control is actually a form group, so iterate through it recursively
                this.markControlsAsTouched(control);
                return;
            }

            control.markAsTouched({ onlySelf: true });
        });
    }

    validateAllFormFields(formGroup: FormGroup) {
        this.markControlsAsTouched(formGroup);

        if (!this.form.valid && this.onValidationError) {
            this.onValidationError.emit(this.form.errors);
        }
    }

    /***** cancel *****/

    private cancelForm() {
        this.wm.nativeElement.clearAll(); // clear all messages
        if (this.onCancel) {
            this.onCancel.emit();
        }
    }

    public cancel() {
        this.cancelForm();
    }

}
