/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { WufContentFooterService } from '@anviltech/wuf-ang-layout';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(private kgContentFooterService: WufContentFooterService) {
    }

    selectedTabIndex: number = 0;

    ngOnInit() {
        // this.kgContentFooterService.showFooter();
    }

    ngOnDestroy() {
        // this.kgContentFooterService.hideFooter();
    }

    setTab(tabIndex: number) {
        this.selectedTabIndex = tabIndex;
    }
}
