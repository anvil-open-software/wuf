/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { KgSmartTableCell } from '../../../lib/data-set/cell';


@Component({
    selector: 'table-cell-edit-mode',
    template: `
        <div [ngSwitch]="getEditorType()">
            <table-cell-custom-editor *ngSwitchCase="'custom'"
                                      [cell]="cell"
                                      [inputClass]="inputClass"
                                      (edited)="onEdited($event)">
            </table-cell-custom-editor>
            <table-cell-default-editor *ngSwitchDefault
                                       [cell]="cell"
                                       [inputClass]="inputClass"
                                       (edited)="onEdited($event)">
            </table-cell-default-editor>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class EditCellComponent {

    @Input() cell: KgSmartTableCell;
    @Input() inputClass: string = '';

    @Output() edited = new EventEmitter<any>();

    onEdited(event: any): boolean {
        this.edited.next(event);
        return false;
    }

    getEditorType(): string {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
