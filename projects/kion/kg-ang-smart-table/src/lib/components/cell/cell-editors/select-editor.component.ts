/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { KgSmartTableDefaultEditor } from './default-editor';


@Component({
    selector: 'select-editor',
    template: `
        <select [ngClass]="inputClass"
                class="form-control"
                [formControl]="cell.getValidator()"
                [(ngModel)]="cell.newValue"
                [name]="cell.getId()"
                [disabled]="!cell.isEditable()"
                (click)="onClick.emit($event)"
                (keydown.enter)="onEdited.emit($event)"
                (keydown.esc)="onStopEditing.emit()">

            <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                    [selected]="option.value === cell.getValue()">{{ option.title }}
            </option>
        </select>
    `,
    encapsulation: ViewEncapsulation.None
})
export class SelectEditorComponent extends KgSmartTableDefaultEditor {

    constructor() {
        super();
    }
}
