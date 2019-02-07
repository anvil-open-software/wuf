/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WufContentFooterService } from './content-footer.service';


@Component({
    selector: 'wuf-content-footer',
    styleUrls: ['content-footer.component.scss'],
    templateUrl: 'content-footer.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class WufContentFooterComponent implements OnInit {

    constructor(public WufContentFooterService: WufContentFooterService) {
    }

    ngOnInit() {
    }

}
