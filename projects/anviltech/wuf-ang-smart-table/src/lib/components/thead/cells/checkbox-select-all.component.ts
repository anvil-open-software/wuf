/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../services/grid';
import { DataSource } from '../../../data-source/data-source';


@Component({
    selector: '[wuf-st-checkbox-select-all]',
    template: `
        <input type="checkbox" [ngModel]="isAllSelected">
    `,
    encapsulation: ViewEncapsulation.None
})
export class CheckboxSelectAllComponent {

    @Input() grid: Grid;
    @Input() source: DataSource;
    @Input() isAllSelected: boolean;
}
