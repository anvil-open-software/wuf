/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSources, DataSource } from '../datasources/app.datasources';


@Injectable()
export class CoreHttpService {
    constructor(private http: HttpClient) {
    }

    private populateDefaultHeaders(headers: HttpHeaders | undefined, hasData: boolean): HttpHeaders {
        if (!headers) {
            headers = new HttpHeaders();
        }

        if (hasData) {
            if (!headers.has('Content-Type')) {
                headers = headers.set('Content-Type', 'application/json');
            }
        }

        if (!headers.has('Accept')) {
            headers = headers.set('Accept', 'application/json');
        }

        return headers;
    }

    protected getDatasource(dataSourceName: string): DataSource {
        const dataSource: DataSource | null = DataSources.getDatasource(dataSourceName);

        if (dataSource == null) {
            throw new Error('Unable to find datasource: ' + dataSourceName);
        }

        return dataSource;
    }

    public executeGet<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders): Promise<T> {
        const dataSource: DataSource = this.getDatasource(dataSourceName);

        return new Promise((resolve, reject) => {
            this.http.get<T>(dataSource.getBaseApiUrl() + resourcePath, {
                headers: this.populateDefaultHeaders(headers, false)
            }).subscribe(
                (data: T) => {
                    resolve(data);
                },
                (error: any) => {
                    reject(error);
                });
        });
    }

    public executePost<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders, data?: any): Promise<T> {
        const dataSource: DataSource = this.getDatasource(dataSourceName);

        return new Promise((resolve, reject) => {
            this.http.post<T>(dataSource.getBaseApiUrl() + resourcePath, data, {
                headers: this.populateDefaultHeaders(headers, true)
            }).subscribe(
                (d: T) => {
                    resolve(d);
                },
                (error: any) => {
                    reject(error);
                });
        });
    }

    public executePut<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders, data?: any): Promise<T> {
        const dataSource: DataSource = this.getDatasource(dataSourceName);

        return new Promise((resolve, reject) => {
            this.http.put<T>(dataSource.getBaseApiUrl() + resourcePath, data, {
                headers: this.populateDefaultHeaders(headers, true)
            }).subscribe(
                (d: T) => {
                    resolve(d);
                },
                (error: any) => {
                    reject(error);
                });
        });
    }

    public executeDelete<T>(dataSourceName: string, resourcePath: string, headers?: HttpHeaders, data?: any): Promise<T> {
        const dataSource: DataSource = this.getDatasource(dataSourceName);

        return new Promise((resolve, reject) => {
            this.http.delete<T>(dataSource.getBaseApiUrl() + resourcePath, {
                headers: this.populateDefaultHeaders(headers, true)
            }).subscribe(
                (d: T) => {
                    resolve(d);
                },
                (error: any) => {
                    reject(error);
                });
        });
    }
}
