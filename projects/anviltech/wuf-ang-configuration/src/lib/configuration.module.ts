/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Angular Imports
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Imports
 * Import components and services used by the module here
 */
import { WufConfigurationService } from './configuration.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { WufConfigurationService } from './configuration.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // Declare components used in this module
    ],
    exports: [
        // Export components used in this module
    ]
})
export class WufConfigurationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufConfigurationModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufConfigurationService
            ]
        };
    }
}
