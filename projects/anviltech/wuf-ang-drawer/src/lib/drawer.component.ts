/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { WufDrawerService } from './drawer.service';


@Component({
    selector: 'wuf-drawer',
    templateUrl: 'drawer.component.html',
    styleUrls: ['drawer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufDrawerComponent implements OnInit, OnDestroy {

    @Input() header: string;
    @Input() id: string;
    @Input() includeBackdrop?: boolean = true;
    @Input() allowMinimize?: boolean = false;
    @Input() minimized?: boolean = false;
    drawerShowSubscription: Subscription;
    drawerHideSubscription: Subscription;
    drawerMinimizeSubscription: Subscription;
    drawerExpandSubscription: Subscription;
    mouseOverDrawer: boolean = false;
    active: boolean = false;

    constructor(public drawerService: WufDrawerService) {

        // In case developer set minimized=true but did not include allowMinimize attribute
        if (this.minimized) {
            this.allowMinimize = true;
        }
    }

    ngOnInit() {
        // Subscribe to hide event
        this.drawerHideSubscription = this.drawerService.hideDrawerObservable().subscribe((message: any) => {
            if (message.id === this.id) {
                this.hide();
            }
        });

        // Subscribe to show event
        this.drawerShowSubscription = this.drawerService.showDrawerObservable().subscribe((message: any) => {
            if (message.id === this.id) {
                this.show();
            }
        });

        // Subscribe to minimize event
        this.drawerMinimizeSubscription = this.drawerService.minimizeDrawerObservable().subscribe((message: any) => {
            if (message.id === this.id) {
                this.minimize();
            }
        });

        // Subscribe to expand event
        this.drawerExpandSubscription = this.drawerService.expandDrawerObservable().subscribe((message: any) => {
            if (message.id === this.id) {
                this.expand();
            }
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        if (this.drawerShowSubscription && !this.drawerShowSubscription.closed) {
            this.drawerShowSubscription.unsubscribe();
        }
        if (this.drawerHideSubscription && !this.drawerHideSubscription.closed) {
            this.drawerHideSubscription.unsubscribe();
        }
        if (this.drawerMinimizeSubscription && !this.drawerMinimizeSubscription.closed) {
            this.drawerMinimizeSubscription.unsubscribe();
        }
        if (this.drawerExpandSubscription && !this.drawerExpandSubscription.closed) {
            this.drawerExpandSubscription.unsubscribe();
        }
    }

    private show() {
        this.active = true;
    }

    private hide() {
        this.active = false;
        this.minimized = false;
    }

    private minimize() {
        this.minimized = true;
        this.mouseOverDrawer = false;
    }

    private expand() {
        this.minimized = false;
    }

    onHideClick() {
        this.drawerService.hide(this.id);
    }

    onExpandClick() {
        this.expand();
    }

    onMinimizeClick() {
        this.minimize();
    }

    onMouseEnterDrawer($event: MouseEvent) {
        this.mouseOverDrawer = true;
    }

    onMouseLeaveDrawer($event: MouseEvent) {
        this.mouseOverDrawer = false;
    }

}
