/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MatTooltipModule } from '@angular/material';

import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { KgSmartTableComponent } from './smart-table.component';
import { KgSmartTableValidatorService } from './lib/validator.service';
import { DefaultKgSmartTableValidatorService } from './lib/default-validator.service';

export { KgSmartTableComponent } from './smart-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule,
        MatTooltipModule
    ],
    declarations: [
        KgSmartTableComponent
    ],
    exports: [
        KgSmartTableComponent
    ],
    providers: [
        {provide: KgSmartTableValidatorService, useClass: DefaultKgSmartTableValidatorService}
    ]
})
export class KgSmartTableModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgSmartTableModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
