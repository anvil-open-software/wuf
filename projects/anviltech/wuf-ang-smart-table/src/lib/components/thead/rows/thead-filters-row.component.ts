/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation, OnInit } from '@angular/core';

import { Grid } from '../../../services/grid';
import { DataSource } from '../../../data-source/data-source';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: '[wuf-st-thead-filters-row]',
    template: `
        <th *ngIf="isMultiSelectVisible"></th>
        <th *ngIf="showActionColumnLeft">
            <div
                *ngIf="showAddButton"
                wuf-st-add-button
                position="left"
                [grid]="grid"
                [source]="source"
                (create)="create.emit($event)"></div>
        </th>
        <th *ngFor="let column of grid.getColumns()" class="wuf-smart-th {{ column.id }}">
            <wuf-smart-table-filter
                [source]="source"
                [filterPlaceholder]="filterPlaceholder | translate"
                [column]="column"
                (filter)="filter.emit($event)">
            </wuf-smart-table-filter>
        </th>
        <th *ngIf="showActionColumnRight">
            <div
                *ngIf="showAddButton"
                wuf-st-add-button
                position="right"
                [grid]="grid"
                [source]="source"
                (create)="create.emit($event)"></div>
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
    showAddButton: boolean;
    filterPlaceholder: string;

    constructor(public translate: TranslateService) {}

    ngOnInit() {
        this.filterPlaceholder = this.grid.getSetting('filter.placeholder');
    }

    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.isActionsVisible('left');
        this.showActionColumnRight = this.grid.isActionsVisible('right');
        this.showAddButton = this.grid.getSetting('actions.add.include') && !this.grid.showButton('add', 'header');
    }
}
