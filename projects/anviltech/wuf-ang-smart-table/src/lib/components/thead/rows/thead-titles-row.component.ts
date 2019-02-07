/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';


@Component({
    selector: '[wuf-st-thead-titles-row]',
    template: `
        <th wuf-st-checkbox-select-all *ngIf="isMultiSelectVisible"
            [grid]="grid"
            [source]="source"
            [isAllSelected]="isAllSelected"
            (click)="selectAllRows.emit($event)">
        </th>
        <th wuf-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
        <th *ngFor="let column of grid.getColumns()" class="wuf-smart-th {{ column.id }}" [ngClass]="column.class"
            [style.width]="column.width">
            <wuf-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></wuf-st-column-title>
        </th>
        <th wuf-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TheadTitlesRowComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() isAllSelected: boolean;
    @Input() source: DataSource;

    @Output() sort = new EventEmitter<any>();
    @Output() selectAllRows = new EventEmitter<any>();

    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;


    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }

}
