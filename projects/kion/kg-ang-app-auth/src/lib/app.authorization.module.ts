/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';

import { AuthorizedHttpService } from './secure-http/authorized.http.service';
import { AuthorizationCache } from './app.authorization.cache';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [HttpClientModule],
    exports: [],
    providers: [AuthorizedHttpService, AuthorizationCache]
})
export class AuthorizationModule {
}
