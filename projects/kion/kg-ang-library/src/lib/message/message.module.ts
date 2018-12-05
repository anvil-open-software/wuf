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
import { KgMessageComponent } from './message.component';
import { KgMessageService } from './message.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgMessageComponent } from './message.component';
export { KgMessageService } from './message.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // Declare components used in this module
        KgMessageComponent
    ],
    exports: [
        // Export components used in this module
        KgMessageComponent
    ]
})
export class KgMessageModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgMessageModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgMessageService
            ]
        };
    }
}
