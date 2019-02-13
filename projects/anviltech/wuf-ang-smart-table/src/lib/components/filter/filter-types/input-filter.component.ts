/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { skip, distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { DefaultFilter } from './default-filter';


@Component({
    selector: 'input-filter',
    template: `
        <input [(ngModel)]="query"
               [ngClass]="inputClass"
               [formControl]="inputControl"
               class="form-control"
               type="text"
               [placeholder]="filterPlaceholder"/>
    `,
    encapsulation: ViewEncapsulation.None
})
export class InputFilterComponent extends DefaultFilter implements OnInit {

    @Input() filterPlaceholder: string;
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
