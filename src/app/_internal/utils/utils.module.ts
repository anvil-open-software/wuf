/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../material.module';
import { ComponentTabsComponent } from './component-tabs/component-tabs.component';


@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,

        // 3rd Party Imports
        CustomMaterialModule
    ],
    exports: [
        ComponentTabsComponent
    ],
    declarations: [
        ComponentTabsComponent
    ]
})
export class UtilsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilsModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
