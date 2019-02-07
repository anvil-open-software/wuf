/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class BreadcrumbComponent implements OnInit {

	breadcrumbHtmlCode1 = `
	<wuf-content-header>
		<!-- insert page header content here -->
		<ng-container toolbarLeft>
			<wuf-breadcrumb></wuf-breadcrumb>
		</ng-container>
		<ng-container toolbarRight>
			<!--page-level utilities here-->
		</ng-container>
	</wuf-content-header>`;

	breadcrumbHtmlCode2 = `
	<ol class="breadcrumb">
		<li class="breadcrumb-item">
			<a [routerLink]="'/'" class="breadcrumb-link">Home</a>
			Current Page
		</li>
	</ol>`;

	breadcrumbHtmlCode3 = `<wuf-breadcrumb [items]="[{ link: '/', label: 'Introduction' },
			{ link: '/components', label: 'Components' }, { link: null, label: 'Breadcrumb', active: true }]">
		</wuf-breadcrumb>`;

	ngOnInit() {
	}
}
