/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Angular imports
 * Import angular stuff here
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { WufLayoutService } from '@anviltech/wuf-ang-layout';

/**
 * Imports
 * Import local components and services used by the module here
 */
import { WufLoginComponent } from './login.component';
import { WufLoginService } from './login.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { WufLoginService } from './login.service';
export { WufLoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        // List all components and modules used in this module
        WufLoginComponent
    ],
    exports: [
        // List all components and modules to be exported here
        WufLoginComponent
    ]
})
export class WufLoginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufLoginModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufLayoutService,
                WufLoginService
            ]
        };
    }
}
