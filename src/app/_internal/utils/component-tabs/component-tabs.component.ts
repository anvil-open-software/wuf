/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-component-tabs',
    templateUrl: './component-tabs.component.html',
    styleUrls: ['./component-tabs.component.scss']
})

export class ComponentTabsComponent implements OnInit {
    @Input() tabLabel_1 = null;
    @Input() tabLabel_2 = null;
    @Input() tabLabel_3 = null;
    @Input() tabLabel_4 = null;
    @Input() tabLabel_5 = null;
    @Input() tabLabel_6 = null;
    @Input() selectedTabIndex?: number = 0;
    @Input() disableAnimation?: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }
}

