/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { WufLayoutService } from '@anviltech/wuf-ang-layout';


@Injectable()
export class WufLoginService {

    showOverlay: boolean = false;
    showPanel: boolean = false;

    username: any;
    password: any;

    private loginSubject = new Subject<any>();
    private logoutSubject = new Subject<any>();

    constructor(private layoutService: WufLayoutService) {
    }

    // Allow other components to receive notifications of login events
    onLogin(): Observable<any> {
        // Allow other components to subscribe to the toggle event
        return this.loginSubject.asObservable();
    }

    onLogout(): Observable<any> {
        // Allow other components to subscribe to the toggle event
        return this.logoutSubject.asObservable();
    }

    login() {
        this.hideLogin();
        this.loginSubject.next({
            username: this.username,
            password: this.password
        });
    }

    logout() {
        this.showLogin();
        this.clearData();
        this.logoutSubject.next({});
    }

    showLogin() {
        // slide the login overlay across screen immediately
        this.showOverlay = true;

        // insert delay before moving the header and login form off screen
        setTimeout(() => {
            this.layoutService.hideHeader();
            this.showPanel = true;
        }, 500);

    }

    hideLogin() {
        // hide login form and header immediately
        this.showPanel = false;
        this.layoutService.showHeader();

        // insert delay before moving the overlay off screen
        setTimeout(() => {
            this.showOverlay = false;
        }, 250);
    }

    clearData() {
        this.username = undefined;
        this.password = undefined;
    }

}
