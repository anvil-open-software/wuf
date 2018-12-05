/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { KgSmartTableDefaultEditor } from './default-editor';


@Component({
    selector: 'input-editor',
    styleUrls: ['./editor.component.scss'],
    template: `


        <mat-form-field>
            <input [ngClass]="inputClass"
                   matInput
                   class="form-control"
                   [formControl]="cell.getValidator()"
                   [(ngModel)]="cell.newValue"
                   [name]="cell.getId()"
                   [placeholder]="cell.getTitle()"
                   [disabled]="!cell.isEditable()"
                   (click)="onClick.emit($event)"
                   (keydown.enter)="onEdited.emit($event)"
                   (keydown.esc)="onStopEditing.emit()">
        </mat-form-field>
    `,
    encapsulation: ViewEncapsulation.None
})
export class InputEditorComponent extends KgSmartTableDefaultEditor {

    constructor() {
        super();
    }
}
