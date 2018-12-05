/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';


@Component({
    selector: 'kg-smart-table-title',
    styleUrls: ['./title.component.scss'],
    template: `
        <a href="#" *ngIf="column.isSortable"
           (click)="_sort($event)"
           class="kg-smart-sort-link"
           [ngClass]="currentDirection">
            {{ column.title }}
        </a>
        <i class="material-icons sort-icon" *ngIf="column.isSortable && currentDirection==='desc'"
           (click)="_sort($event)"
           [ngClass]="currentDirection">
            arrow_downward
        </i>
        <i class="material-icons sort-icon" *ngIf="column.isSortable && currentDirection==='asc'"
           (click)="_sort($event)"
           [ngClass]="currentDirection">
            arrow_upward
        </i>
        <span class="kg-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnChanges {

    currentDirection = '';
    @Input() column: Column;
    @Input() source: DataSource;
    @Output() sort = new EventEmitter<any>();

    protected dataChangedSub: Subscription;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();

                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                } else {
                    this.currentDirection = '';
                }

                sortConf.forEach((fieldConf: any) => {

                });
            });
        }
    }

    _sort(event: any) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction()
            }
        ]);
        this.sort.emit(null);
    }

    changeSortDirection(): string {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        } else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
