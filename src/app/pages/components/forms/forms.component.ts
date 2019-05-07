/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';

import { WufDrawerService } from '@anviltech/wuf-ang-drawer';


@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FormsComponent implements OnInit {

    // Form model
    formGroup: FormGroup;
    formModel: any = {
        // Include all properties (including those not displayed) that must be submitted
        textInput: [''],
        hintTextInput: [''],
        maxLengthInput: [''],
        requiredInput: ['', [Validators.required, Validators.email]],
        disabledInput: [{value: '', disabled: true}],
        readOnlyInput: [{value: '', disabled: true}],
        textAreaInput: [''],
        selectInput: [],
        multiselectInput: [['option1', 'option3']],
        dateInput: [''],
        textPrefixInput: [''],
        iconPrefixInput: [''],
        iconSuffixInput: [''],
        clearableInput: [''],
        placeholderInput: [''],
        sliderInput: [40],
        radioGroup: ['1'],
        check1: [],
        check2: [],
        check3: [true],
        check4: [],
        check5: [],
        check6: [],
        slide1: [],
        slide2: [],
        slide3: [true],
        slide4: [],
        slide5: [],
        slide6: [],
        childForm: this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            address1: [''],
            address2: [''],
            city: [''],
            state: [''],
            postalCode: [''],
        }),
    };

    // Slider settings
    autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = true;
    step = 10;
    thumbLabel = true;
    vertical = false;

    // Chip inputs
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl1 = new FormControl();
    filteredFruits: Observable<string[]>;
    fruits1: string[] = ['Lemon'];
    allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
    @ViewChild('fruitInput1') fruitInput1: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;
    fruits2: any[] = [
        {name: 'Lemon'},
        {name: 'Lime'},
        {name: 'Apple'},
    ];

    constructor(
        private drawerService: WufDrawerService,
        private formBuilder: FormBuilder
    ) {
        this.filteredFruits = this.fruitCtrl1.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(value) {
        this._tickInterval = coerceNumberProperty(value);
    }
    private _tickInterval = 1;


    ngOnInit() {
        // Set up the form using FormBuilder
        this.formGroup = this.formBuilder.group(this.formModel);

        // Init the form with the data model
        this.formGroup.patchValue({});
    }

    getErrorMessage() {
        return this.formGroup.controls.requiredInput.hasError('required') ? 'You must enter a value' :
            this.formGroup.controls.requiredInput.hasError('email') ? 'Not a valid email' : '';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.formGroup.controls;
    }

    /***** chips *****/

    add1(event: MatChipInputEvent): void {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;

            // Add our fruit
            if ((value || '').trim()) {
                this.fruits1.push(value.trim());
            }

            // Reset the input value
            if (input) {
                input.value = '';
            }

            this.fruitCtrl1.setValue(null);
        }
    }

    remove1(fruit: string): void {
        const index = this.fruits1.indexOf(fruit);

        if (index >= 0) {
            this.fruits1.splice(index, 1);
        }
    }

    chipSelected(event: MatAutocompleteSelectedEvent): void {
        this.fruits1.push(event.option.viewValue);
        this.fruitInput1.nativeElement.value = '';
        this.fruitCtrl1.setValue(null);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

    add2(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.fruits2.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove2(fruit: any): void {
        const index = this.fruits2.indexOf(fruit);

        if (index >= 0) {
            this.fruits2.splice(index, 1);
        }
    }

}
