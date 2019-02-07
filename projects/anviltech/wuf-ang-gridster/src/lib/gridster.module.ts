/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { WufGridsterComponent } from './gridster.component';


@NgModule({
    imports: [
        CommonModule,
        GridsterModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ],
    declarations: [WufGridsterComponent],
    exports: [WufGridsterComponent]
})
export class WufGridsterModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufGridsterModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
