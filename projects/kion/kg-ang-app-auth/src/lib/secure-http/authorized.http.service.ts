/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreHttpService, IAuth, DataSources } from '@kion/kg-ang-app-core';
import { AuthorizationCache, DEMATIC_DATA_SOURCE_NAME } from '../app.authorization.cache';


@Injectable()
export class AuthorizedHttpService extends CoreHttpService {
    constructor(httpClient: HttpClient, private authorizationCache: AuthorizationCache) {
        super(httpClient);
    }

    private getAuthorizationTokenName(dataSourceName: string) : string {
        let authorizationTokenName: string = DEMATIC_DATA_SOURCE_NAME;
        let dataSource = DataSources.getDatasource(dataSourceName);

        if (dataSource !== null) {
            if (dataSource.hasOwnProperty("authorizationToken")) {
                authorizationTokenName = dataSource["authorizationToken"];
            }
        }

        return authorizationTokenName;
    }

    private getAuthorization(dataSourceName: string) : IAuth {
        let authorizationTokenName = this.getAuthorizationTokenName(dataSourceName);
        let authorization: IAuth | null = this.authorizationCache.getAuthorization(authorizationTokenName);

        if (!authorization) {
            throw "Could not find an authorization token for " + authorizationTokenName;
        }

        return authorization;
    }

    private getAuthorizationHeaders(dataSourceName: string, headers: HttpHeaders | undefined): HttpHeaders {
        if (!headers) {
            headers = new HttpHeaders();
        }

        if (!headers.has('Authorization')) {
            const authorization: IAuth | null = this.authorizationCache.getDematicCloudAuthorization();

            if (!authorization) {
                throw new Error('Could not find an authorization token for ' + dataSourceName);
            }

            const authHeader = authorization.getAuthorizationHeader();

            headers = headers.set('Authorization', authHeader as string);
        }

        return headers;
    }

    /**
     * Refresh authorization if value is expired.
     * @param dataSourceName
     */
    private refreshAuthorizationIfExpired<T>(dataSourceName: string) : Promise<string | null> | null {
        let authorization = this.getAuthorization(dataSourceName);

        if (authorization.hasAuthorizationValue() && authorization.isAuthorizationValueExpired()) {
            return this.authorizationCache.refreshAuthorizationValue(this.getAuthorizationTokenName(dataSourceName));
        }

        return null;
    }

    public executeGet<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders) : Promise<T> {
        let refreshAuthorization = this.refreshAuthorizationIfExpired(dataSourceName);

        if (refreshAuthorization == null) {
            return super.executeGet<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers));
        } else {
            return new Promise<T>((resolve, reject) => {
                if (refreshAuthorization) {
                    refreshAuthorization.then((token: string) => {
                        resolve(super.executeGet<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers)));
                    })
                    .catch((err) => {
                        reject(err);
                    });
                } else {
                    resolve(super.executeGet<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers)));
                }
            });
        }
    }

    public executePost<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders, data?: any) : Promise<T> {
        let refreshAuthorization = this.refreshAuthorizationIfExpired(dataSourceName);

        if (refreshAuthorization == null) {
            return super.executePost<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers), data);
        } else {
            return new Promise<T>((resolve, reject) => {
                if (refreshAuthorization) {
                    refreshAuthorization.then((token: string) => {
                        resolve(super.executePost<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers), data));
                    })
                    .catch((err) => {
                        reject(err);
                    });
                } else {
                    resolve(super.executePost<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers), data));
                }
            });
        }
    }

    public executePut<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders, data?: any) : Promise<T> {
        let refreshAuthorization = this.refreshAuthorizationIfExpired(dataSourceName);

        if (refreshAuthorization == null) {
            return super.executePut<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers), data);
        } else {
            return new Promise<T>((resolve, reject) => {
                if (refreshAuthorization) {
                    refreshAuthorization.then((token: string) => {
                        resolve(super.executePut<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers), data));
                    })
                    .catch((err) => {
                        reject(err);
                    });
                } else {
                    resolve(super.executePut<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers), data));
                }
            });
        }
    }

    public executeDelete<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders, data?: any) : Promise<T> {
        let refreshAuthorization = this.refreshAuthorizationIfExpired(dataSourceName);

        if (refreshAuthorization == null) {
            return super.executeDelete<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers));
        } else {
            return new Promise<T>((resolve, reject) => {
                if (refreshAuthorization) {
                    refreshAuthorization.then((token: string) => {
                        resolve(super.executeDelete<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers)));
                    })
                    .catch((err) => {
                        reject(err);
                    });
                } else {
                    resolve(super.executeDelete<T>(dataSourceName, resourcePath, this.getAuthorizationHeaders(dataSourceName, headers)));
                }
            });
        }
    }
}
