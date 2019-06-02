/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Column } from '../../../data-set/column';


export class DefaultFilter implements Filter, OnDestroy {

    delay: number = 300;
    changesSubscription: Subscription;
    @Input() query: string;
    @Input() column: Column;
    @Output() filter = new EventEmitter<string>();

    ngOnDestroy() {
        if (this.changesSubscription && !this.changesSubscription.closed) {
            this.changesSubscription.unsubscribe();
        }
    }

    setFilter() {
        this.filter.emit(this.query);
    }
}

export interface Filter {

    delay?: number;
    changesSubscription?: Subscription;
    query: string;
    column: Column;
    filter: EventEmitter<string>;
}
