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

    exampleHtml1 = `<kg-navigation [dataUrl]="dataUrl"></kg-navigation>`;
    exampleHtml2 = `<kg-navigation [data]="JSONobject"></kg-navigation>`;
    exampleHtml3 = `<kg-navigation>
  <div class="nav-wrap">
    <ul class="nav d-flex flex-column">
      <kg-navigation-link
        [link]="'/'"
        [label]="'Introduction'"
        [icon]="'&#xE88A;'"
        [id]="'nav-intro'"
        [position]="configService.config.navigation.position"
        [iconPosition]="left"
      ></kg-navigation-link>
      <kg-navigation-link
        [link]="'/layout'"
        [label]="'Layout'"
        [icon]="'&#xE88A;'"
        [id]="'nav-layout'"
        [position]="configService.config.navigation.position"
        [iconPosition]="left"
      ></kg-navigation-link>
      ...
    </ul>
  </div>
  </kg-navigation>
`;
    exampleHtml4 = `<kg-navigation [data]="navData" [position]="configService.config.navigation.position"></kg-navigation>`;

    exampleHtml5 = `<kg-navigation [data]="navData" [iconPosition]="configService.config.navigation.iconPosition"></kg-navigation>`;

    constructor() {
    }

    ngOnInit() {
    }
}
