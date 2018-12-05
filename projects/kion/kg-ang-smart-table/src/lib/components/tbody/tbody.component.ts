/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';


@Component({
    selector: '[kg-st-tbody]',
    styleUrls: ['./tbody.component.scss'],
    templateUrl: './tbody.component.html',
    encapsulation: ViewEncapsulation.None
})
export class KgSmartTableTbodyComponent {

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
    editInputClass: string;
    isActionAdd: boolean;
    isActionEdit: boolean;
    isActionDelete: boolean;
    noDataMessage: string;

    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
}
