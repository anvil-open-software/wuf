/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

// import { CompleterService } from 'ng2-completer';

import { DefaultFilter } from './default-filter';


@Component({
    selector: 'completer-filter',
    template: `
        <!--<ng2-completer [(ngModel)]="query"-->
        <!--(ngModelChange)="inputTextChanged($event)"-->
        <!--[dataService]="column.getFilterConfig().completer.dataService"-->
        <!--[minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"-->
        <!--[pause]="column.getFilterConfig().completer.pause || 0"-->
        <!--[placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"-->
        <!--(selected)="completerContent.next($event)">-->
        <!--</ng2-completer>-->
    `,
    encapsulation: ViewEncapsulation.None
})
export class CompleterFilterComponent extends DefaultFilter implements OnInit {

    completerContent = new Subject<any>();

    constructor() {
        super();
    }

    // constructor(private completerService: CompleterService) {
    // 	super();
    // }

    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService.descriptionField(config.descriptionField);

        this.changesSubscription = this.completerContent
            .pipe(
                map((ev: any) => (ev && ev.title) || ev || ''),
                distinctUntilChanged(),
                debounceTime(this.delay)
            )
            .subscribe((search: string) => {
                this.query = search;
                this.setFilter();
            });
    }

    inputTextChanged(event: string) {
        // Workaround to trigger the search event when the home/end buttons are clicked.
        // When this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
