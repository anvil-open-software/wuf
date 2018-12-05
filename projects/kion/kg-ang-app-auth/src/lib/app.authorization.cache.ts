/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { IAuth, IUser } from '@kion/kg-ang-app-core';
import { HttpHeaders, HttpClient } from "@angular/common/http";


export const DEMATIC_DATA_SOURCE_NAME = 'dematic-cloud';

@Injectable()
export class AuthorizationCache {
    private authorizationCache: Map<String, IAuth> = new Map<String, IAuth>();

    public currentUser: IUser;

    constructor(private http: HttpClient) {
    }

    public addAuthorization(dataSource: String, authorzation: IAuth) {
        this.authorizationCache.set(dataSource, authorzation);

        if (dataSource === DEMATIC_DATA_SOURCE_NAME) {
            this.currentUser = authorzation.buildUser();
        }
    }

    public getDematicCloudAuthorization(): IAuth | null {
        return this.getAuthorization(DEMATIC_DATA_SOURCE_NAME);
    }

    public getAuthorization(dataSource: String): IAuth | null {
        return this.authorizationCache.get(dataSource) || null;
    }

    private populateDefaultHeaders(headers: HttpHeaders | undefined, hasData: boolean) : HttpHeaders {
        if (!headers) {
            headers = new HttpHeaders();
        }

        if (hasData) {
            if (!headers.has("Content-Type")) {
                headers = headers.set("Content-Type", "application/json");
            }
        }

        if (!headers.has("Accept")) {
            headers = headers.set("Accept", "application/json");
        }

        return headers;
    }

    public refreshDematicCloudAuthorizationValue(): Promise<string | null> {
        return this.refreshAuthorizationValue(DEMATIC_DATA_SOURCE_NAME);
    }

    public refreshAuthorizationValue(auth: String): Promise<string | null> {
        let authorization: IAuth | null = this.getAuthorization(auth);
        if (!authorization || !authorization.hasAuthorizationValue()) {
            throw "Could not find an authorization token for " + auth;
        }
        let refreshPath: string = authorization.getRefreshPath().toString();
        if (!refreshPath) {
            throw "Could not find a refresh path for " + auth;
        }

        let authHeader = authorization.getAuthorizationHeader();
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set("Authorization", authHeader as string);

        return new Promise((resolve, reject) => {
            this.http.post(refreshPath, undefined, {
                headers: this.populateDefaultHeaders(headers, true)
            }).subscribe(
                (data: any) => {
                    var token = data.token;

                    if (authorization) {
                        //Clear current authorization value.
                        authorization.logout();
                        //Set new token in storage.
                        sessionStorage.setItem("cloud-token", token);
                        //Retrieve new authorization value.
                        authorization.getAuthorizationValue();
                    }

                    resolve(token);
                },
                (error: any) => {
                    reject(error);
                });
        });
    }

    public logout() {
        this.authorizationCache.forEach(authorization => {
            authorization.logout();
        }, this);
    }
}
