/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WufLoginService } from './login.service';


@Component({
    selector: 'wuf-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufLoginComponent implements OnInit {

    constructor(public loginService: WufLoginService) {
    }

    ngOnInit() {
    }

    onFormSubmit() {
        this.loginService.login();
    }
}
