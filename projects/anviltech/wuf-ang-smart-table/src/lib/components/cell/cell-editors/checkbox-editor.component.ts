/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { WufSmartTableDefaultEditor } from './default-editor';


@Component({
    selector: 'checkbox-editor',
    styleUrls: ['./editor.component.scss'],
    template: `
        <input [ngClass]="inputClass"
               type="checkbox"
               class="form-control"
               [formControl]="cell.getValidator()"
               [name]="cell.getId()"
               [disabled]="!cell.isEditable()"
               [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
               (click)="onClick.emit($event)"
               (change)="onChange($event)">
    `,
    encapsulation: ViewEncapsulation.None
})
export class CheckboxEditorComponent extends WufSmartTableDefaultEditor {

    constructor() {
        super();
    }

    onChange(event: any) {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
}
