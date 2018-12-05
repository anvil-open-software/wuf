/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, ElementRef, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../lib/grid';


@Component({
    selector: '[kg-st-actions-title]',
    template: `
        <div class="kg-smart-title">{{ actionsColumnTitle }}</div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ActionsTitleComponent implements OnChanges {

    @Input() grid: Grid;

    actionsColumnTitle: string;

    constructor(private ref: ElementRef) {
    }

    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
