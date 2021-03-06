/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatInputModule, MatProgressBarModule, MatTooltipModule } from '@angular/material';

import { CellModule } from '../cell/cell.module';
import { WufSmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { SharedModule } from '../../shared.module';


const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    WufSmartTableTbodyComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CellModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
        SharedModule
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
