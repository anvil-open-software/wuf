/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';

import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';

import { SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
import { TheadHeaderRowComponent } from './rows/thead-header-row.component';
import { SharedModule } from '../../shared.module';



const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    SmartTableTheadComponent,
    TheadHeaderRowComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FilterModule,
        CellModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        SharedModule
    ],
    declarations: [
        ...THEAD_COMPONENTS
    ],
    exports: [
        ...THEAD_COMPONENTS
    ]
})
export class THeadModule {
}
