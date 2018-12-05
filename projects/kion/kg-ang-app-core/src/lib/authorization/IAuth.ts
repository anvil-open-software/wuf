/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { IUser } from './IUser';

export enum AUTH_LOCATION {
    EXTERNAL,
    INTERNAL
}

export interface IAuth {
    iauthImpl:Boolean;
    authLocation: AUTH_LOCATION;

    /**
     * Gets the full authorization header to use.
     */
    getAuthorizationHeader():String;

    /**
     * Gets the value of the header without the type: Bearer/Basic/etc...
     */
    getAuthorizationValue():String;

    /**
     * Returns whether the authorization is valid; has valid authorization value.
     */
    isValid():boolean;

    /**
     * Returns whether the authorization has an authorization value set.
     */
    hasAuthorizationValue():boolean;

    /**
     * Returns whether the authorization value has expired.
     */
    isAuthorizationValueExpired():boolean;

    getTenantId(): String;

    getLoginPath(): String;
    getLogoutPath(): String;

    /**
     * Returns the refresh path.
     */
    getRefreshPath(): String;

    logout(): void;
    buildUser(): IUser;
}
