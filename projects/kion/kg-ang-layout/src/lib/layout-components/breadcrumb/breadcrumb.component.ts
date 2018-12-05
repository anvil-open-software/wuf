/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export interface KgBreadcrumbItem {
    link: string;
    queryParams?: any;
    active: boolean;
    label: string;
}

@Component({
    selector: 'kg-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KgBreadcrumbComponent implements OnInit {

    @Input() items?: KgBreadcrumbItem[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
