import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
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
    templateUrl: './dynamic-form-test.component.html',
    styleUrls: ['./dynamic-form-test.component.scss'],
    providers: [DynamicFormMetadataService],
    encapsulation: ViewEncapsulation.Emulated
})
export class DynamicFormTestComponent implements OnInit {

    @ViewChild('wm') wm: ElementRef;

    translateSubscription: Subscription;
    baseBreadcrumb: string;
    currentBreadcrumb: string = 'Dynamic Form Test';
    objType: string = 'user';

    formData: string;
    formGroup: FormGroup;

    useSampleMetadata: boolean = false;

    /***** dynamic form stuff *****/
    @ViewChild(WufDynamicFormComponent) dynamicForm: any;
    maxWidth: string = '700px';
    formConfig: FieldConfig[] = [];
    formSubmitting: boolean = false;
    finalFormConfig: FieldConfig[];

    sampleMetadata: any[] = [
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
        },
        // {
        //     type: 'button',
        //     label: 'Submit'
        // }
    ];

    /***** Dynamic form data *****/
    dynamicSourceForm: FormGroup;
    dynamicSourceFormModel: any = {
        sourceDataObject: [''],
        metadata: [''],
        finalFormData: ['']
    };

    sourceObject: any = {
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

    finalFormData: any[] = [];

    /***** Example static form *****/
    staticForm: FormGroup;
    staticFormModel: any = {
        // Include all properties (including those not displayed) that must be submitted
        firstName: [''],
        lastName: [''],
        address: [''],
        selectInput: [],
        multiselectInput: [['option1', 'option3']],
        dateInput: [''],
        clearableInput: [''],
        placeholderInput: [''],
        sliderInput: [40],
        radioGroup: ['1'],
        check1: [],
        check2: [],
        check3: [true],
        slide1: [],
        slide2: [],
        slide3: []
    };

    constructor(
        public translate: TranslateService,
        private formBuilder: FormBuilder,
        private metadataService: DynamicFormMetadataService,
        private http: HttpClient
    ) {
        // Subscribe to language changes
        this.translateSubscription = translate.onLangChange.subscribe(($event: LangChangeEvent) => {
            this.onLanguageChange($event);
        });
    }

    ngOnInit() {
        this.translateStrings();

        // Set up the example static form using FormBuilder
        this.staticForm = this.formBuilder.group(this.staticFormModel);

        // Set up the example dynamic form input fields
        this.dynamicSourceForm = this.formBuilder.group(this.dynamicSourceFormModel);

        //
        this.getObjMetadata();

    }

    getObjMetadata() {
        // Get metadata from BFF
        //return this.http.get<any>('/api/dynamicform').subscribe(
            //results => {
                // Success.  We now have metadata for forms.
                const metadata = {
                    blacklist: ['id', 'uri'],
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
                }

                //const metadata = results.data;

                // Set up the data source for the dynamic form
                this.dynamicSourceForm.patchValue({
                    sourceDataObject: [JSON.stringify(this.sourceObject, null, 4)],
                    metadata: [JSON.stringify(metadata, null, 4)],
                    finalFormData: [JSON.stringify(this.finalFormData, null, 4)],
                });
            //}
            /*error => {
                // Catch observable errors
                console.error('Error on metadata subscription:', error);
            }
        );*/
    }

    translateStrings() {
        this.translate.get([
            'FRAME.BREADCRUMB'
        ]).subscribe((res: string) => {
            this.baseBreadcrumb = res['FRAME.BREADCRUMB'];
        });
    }

    onLanguageChange($event) {
        // Language has changed.  Now update the display.
        this.translateStrings();
    }

    onMetaDataChange() {
        this.dynamicSourceForm.controls.finalFormData.setValue('{}');
    }

    onGenerateFormFromDataClick() {
        this.createFinalData();
        this.formConfig = this.useSampleMetadata ? this.sampleMetadata : this.finalFormConfig;
        this.dynamicForm = WufDynamicFormComponent;

        setTimeout(() => {
            // Scroll form into view
            const target = document.querySelector('#dynamicFormTitle');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 250);
    }

    onCreateFinalDataClick() {
        this.formConfig = [];
        this.createFinalData();

        // Display final metadata in form
        this.dynamicSourceForm.controls.finalFormData.setValue(JSON.stringify(this.finalFormConfig, null,  4));
    }

    createFinalData() {
        // Merge source data object with meta data in order to generate final form data
        let sourceDataObj: any;
        let metadata: any;

        try {
            sourceDataObj = JSON.parse(this.dynamicSourceForm.controls.sourceDataObject.value);
        }
        catch (e) {
            this.dynamicForm.showErrorMessage('Invalid JSON found in Source Data Object field');
            return;
        }

        try {
            metadata = JSON.parse(this.dynamicSourceForm.controls.metadata.value);
        }
        catch (e) {
            this.dynamicForm.showErrorMessage('Invalid JSON found in Metadata field');
            return;
        }

        this.finalFormConfig = this.metadataService.convertObjectToFieldConfig(sourceDataObj, metadata, 'PAGES.TESTDOCUMENT.FORM', '',  true);
    }

    onCancelClickInsideForm() {
        this.dynamicForm.cancel();
    }

    onSubmitOutsideForm() {
        this.dynamicForm.submit();
    }

    onDynamicFormSubmit(results?: any) {
        this.formSubmitting = true;
        this.formData = JSON.stringify(results);
        // TODO: send data to server. On success, show success message
        this.dynamicForm.showSuccessMessage('Form submitted successfully!');

        // TODO: this is just for demo purposes
        setTimeout( () => {
            this.formSubmitting = false;
        }, 1000);
    }

    onDynamicFormCancel() {
    }

    onDynamicFormValidationErrors(errors?: any) {
        this.formSubmitting = false;
        this.dynamicForm.showErrorMessage('Form errors found.  Please check your entries and try again.');
    }

    sendData(next: any) {
        // Show loading animation
        this.formSubmitting = true;

        // // Send post
        // this.tenantService.updateTenant(this.appearanceForm.value).subscribe(
        //     results => {
        //         // Server response received
        //
        //         if (results.success) {
        //             // Success!
        //
        //             const item = results.data;
        //             this.formSubmitting = false;
        //
        //             if (this.isNew) {
        //                 // This was a new item, so we have to let the page that called this modal know
        //                 this.data.isNew = this.isNew;
        //             }
        //
        //             this.data.item = item;
        //             this.formSubmitting = false;
        //             this.dialogRef.close(this.data); // Close this modal
        //             next();
        //         }
        //         else {
        //             // Handle server errors
        //
        //             // Get the error code from the server results (if any)
        //             const errorCode = results.data && results.data.hasOwnProperty('errorCode') ? results.data['errorCode'] : undefined;
        //
        //             this.translate.get([
        //                 'PAGES.ADMIN_SAAS.TENANTS.DIALOG.ERRORS.UPDATE',
        //                 'GLOBAL.ERRORS.' + errorCode
        //             ]).subscribe((res: string) => {
        //                 const errorMessage: string = res['PAGES.ADMIN_SAAS.TENANTS.DIALOG.ERRORS.UPDATE'];
        //                 const errorCodeMessage: string = errorCode ? res['GLOBAL.ERRORS.' + errorCode] : '';
        //
        //                 this.showErrorMessage(errorMessage + ' ' + errorCodeMessage);
        //                 this.formSubmitting = false;
        //
        //                 // Reset form state
        //                 this.appearanceForm.markAsPristine();
        //                 this.appearanceForm.markAsUntouched();
        //             });
        //         }
        //
        //     },
        //     error => {
        //         // Catch observable errors
        //         console.error('Error on item update subscription. Error:', error);
        //     }
        // );
    }

}
