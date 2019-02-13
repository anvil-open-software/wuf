/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit } from '@angular/core';
import { WufContentFooterService } from '@anviltech/wuf-ang-layout';


@Component({
    selector: 'app-layout-components',
    templateUrl: './layout-components.component.html',
    styleUrls: ['./layout-components.component.scss']
})
export class LayoutComponentsComponent implements OnInit {

    constructor(private footerService: WufContentFooterService) {
    }

    ngOnInit() {
    }

    styleCode = `@import "~@anviltech/wuf-web-assets/src/assets/styles/library”;`;

    headCode = `<base href="/">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	`;

    layoutCodeBasic = `<wuf-content-header>
	<!-- insert page header content here -->
	</wuf-content-header>

	<wuf-content-main>
	<!-- insert page content here -->
	</wuf-content-main>
	
	<wuf-content-footer>
	<!-- insert page footer content here -->
	</wuf-content-footer>
	`;

    headerCode = `
	<wuf-content-header>
		<!-- insert page header content here -->
		<ng-container toolbarLeft>
			<wuf-breadcrumb [items]="[{ link: '/', label: 'Introduction' }, { link: '/setup', label: 'Application Setup' }, { link: null, label: 'Layout Components', active: true }]"></wuf-breadcrumb>
		</ng-container>
	
		<ng-container toolbarRight>
			<!--page-level utilities here-->
		</ng-container>
	</wuf-content-header>
	`;

    contentCode = `
	<wuf-content-main>
		Page content goes here
	</wuf-content-main>
	`;

    footerCode = `
	<wuf-content-footer>
		footer content goes here
	</wuf-content-footer>
	`;

    footerToggleCode1 = `import { Component, OnInit } from '@angular/core';
	import { WufContentFooterService } from '@anviltech/wuf-ang-layout';
	
	
	@Component({
		selector: 'app-layout-components',
		templateUrl: './layout-components.component.html',
		styleUrls: ['./layout-components.component.scss']
	})
	export class LayoutComponentsComponent implements OnInit {
	
		constructor(private footerService: WufContentFooterService) {
		}
	
		ngOnInit() {
		}
		
		toggleFooter() {
			this.footerService.toggleFooter();
		}
	}
	`;

    footerToggleCode2 = `<a [routerLink]="" (click)="toggleFooter()">toggle page footer</a>`;

    toggleFooter() {
        this.footerService.toggleFooter();
    }

}
