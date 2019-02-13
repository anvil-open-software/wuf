/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export interface WufBreadcrumbItem {
    link: string;
    queryParams?: any;
    active: boolean;
    label: string;
}

@Component({
    selector: 'wuf-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WufBreadcrumbComponent implements OnInit {

    @Input() items?: WufBreadcrumbItem[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
