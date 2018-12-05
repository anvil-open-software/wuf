/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { EditCellDefault } from './edit-cell-default';


@Component({
    selector: 'table-cell-default-editor',
    templateUrl: './default-edit.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DefaultEditComponent extends EditCellDefault {

    constructor() {
        super();
    }

    getEditorType(): string {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
