import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-navlink',
    templateUrl: './navigation-footer.component.html',
    styleUrls: ['./navigation-footer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class NavigationFooterComponent implements OnInit {
    // Set the URL from which to fetch the routes/navigation data object.
    // We're setting this to a dummy, local route for this app but you
    // can & should use a data service for a real app.

    constructor() {
    }

    footerDataUrl: string = '/api/footer';

    exampleHtml1 = `<kg-sidebar-footer>Hi<span class="hideOnMinimized">, I'm footer content</span></kg-sidebar-footer>`;

    exampleHtml2 = `<kg-sidebar-footer [data]="footerData"></kg-sidebar-footer>`;

    exampleCode1 = `
	footerData = {
		"items":
		[
			{
				"link": "/help",
				"tooltip": "Help",
				"icon": "help",
				"id": "footer-help"
			},
			{
				"link": "/account",
				"tooltip": "Account",
				"icon": "person",
				"id": "footer-account"
			},
			{
				"link": "/settings",
				"tooltip": "Settings",
				"icon": "settings",
				"id": "footer-settings"
			}
		]
	}`;

    exampleHtml3 = `<kg-sidebar-footer [dataUrl]="'http://my.footer.api'"></kg-sidebar-footer>`;
    exampleHtml4 = `<kg-sidebar-footer [copyrightName]="'KION, Inc.'"></kg-sidebar-footer>`;

    ngOnInit() {

    }
}
