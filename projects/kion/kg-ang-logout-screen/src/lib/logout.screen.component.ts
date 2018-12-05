/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationCache } from '@kion/kg-ang-app-auth';
import { AUTH_LOCATION } from '@kion/kg-ang-app-core';

@Component({
    selector: 'kg-logout-screen',
    templateUrl: './logout.screen.component.html',
    styleUrls: ['./logout.screen.component.css']
})
export class LogoutScreenComponent {
    public loggedOut: Boolean = false;

    constructor(router: Router, private authorizationCache: AuthorizationCache) {
        const authorization = authorizationCache.getDematicCloudAuthorization();

        if (authorization) {
            if (window.location.search.indexOf('clear_cache=true') > -1) {
                authorizationCache.logout();
                this.loggedOut = true;
            }

            // If not valid but the authorization is external, hard navigate to the Logout page.
            if (authorization.isValid() && authorization.authLocation === AUTH_LOCATION.EXTERNAL) {
                window.location.href = authorization.getLogoutPath().toString() + '?clear_cache=true';
            }
        } else {
            console.error('Could not find root authorization.');
        }
    }

}
