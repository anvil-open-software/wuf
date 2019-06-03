/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import {
    Component,
    Input,
    Output,
    SimpleChange,
    EventEmitter,
    OnChanges,
    ViewEncapsulation
} from '@angular/core';

import { Grid } from './services/grid';
import { DataSource } from './data-source/data-source';
import { Row } from './data-set/row';
import { deepExtend } from './services/helpers';
import { WufSmartTableLocalDataSource } from './data-source/local/local.data-source';
import { WufSmartTableValidatorService } from './services/validator.service';


@Component({
    selector: 'wuf-smart-table',
    styleUrls: ['./smart-table.component.scss'],
    templateUrl: './smart-table.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class WufSmartTableComponent implements OnChanges {

    @Input() source: any;
    @Input() settings: Object = {};

    @Output() rowSelect = new EventEmitter<any>();
    @Output() userRowSelect = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() edit = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() custom = new EventEmitter<any>();
    @Output() deleteConfirm = new EventEmitter<any>();
    @Output() editConfirm = new EventEmitter<any>();
    @Output() createConfirm = new EventEmitter<any>();
    @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();

    tableWidth: string;
    tableClass: string;
    tableId: string;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isShowHeader: boolean;
    isPagerDisplay: boolean;
    rowClassFunction: Function;
    width: string;
    valign: string;
    hover: boolean;
    alternatingRowColors: boolean;

    constructor(private validator: WufSmartTableValidatorService) {
    }

    grid: Grid;
    defaultSettings: Object = {
        mode: 'inline', // inline | external | click-to-edit
        title: '',
        selectMode: 'none', // single | multi | none
        hideHeader: false,
        hideSubHeader: false,
        width: '100%',
        valign: 'middle',
        hover: false,
        alternatingRowColors: true,
        noDataMessage: '(No data found)',
        actions: {
            title: 'Actions',
            add: {
                include: true,
                position: 'header',
                tip: 'Add new',
                confirm: false,
                insertMethod: 'prepend',
                createFormShownInitial: false,
                createFormShownAlways: false
            },
            edit: {
                include: true,
                position: 'right',
                tip: 'Edit',
                confirm: false
            },
            delete: {
                include: true,
                position: 'right',
                tip: 'Delete',
                confirm: false
            },
            save: {
                include: true,
                tip: 'Save'
            },
            cancel: {
                include: true,
                tip: 'Cancel'
            },
            create: {
                include: true,
                tip: 'Save'
            },
            custom: []
        },
        filter: {
            placeholder: 'Filter...'
        },
        attr: {
            id: '',
            class: ''
        },
        columns: {},
        pager: {
            display: true,
            perPage: 10
        },
        rowClassFunction: () => ''
    };

    isAllSelected: boolean = false;

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings(), this.validator);
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        } else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isShowHeader = this.grid.getSetting('title');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
        this.tableWidth = this.grid.getSetting('width');
        this.valign = this.grid.getSetting('valign');
        this.hover = this.grid.getSetting('hover');
        this.alternatingRowColors = this.grid.getSetting('alternatingRowColors');
        this.hover = this.grid.getSetting('hover');
    }

    editRowSelect(row: Row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }

    onUserSelectRow(row: Row) {
        if (this.grid.getSetting('selectMode') === 'none') {
            return;
        }
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }

    onRowHover(row: Row) {
        this.rowHover.emit(row);
    }

    multipleSelectRow(row: Row) {
        if (this.grid.getSetting('selectMode') === 'none') {
            return;
        }

        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }

    onSelectAllRows($event: any) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);

        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }

    onSelectRow(row: Row) {
        if (this.grid.getSetting('selectMode') === 'none') {
            return;
        }

        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }

    onMultipleSelectRow(row: Row) {
        this.emitSelectRow(row);
    }

    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings(), this.validator);
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }

    prepareSource(): DataSource {
        if (this.source instanceof DataSource) {
            return this.source;
        } else if (this.source instanceof Array) {
            return new WufSmartTableLocalDataSource(this.source);
        }

        return new WufSmartTableLocalDataSource();
    }

    prepareSettings(): Object {
        return deepExtend({}, this.defaultSettings, this.settings);
    }

    changePage($event: any) {
        this.resetAllSelector();
    }

    sort($event: any) {
        this.resetAllSelector();
    }

    filter($event: any) {
        this.resetAllSelector();
    }

    private resetAllSelector() {
        this.isAllSelected = false;
    }

    private emitUserSelectRow(row: Row | any) {
        const selectedRows = this.grid.getSelectedRows();

        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : []
        });
    }

    private emitSelectRow(row: Row | any) {
        if (this.grid.getSetting('selectMode') === 'none') {
            return;
        }

        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source
        });
    }

}
