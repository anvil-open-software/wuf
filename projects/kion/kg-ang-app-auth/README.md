# Authorization Module

This module is a generic authorization module to enable security in your application and api calls.

## Authorized Http Service

The authorized http service extends from CoreHttpService in '@kion/kg-ang-app-core' and provides the same GET/POST/PUT/DELETE functions. This service will add an Authorization header to your api call. The token is pulled from the Authorization Cache, it grabs the DEMATIC_DATA_SOURCE_NAME token which is the core token of the application.

### Usage

```typescript

export class MyClass {
    constructor(private authorizedHttpService: AuthorizedHttpService) {
    }

    public testHttp() {
        authorizedHttpService.executeGet<string>("MyDatasource", "/api/v1.0/myEntity")
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executePost<string>("MyDatasource", "/api/v1.0/myEntity", { my: "data object to post" })
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executePut<string>("MyDatasource", "/api/v1.0/myEntity/id", { my: "data object to post" })
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executeDelete<void>("MyDatasource", "/api/v1.0/myEntity/id")
            .then(() => { /* do something after delete */ });
    }
}

```

All 4 functions takes an optional headers parameter of type HttpHeaders from '@angular/common/http':

```typescript

import { HttpHeaders } from '@angular/common/http';

export class MyClass {
    constructor(private authorizedHttpService: AuthorizedHttpService) {
    }

    public testHttp() {
        authorizedHttpService.executeGet<string>("MyDatasource", "/api/v1.0/myEntity", new HttpHeaders({ "My Custom", "Headers" }))
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executePost<string>("MyDatasource", "/api/v1.0/myEntity", { my: "data object to post" }, new HttpHeaders({ "My Custom", "Headers" }))
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executePut<string>("MyDatasource", "/api/v1.0/myEntity/id", { my: "data object to post" }, new HttpHeaders({ "My Custom", "Headers" }))
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executeDelete<void>("MyDatasource", "/api/v1.0/myEntity/id", new HttpHeaders({ "My Custom", "Headers" }))
            .then(() => { /* do something after delete */ });
    }
}

```

If you want to override the authorization with a different token or scheme. You can just pass in the Authorization header manually and it will not replace it.
This will be useful if storing multiple authorizations in the cache.

```typescript

import { HttpHeaders } from '@angular/common/http';

export class MyClass {
    constructor(private authorizedHttpService: AuthorizedHttpService) {
    }

    public testHttp() {
        authorizedHttpService.executeGet<string>("MyDatasource", "/api/v1.0/myEntity", new HttpHeaders({ "Authorization", "Basic user:pass" }))
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executePost<string>("MyDatasource", "/api/v1.0/myEntity", { my: "data object to post" }, new HttpHeaders({ "Authorization", "Basic user:pass" }))
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executePut<string>("MyDatasource", "/api/v1.0/myEntity/id", { my: "data object to post" }, new HttpHeaders({ "Authorization", "Basic user:pass" }))
            .then((data: string) => { /* do something with data */ });

        authorizedHttpService.executeDelete<void>("MyDatasource", "/api/v1.0/myEntity/id", new HttpHeaders({ "Authorization", "Basic user:pass" }))
            .then(() => { /* do something after delete */ });
    }
}

```

## Authorization Cache

The authorization cache can be used to store authorizations that have been fetched.

You must set the DEMATIC_DATA_SOURCE_NAME token to the main authorization of your app. This is denoted by the IAuth you provide when boot strapping '@kion/kg-ang-app-core';

```typescript

import { MyMainAuth } from './my.main.auth';

import { AuthorizationCache, DEMATIC_DATA_SOURCE_NAME } from '@kion/kg-ang-app-auth';

@NgModule({})
export class MainModule {
    constructor(private authorizationCache: AuthorizationCache) {

        /* MyMainAuth must implement IAuth from '@kion/kg-ang-app-core'. */
        authorizationCache.addAuthorization(DEMATIC_DATA_SOURCE_NAME, new MyMainAuth());
    }
}

```

You can save new auth tokens into the cache.

