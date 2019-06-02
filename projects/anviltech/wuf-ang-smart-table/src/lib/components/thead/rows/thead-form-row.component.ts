/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../services/grid';
import { Row } from '../../../data-set/row';


@Component({
    selector: '[wuf-st-thead-form-row]',
    template: `
        <th *ngIf="isMultiSelectVisible"></th>
        <th *ngIf="showActionColumnLeft" class="wuf-smart-actions">
            <wuf-st-actions [grid]="grid" (create)="onCreate($event)"></wuf-st-actions>
        </th>
        <th *ngFor="let cell of grid.getNewRow().getCells()">
            <wuf-smart-table-cell
                [cell]="cell"
                [grid]="grid"
                [isNew]="true"
                [createConfirm]="createConfirm"
                [isInEditing]="grid.getNewRow().isInEditing"
                (edited)="onCreate($event)">
            </wuf-smart-table-cell>
        </th>
        <th *ngIf="showActionColumnRight" class="wuf-smart-actions">
            <wuf-st-actions [grid]="grid" (create)="onCreate($event)"></wuf-st-actions>
        </th>
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

    onCreate(event: any) {
        event.stopPropagation();

        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }

    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right') || this.grid.showActionColumn('header');
    }
}
