/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KgContentFooterService } from './content-footer.service';


@Component({
    selector: 'kg-content-footer',
    styleUrls: ['content-footer.component.scss'],
    templateUrl: 'content-footer.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class KgContentFooterComponent implements OnInit {

    constructor(public KgContentFooterService: KgContentFooterService) {
    }

    ngOnInit() {
    }

}
