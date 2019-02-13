/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Row } from '../../../lib/data-set/row';

import { Grid } from '../../../lib/grid';


@Component({
    selector: 'wuf-st-tbody-custom',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
           class="wuf-smart-action wuf-smart-action-custom-custom"
           [innerHTML]="action.title"
           (click)="onCustom(action, $event)"></a>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TbodyCustomComponent {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() source: any;
    @Output() custom = new EventEmitter<any>();

    onCustom(action: any, event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }

}
