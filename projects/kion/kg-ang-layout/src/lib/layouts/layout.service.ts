/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';


@Injectable()
export class KgLayoutService {

    headerVisible: boolean = true;

    constructor() {
    }

    showHeader() {
        this.headerVisible = true;
    }

    hideHeader() {
        this.headerVisible = false;
    }

}
