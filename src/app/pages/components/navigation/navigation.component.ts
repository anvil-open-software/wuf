/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-navlink',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class NavigationComponent implements OnInit {
    // Set the URL from which to fetch the routes/navigation data object.
    // We're setting this to a dummy, local route for this app but you
    // can & should use a data service for a real app.

    dataUrl: string = '/api/navigation';
    exampleJson = `
	    {
	      "links":
	      [
	        {
	          "link": "/",
	          "label": "Home",
	          "icon": "&#xE88A;"
	          "id": "nav-home",
	          "links": [
	            ...
	          ]
	        }
	        ...
	      ]
	    }
	`;

    exampleHtml1 = `<wuf-navigation [dataUrl]="dataUrl"></wuf-navigation>`;
    exampleHtml2 = `<wuf-navigation [data]="JSONobject"></wuf-navigation>`;
    exampleHtml3 = `<wuf-navigation>
  <div class="nav-wrap">
    <ul class="nav d-flex flex-column">
      <wuf-navigation-link
        [link]="'/'"
        [label]="'Introduction'"
        [icon]="'&#xE88A;'"
        [id]="'nav-intro'"
        [position]="configService.config.navigation.position"
        [iconPosition]="left"
      ></wuf-navigation-link>
      <wuf-navigation-link
        [link]="'/layout'"
        [label]="'Layout'"
        [icon]="'&#xE88A;'"
        [id]="'nav-layout'"
        [position]="configService.config.navigation.position"
        [iconPosition]="left"
      ></wuf-navigation-link>
      ...
    </ul>
  </div>
  </wuf-navigation>
`;
    exampleHtml4 = `<wuf-navigation [data]="navData" [position]="configService.config.navigation.position"></wuf-navigation>`;

    exampleHtml5 = `<wuf-navigation [data]="navData" [iconPosition]="configService.config.navigation.iconPosition"></wuf-navigation>`;

    constructor() {
    }

    ngOnInit() {
    }
}
