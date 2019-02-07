/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

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

    exampleHtml1 = `<wuf-sidebar-footer>Hi<span class="hideOnMinimized">, I'm footer content</span></wuf-sidebar-footer>`;

    exampleHtml2 = `<wuf-sidebar-footer [data]="footerData"></wuf-sidebar-footer>`;

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

    exampleHtml3 = `<wuf-sidebar-footer [dataUrl]="'http://my.footer.api'"></wuf-sidebar-footer>`;
    exampleHtml4 = `<wuf-sidebar-footer [copyrightName]="'KION, Inc.'"></wuf-sidebar-footer>`;

    ngOnInit() {

    }
}
