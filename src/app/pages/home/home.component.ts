/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor() {
    }

    selectedTabIndex: number = 0;

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    setTab(tabIndex: number) {
        this.selectedTabIndex = tabIndex;
    }
}
