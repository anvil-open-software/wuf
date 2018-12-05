/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { skip, distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { DefaultFilter } from './default-filter';


@Component({
    selector: 'select-filter',
    template: `
        <select [ngClass]="inputClass"
                class="form-control"
                [(ngModel)]="query"
                [formControl]="inputControl">

            <option value="">{{ column.getFilterConfig().selectText }}</option>
            <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
                {{ option.title }}
            </option>
        </select>
    `,
    encapsulation: ViewEncapsulation.None
})
export class SelectFilterComponent extends DefaultFilter implements OnInit {

    inputControl = new FormControl();

    constructor() {
        super();
    }

    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(
                skip(1),
                distinctUntilChanged(),
                debounceTime(this.delay)
            )
            .subscribe((value: string) => this.setFilter());
    }
}
