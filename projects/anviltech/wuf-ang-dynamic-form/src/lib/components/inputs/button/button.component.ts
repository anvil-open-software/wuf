import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../models/field.interface';


@Component({
    selector: 'wuf-field-button',
    templateUrl: './button.component.html',
    styles: []
})
export class ButtonComponent implements OnInit {
    field: FieldConfig;
    rootGroup: FormGroup;
    parentGroup: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }
}
