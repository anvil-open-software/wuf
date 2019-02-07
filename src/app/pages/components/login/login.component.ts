/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WufLoginService } from '@anviltech/wuf-ang-login-animated';


@Component({
    selector: 'app-dashboard',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

    loginSubscription: any;
    loginData: string;

    constructor(private loginService: WufLoginService) {
    }

    ngOnInit() {
        this.loginSubscription = this.loginService.onLogin().subscribe(
            loginData => {
                // We have collected username/password information from the form in the <wuf-login> component.  Now we need to do something with it, like send it to the server for authentication.
                this.loginData = JSON.stringify(loginData);
            },
            err => {
                console.warn('error on login form:', err);
            }
        );
    }

    onLogoutClick() {
        this.loginService.logout();
    }

}
