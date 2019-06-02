/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../services/grid';
import { DataSource } from '../../../data-source/data-source';


@Component({
    selector: '[wuf-st-thead-header-row]',
    template: `
        <th [attr.colspan]="columnCount">
            <h3 translate>{{title}}</h3>
            <div class="actions" *ngIf="showActionColumnHeader">
                <span
                    wuf-st-add-button
                    position="header"
                    *ngIf="showAddButton"
                    [grid]="grid"
                    [source]="source"
                    (create)="create.emit($event)"
                ></span>
            </div>
        </th>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TheadHeaderRowComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() source: DataSource;

    @Output() create = new EventEmitter<any>();
    @Output() sort = new EventEmitter<any>();
    @Output() selectAllRows = new EventEmitter<any>();

    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    showActionColumnHeader: boolean;
    showAddButton: boolean;
    columnCount: number;
    title: string = '';


    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.showAddButton = this.grid.showButton('add', 'header');
        this.showActionColumnHeader = this.grid.showActionColumn('header');

        // Determine how to display the title (either as a string or as a translate key)
        this.title = this.grid.getSetting('title');

        // Determine column count
        this.columnCount = this.grid.getColumns().length
            + (this.isMultiSelectVisible ? 1 : 0)
            + (this.showActionColumnLeft ? 1 : 0)
            + (this.showActionColumnRight ? 1 : 0);
    }

}
