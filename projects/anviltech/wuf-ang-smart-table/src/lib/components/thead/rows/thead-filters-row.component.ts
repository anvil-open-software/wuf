/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation, OnInit } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';


@Component({
    selector: '[wuf-st-thead-filters-row]',
    template: `
        <th *ngIf="isMultiSelectVisible"></th>
        <th wuf-st-add-button *ngIf="showActionColumnLeft"
            [grid]="grid"
            (create)="create.emit($event)">
        </th>
        <th *ngFor="let column of grid.getColumns()" class="wuf-smart-th {{ column.id }}">
            <wuf-smart-table-filter [source]="source"
                                   [filterPlaceholder]="filterPlaceholder"
                                   [column]="column"
                                   [inputClass]="filterInputClass"
                                   (filter)="filter.emit($event)">
            </wuf-smart-table-filter>
        </th>
        <th wuf-st-add-button *ngIf="showActionColumnRight"
            [grid]="grid"
            [source]="source"
            (create)="create.emit($event)">
        </th>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TheadFitlersRowComponent implements OnChanges, OnInit {

    @Input() grid: Grid;
    @Input() source: DataSource;

    @Output() create = new EventEmitter<any>();
    @Output() filter = new EventEmitter<any>();

    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    filterInputClass: string;
    filterPlaceholder: string;

    ngOnInit() {
        this.filterPlaceholder = this.grid.getSetting('filter.placeholder');
    }

    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
}
