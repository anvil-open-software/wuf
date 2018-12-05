/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { KgGridsterComponent } from './kg-ang-gridster.component';


@NgModule({
    imports: [
        CommonModule,
        GridsterModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ],
    declarations: [KgGridsterComponent],
    exports: [KgGridsterComponent]
})
export class KgGridsterModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgGridsterModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
