/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Grid } from '../../services/grid';
import { DataSource } from '../../data-source/data-source';


@Component({
    selector: '[wuf-st-tbody]',
    styleUrls: ['./tbody.component.scss'],
    templateUrl: './tbody.component.html',
    encapsulation: ViewEncapsulation.None
})
export class WufSmartTableTbodyComponent implements OnChanges{

    @Input() grid: Grid;
    @Input() source: DataSource;
    @Input() deleteConfirm: EventEmitter<any>;
    @Input() editConfirm: EventEmitter<any>;
    @Input() rowClassFunction: Function;
    @Input() valign: string;

    @Output() save = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<any>();
    @Output() edit = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() custom = new EventEmitter<any>();
    @Output() edited = new EventEmitter<any>();
    @Output() userSelectRow = new EventEmitter<any>();
    @Output() editRowSelect = new EventEmitter<any>();
    @Output() multipleSelectRow = new EventEmitter<any>();
    @Output() rowHover = new EventEmitter<any>();

    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    mode: string;
    isActionAdd: boolean;
    isActionEdit: boolean;
    isActionDelete: boolean;
    noDataMessage: string;
    columnCount: number;

    constructor(public translate: TranslateService) {}

    ngOnChanges() {
        this.mode = this.grid.getSetting('mode');
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add.include');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');

        // Determine column count
        this.columnCount = this.grid.getColumns().length
            + (this.isMultiSelectVisible ? 1 : 0)
            + (this.showActionColumnLeft ? 1 : 0)
            + (this.showActionColumnRight ? 1 : 0);
    }
}
