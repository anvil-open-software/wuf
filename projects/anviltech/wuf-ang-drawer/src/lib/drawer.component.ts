/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { WufDrawerService } from './drawer.service';


@Component({
    selector: 'wuf-drawer',
    templateUrl: 'drawer.component.html',
    styleUrls: ['drawer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufDrawerComponent implements OnInit {

    @Input() header: string;
    @Input() id: string;
    drawerShowSubscription: Subscription;
    drawerHideSubscription: Subscription;
    active: boolean = false;

    constructor(public drawerService: WufDrawerService) {
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
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.drawerShowSubscription.unsubscribe();
        this.drawerHideSubscription.unsubscribe();
    }

    show() {
        this.active = true;
    }

    hide() {
        this.active = false;
    }

    onHideClick() {
        this.drawerService.hide(this.id);
    }

}
