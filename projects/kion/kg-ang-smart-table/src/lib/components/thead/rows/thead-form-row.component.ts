/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';


@Component({
    selector: '[kg-st-thead-form-row]',
    template: `
        <td *ngIf="isMultiSelectVisible"></td>
        <td *ngIf="showActionColumnLeft" class="kg-smart-actions">
            <kg-st-actions [grid]="grid" (create)="onCreate($event)"></kg-st-actions>
        </td>
        <td *ngFor="let cell of grid.getNewRow().getCells()">
            <kg-smart-table-cell [cell]="cell"
                                 [grid]="grid"
                                 [isNew]="true"
                                 [createConfirm]="createConfirm"
                                 [inputClass]="addInputClass"
                                 [isInEditing]="grid.getNewRow().isInEditing"
                                 (edited)="onCreate($event)">
            </kg-smart-table-cell>
        </td>
        <td *ngIf="showActionColumnRight" class="kg-smart-actions">
            <kg-st-actions [grid]="grid" (create)="onCreate($event)"></kg-st-actions>
        </td>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TheadFormRowComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() createConfirm: EventEmitter<any>;

    @Output() create = new EventEmitter<any>();

    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    addInputClass: string;

    onCreate(event: any) {
        event.stopPropagation();

        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }

    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
}
