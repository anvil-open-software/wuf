/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NavigationService {

    constructor(private http: HttpClient) {
    }

    get(): any {
        return this.http.get<any>('/api/navigation');
    }
}
