/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';


@Component({
    selector: 'app-layout-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LayoutBasicComponent implements OnInit {

    title: string;
    configSubscription: any;

    constructor(
        public configService: WufConfigurationService) {
    }

    ngOnInit() {
        // Subscribe to configuration updates
        this.configSubscription = this.configService.onConfigChange().subscribe(
            newConfig => {
                this.onConfigChange(newConfig);
            },
            err => {
                console.warn('error on subscription:', err);
            }
        );
    }

    onConfigChange(newConfig: any) {
        // Add page title to login screen
        this.title = newConfig.hasOwnProperty('name') ? newConfig['name'] : undefined;
    }

}
