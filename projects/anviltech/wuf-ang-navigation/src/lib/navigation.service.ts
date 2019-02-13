/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define an interface for the expected nav items returned in the response
export interface NavItem {
    link: string;
    label: string;
    id?: string;
    icon?: string;
    links?: any;
    activeOptions?: any;
    // This "index signature" allows the interface to accept any additional unexpected properties without throwing an error.
    // This is necessary because the routes service may use the same data object.
    [propName: string]: any;
}

export interface NavResponseData {
    routes: NavItem[];
    data?: any;
}


@Injectable()
export class WufNavigationService {
    constructor(private http: HttpClient) {
    }

    getNavData(url: string): Observable<NavResponseData> {
        return this.http.get<NavResponseData>(url);
    }
}
