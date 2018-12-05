/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationCache } from '@kion/kg-ang-app-auth';
import { AUTH_LOCATION } from '@kion/kg-ang-app-core';


@Component({
    selector: 'kg-login-screen',
    templateUrl: './login.screen.component.html',
    styleUrls: ['./login.screen.component.css']
})
export class LoginScreenComponent {

    public externalAuthorization: Boolean = true;

    constructor(router: Router, private authorizationCache: AuthorizationCache) {
        const authorization = authorizationCache.getDematicCloudAuthorization();

        if (authorization) {
            // If we are valid then go to the root of the application.
            if (authorization.isValid()) {
                router.navigateByUrl('/');
            }

            // If not valid but the authorization is external, hard navigate to the login page.
            if (!authorization.isValid() && authorization.authLocation === AUTH_LOCATION.EXTERNAL) {
                window.location.href = authorization.getLoginPath().toString();
            }

            this.externalAuthorization = authorization.authLocation === AUTH_LOCATION.EXTERNAL;
        } else {
            console.error('No root authorization specified in the authorization cache.');
        }
    }

}
