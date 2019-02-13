/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { WufContentFooterService } from '@anviltech/wuf-ang-layout';


@Component({
    selector: 'app-home',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GettingStartedComponent implements OnInit, OnDestroy {
    constructor(private kgContentFooterService: WufContentFooterService) {
    }

    ngOnInit() {
        // this.kgContentFooterService.showFooter();
    }

    ngOnDestroy() {
        // this.kgContentFooterService.hideFooter();
    }
}
