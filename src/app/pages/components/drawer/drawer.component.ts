/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WufDrawerService } from '@anviltech/wuf-ang-drawer';


@Component({
    selector: 'app-cards',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DrawerComponent implements OnInit {
    includeBackdrop: boolean = true;
    allowMinimize: boolean = true;
    minimized: boolean = false;
    drawerId: string = 'exampleDrawer';

    footerHtml: string =
`<ng-container drawerFooter>
    I have a footer
</ng-container>`;

    constructor(public drawerService: WufDrawerService) {
    }

    ngOnInit() {
    }

    toggleDrawer() {
        if (this.drawerService.isActive(this.drawerId)) {
            this.closeDrawer();
        }
        else {
            this.openDrawer();
        }
    }

    private openDrawer() {
        this.drawerService.show(this.drawerId);
    }

    private closeDrawer() {
        this.drawerService.hide(this.drawerId);
    }

    get drawerLabel() {
        if (this.drawerService.isActive(this.drawerId)) {
            return 'Hide';
        }
        else {
            return 'Show';
        }
    }
}
