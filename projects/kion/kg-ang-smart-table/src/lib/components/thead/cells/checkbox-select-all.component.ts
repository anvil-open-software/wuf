import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';


@Component({
    selector: '[kg-st-checkbox-select-all]',
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
