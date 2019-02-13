/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { WufDrawerComponent } from './drawer.component';
import { WufDrawerService } from './drawer.service';


@NgModule({
    imports: [],
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
