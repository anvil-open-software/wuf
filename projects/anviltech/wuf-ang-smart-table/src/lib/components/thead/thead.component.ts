/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../services/grid';
import { DataSource } from '../../data-source/data-source';


@Component({
    selector: '[wuf-st-thead]',
    templateUrl: './thead.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SmartTableTheadComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() source: DataSource;
    @Input() isAllSelected: boolean;
    @Input() createConfirm: EventEmitter<any>;

    @Output() sort = new EventEmitter<any>();
    @Output() selectAllRows = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() filter = new EventEmitter<any>();

    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isShowTitle: boolean;
    isShowAddButton: boolean;

    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');

        const title = this.grid.getSetting('title');

        if (title) {
            this.isShowTitle = title && typeof title === 'string';
            this.isShowAddButton = this.grid.showButton('add', 'header');
        }
    }
}
