/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, ElementRef, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../services/grid';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: '[wuf-st-actions-title]',
    template: `
        <div class="wuf-smart-title" translate>{{ actionsColumnTitle }}</div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ActionsTitleComponent implements OnChanges {

    @Input() grid: Grid;

    actionsColumnTitle: string;

    constructor(private ref: ElementRef, public translate: TranslateService) {
    }

    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.title');
    }
}
