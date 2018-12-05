/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';


@Injectable()
export class KgContentFooterService {

    public isVisible = false;

    constructor() {
    }

    toggleFooter() {
        this.isVisible = !this.isVisible;
    }

    showFooter() {
        this.isVisible = true;
    }

    hideFooter() {
        this.isVisible = false;
    }
}
