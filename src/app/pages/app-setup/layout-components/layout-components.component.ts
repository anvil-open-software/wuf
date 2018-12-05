import { Component, OnInit } from '@angular/core';
import { KgContentFooterService } from '@kion/kg-ang-layout';


@Component({
    selector: 'app-layout-components',
    templateUrl: './layout-components.component.html',
    styleUrls: ['./layout-components.component.scss']
})
export class LayoutComponentsComponent implements OnInit {

    constructor(private footerService: KgContentFooterService) {
    }

    ngOnInit() {
    }

    styleCode = `@import "~@kion/kg-web-assets/src/assets/styles/library”;`;

    headCode = `<base href="/">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	`;

    layoutCodeBasic = `<kg-content-header>
	<!-- insert page header content here -->
	</kg-content-header>

	<kg-content-main>
	<!-- insert page content here -->
	</kg-content-main>
	
	<kg-content-footer>
	<!-- insert page footer content here -->
	</kg-content-footer>
	`;

    headerCode = `
	<kg-content-header>
		<!-- insert page header content here -->
		<ng-container toolbarContent>
			<kg-breadcrumb [items]="[{ link: '/', label: 'Introduction' }, { link: '/setup', label: 'Application Setup' }, { link: null, label: 'Layout Components', active: true }]"></kg-breadcrumb>
		</ng-container>
	
		<ng-container utilities>
			<!--page-level utilities here-->
		</ng-container>
	</kg-content-header>
	`;

    contentCode = `
	<kg-content-main>
		Page content goes here
	</kg-content-main>
	`;

    footerCode = `
	<kg-content-footer>
		footer content goes here
	</kg-content-footer>
	`;

    footerToggleCode1 = `import { Component, OnInit } from '@angular/core';
	import { KgContentFooterService } from '@kion/kg-ang-layout';
	
	
	@Component({
		selector: 'app-layout-components',
		templateUrl: './layout-components.component.html',
		styleUrls: ['./layout-components.component.scss']
	})
	export class LayoutComponentsComponent implements OnInit {
	
		constructor(private footerService: KgContentFooterService) {
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
