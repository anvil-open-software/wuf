/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule } from '@angular/material';

import { CellModule } from '../cell/cell.module';
import { KgSmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';


const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    KgSmartTableTbodyComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CellModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        ...TBODY_COMPONENTS
    ],
    exports: [
        ...TBODY_COMPONENTS
    ]
})
export class TBodyModule {
}
