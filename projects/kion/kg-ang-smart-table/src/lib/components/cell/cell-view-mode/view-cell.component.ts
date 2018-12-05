/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { KgSmartTableCell } from '../../../lib/data-set/cell';


@Component({
    selector: 'table-cell-view-mode',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div [ngSwitch]="cell.getColumn().type">
            <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
            <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
            <div *ngSwitchDefault>{{ cell.getValue() }}</div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ViewCellComponent {

    @Input() cell: KgSmartTableCell;
}
