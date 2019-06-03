/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, OnInit } from '@angular/core';

import { WufSmartTableViewCell } from '@anviltech/wuf-ang-smart-table';


@Component({
    template: `
        <style>
            .progress {
                display: block;
                width: 100%;
                background-color: var(--wuf-color-gray-300);
                border-radius: 4px;
            }
            .progress .progress-bar {
                background-color: var(--wuf-color-primary);
                color: var(--wuf-color-white);
                font-size: 12px;
                padding: 2px;
            }
        </style>
        <div class="progress">
            <div class="progress-bar" [style.width]="progressBarWidth">
                <span>{{progressBarWidth}}</span>
            </div>
        </div>
  `,
})
export class CustomRenderForCompleteSmartTable implements WufSmartTableViewCell, OnInit {

    public progressBarWidth: string;
    @Input() value: string | number;
    @Input() rowData: any;

    constructor() {}

    ngOnInit() {
        this.progressBarWidth = this.value.toString();
    }

}
