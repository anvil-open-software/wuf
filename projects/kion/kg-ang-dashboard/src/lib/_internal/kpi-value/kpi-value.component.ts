/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'kpi-value',
    templateUrl: './kpi-value.component.html',
    styleUrls: ['./kpi-value.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class KpiValueComponent implements OnInit {

    @Input() value?: any;
    small: boolean = false;
    tiny: boolean = false;

    defaultHeight = 60; // height in px
    minHeight = 30; // height in px
    pxMultiplier = 4;
    maxCharacterLengthBeforeResize = 5;
    maxHeight: number = this.defaultHeight;

    constructor() {
    }

    ngOnInit() {
        if (this.value) {
            this.setMaxSize(this.value);
        }
    }

    setMaxSize(value: any) {
        // Determine max height of the SVG element based on the length of the passed value.  This determines how large the displayed value will be
        if (typeof value === 'object') {
            return;
        }

        const myValue = value.toString();

        // For every character over the length of maxCharacterLengthBeforeResize, decrease max-height of the displayed value by pxMultiplier
        if (myValue.length > this.maxCharacterLengthBeforeResize) {
            const delta = myValue.length - this.maxCharacterLengthBeforeResize;

            this.maxHeight = Math.max(this.defaultHeight - (delta * this.pxMultiplier), this.minHeight);
        }

    }

}
