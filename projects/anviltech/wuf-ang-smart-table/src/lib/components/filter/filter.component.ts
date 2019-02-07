/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';


@Component({
    selector: 'wuf-smart-table-filter',
    styleUrls: ['./filter.component.scss'],
    template: `
        <div class="wuf-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
            <select-filter *ngSwitchCase="'list'"
                           [query]="query"
                           [ngClass]="inputClass"
                           [column]="column"
                           (filter)="onFilter($event)">
            </select-filter>
            <checkbox-filter *ngSwitchCase="'checkbox'"
                             [query]="query"
                             [ngClass]="inputClass"
                             [column]="column"
                             (filter)="onFilter($event)">
            </checkbox-filter>
            <completer-filter *ngSwitchCase="'completer'"
                              [query]="query"
                              [ngClass]="inputClass"
                              [column]="column"
                              (filter)="onFilter($event)">
            </completer-filter>
            <input-filter *ngSwitchDefault
                          [query]="query"
                          [ngClass]="inputClass"
                          [filterPlaceholder]="filterPlaceholder"
                          [column]="column"
                          (filter)="onFilter($event)">
            </input-filter>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnChanges {

    @Input() column: Column;
    @Input() source: DataSource;
    @Input() inputClass: string = '';
    @Input() filterPlaceholder: string;

    @Output() filter = new EventEmitter<any>();

    query: string = '';

    protected dataChangedSub: Subscription;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';

                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                } else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k: any, v: any) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }

    onFilter(query: string) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction()
        });
    }
}
