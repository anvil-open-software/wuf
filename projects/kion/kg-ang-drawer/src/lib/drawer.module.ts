/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { KgDrawerComponent } from './drawer.component';
import { KgDrawerService } from './drawer.service';


@NgModule({
    imports: [],
    declarations: [
        KgDrawerComponent
    ],
    exports: [
        KgDrawerComponent
    ]
})

export class KgDrawerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgDrawerModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgDrawerService
            ]
        };
    }
}
