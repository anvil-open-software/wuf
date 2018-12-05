/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { KgSmartTableDefaultEditor } from './default-editor';


@Component({
    selector: 'textarea-editor',
    styleUrls: ['./editor.component.scss'],
    template: `
        <textarea [ngClass]="inputClass"
                  class="form-control"
                  [formControl]="cell.getValidator()"
                  [(ngModel)]="cell.newValue"
                  [name]="cell.getId()"
                  [disabled]="!cell.isEditable()"
                  [placeholder]="cell.getTitle()"
                  (click)="onClick.emit($event)"
                  (keydown.enter)="onEdited.emit($event)"
                  (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TextareaEditorComponent extends KgSmartTableDefaultEditor {

    constructor() {
        super();
    }
}
