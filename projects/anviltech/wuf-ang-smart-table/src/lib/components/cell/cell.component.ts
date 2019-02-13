/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../lib/grid';
import { WufSmartTableCell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';


@Component({
    selector: 'wuf-smart-table-cell',
    template: `
        <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
        <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                              [inputClass]="inputClass"
                              (edited)="onEdited($event)">
        </table-cell-edit-mode>
    `,
    encapsulation: ViewEncapsulation.None
})
export class CellComponent {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() editConfirm: EventEmitter<any>;
    @Input() createConfirm: EventEmitter<any>;
    @Input() isNew: boolean;
    @Input() cell: WufSmartTableCell;
    @Input() inputClass: string = '';
    @Input() mode: string = 'inline';
    @Input() isInEditing: boolean = false;

    @Output() edited = new EventEmitter<any>();

    onEdited(event: any) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        } else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
}
