/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-layout-base-styles',
    templateUrl: './base-styles.component.html',
    styleUrls: ['./base-styles.component.scss']
})
export class SetupBaseStylesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    headCode = `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	`;
}