```typescript

import { MySubAuth } from './my.sub.auth';

import { AuthorizationCache, DEMATIC_DATA_SOURCE_NAME } from '@kion/kg-ang-app-auth';

@NgModule({})
export class SubModule {
    constructor(private authorizationCache: AuthorizationCache) {

        /* MySubAuth must implement IAuth from '@kion/kg-ang-app-core'. */
        authorizationCache.addAuthorization("AuthForThirdPartyService", new MySubAuth());
    }
}

```

You can subsequently access any token from the cache.

```typescript

import { MySubAuth } from './my.sub.auth';

import { AuthorizationCache, DEMATIC_DATA_SOURCE_NAME } from '@kion/kg-ang-app-auth';

@NgModule({})
export class SubModule {
    constructor(private authorizationCache: AuthorizationCache) {

        /* MySubAuth must implement IAuth from '@kion/kg-ang-app-core'. */
        authorizationCache.addAuthorization("AuthForThirdPartyService", new MySubAuth());
    }

    private getData() {
        let subAuth: IAuth = authorizationCache.getAuthorization("AuthForThirdPartyService");

        /* Use subAuth and do an api call. */
    }
}

```

## OAuth

There is a built in OAuth class to handle standard OAuth authorizations. This class extends IAuth and can be loaded into the AuthorizationCache.

### Kion Cloud

There is a built in Kion cloud authority class you can use if using the Kion cloud platform. To use the Kion cloud authority, you need to just pass it the location of the login application.

```typescript

import { KionCloudAuthority, OAuth } from '@kion/kg-ang-app-auth';

let kionCloudAuth = new OAuth(new KionCloudAuthority("https://cloud-login.dematic.com/"));

```

### Custom Authority

You can create your own authority class if accessing an OAuth mechanism. Just implement IOAuthAuthority in '@kion/kg-ang-app-auth' and pass it into a new instance of the OAuth class.

```typescript

import { IOAuthAuthority } from '@kion/kg-ang-app-auth';

export class MyAuthority implements IOAuthAuthority {
    getToken(): String {
        // Returns the token for your authority.
    }

    isTokenValid(): boolean {
        // Returns if the token is valid.
    }

    getLoginUrl(): String {
        // Returns the login url to redirect the user to for login into the authority.
    }

    getLogoutUrl(): String {
        // Returns the logout url to redirect the user to for logout of the authority.
    }

    clearToken(): void {
        // Signifies that the token should be cleared from memory and any session/local storage.
    }

    getTenantIdFromToken(): String {
        // Return the tenant id from the token.
    }
    getIdFromToken(): String {
        // Return the user id from the token.
    }

    getUserNameFromToken(): String {
        // Return the user's name from the token.
    }

    getUserDisplayNameFromToken(): String {
        // Return the user's display name (Full name) from the token.
    }
}


import { OAuth } from '@kion/kg-ang-app-auth';

let myAuth = new OAuth(new MyAuthority());
applicationCache.addAuthorization("AuthName or DEMATIC_DATA_SOURCE_NAME", myAuth);

```

## Custom Authorization

You can implement your own authorization. Just implement the IAuth interface and you can use it in the authorization cache.

```typescript

import { IAuth } from '@kion/kg-ang-app-core';

export class MyAuth implements IAuth {
    getAuthorizationHeader():String {
        // Return the full authorization header including the scheme.
    }

    getAuthorizationValue():String {
        // Return the authorization value (Token, base64encoded(user:pass), etc...)
    }
    
    getTenantId(): String {
        // Returns the tenant id associated with the authorization
    }

    isValid():boolean {
        // Returns if the authrozation is still valid.        
    }

    authLocation: AUTH_LOCATION {
        // This helps the login framework decide to 
    }

    getLoginPath(): String {
        // Only needed if external authentication.
        // Returns the url of the external authentication server.
    }

    getLogoutPath(): String {
        // Only needed if external authentication.
        // Returns the url of the external authentication server.
    }

    logout(): void {
        // Implement any logic needed durring a logout.
    }

    buildUser(): IUser {
        // Return user information in the form of IUser.
    }
}

```