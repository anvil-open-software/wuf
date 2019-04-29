/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */
import { MatButtonModule, MatIconModule } from '@angular/material';

/**
 * Imports
 * Import components and services used by the module here
 */
import { WufDrawerComponent } from './drawer.component';
import { WufDrawerService } from './drawer.service';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        WufDrawerComponent
    ],
    exports: [
        WufDrawerComponent
    ]
})

export class WufDrawerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufDrawerModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufDrawerService
            ]
        };
    }
}
