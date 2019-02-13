/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';


@Component({
    selector: 'wuf-st-column-title',
    template: `
        <div class="wuf-smart-title">
            <wuf-smart-table-title [source]="source" [column]="column"
                                  (sort)="sort.emit($event)"></wuf-smart-table-title>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ColumnTitleComponent {

    @Input() column: Column;
    @Input() source: DataSource;

    @Output() sort = new EventEmitter<any>();

}
