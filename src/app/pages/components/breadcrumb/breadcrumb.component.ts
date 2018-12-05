import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class BreadcrumbComponent implements OnInit {

	breadcrumbHtmlCode1 = `
	<kg-content-header>
		<!-- insert page header content here -->
		<ng-container toolbarContent>
			<kg-breadcrumb></kg-breadcrumb>
		</ng-container>
		<ng-container utilities>
			<!--page-level utilities here-->
		</ng-container>
	</kg-content-header>`;

	breadcrumbHtmlCode2 = `
	<ol class="breadcrumb">
		<li class="breadcrumb-item">
			<a [routerLink]="'/'" class="breadcrumb-link">Home</a>
			Current Page
		</li>
	</ol>`;

	breadcrumbHtmlCode3 = `<kg-breadcrumb [items]="[{ link: '/', label: 'Introduction' },
			{ link: '/components', label: 'Components' }, { link: null, label: 'Breadcrumb', active: true }]">
		</kg-breadcrumb>`;

	ngOnInit() {
	}
}
