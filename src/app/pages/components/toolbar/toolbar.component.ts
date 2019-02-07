/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-breadcrumb',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ToolbarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    toolbarHtmlCode = `
	<wuf-toolbar>
		<ng-container toolbarLeft>
			left side
		</ng-container>
		<ng-container toolbarRight>
			right side
		</ng-container>
	</wuf-toolbar>
	`;
}
