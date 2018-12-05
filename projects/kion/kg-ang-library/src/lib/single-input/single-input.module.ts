/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Angular Imports
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

/**
 * Imports
 * Import components and services used by the module here
 */
import { KgSingleInputComponent } from './single-input.component';
import { KgUtilsModule } from '@kion/kg-ang-utils';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgSingleInputComponent } from './single-input.component';


@NgModule({
    declarations: [
        // Declare components used in this module
        KgSingleInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        KgUtilsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
    exports: [
        // Export components used in this module
        KgSingleInputComponent
    ]
})
export class KgSingleInputModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgSingleInputModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
