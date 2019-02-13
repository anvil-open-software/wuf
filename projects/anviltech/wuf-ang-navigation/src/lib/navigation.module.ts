/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Angular Imports
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */
import { MatMenuModule, MatTooltipModule } from '@angular/material';
import { WufConfigurationModule } from '@anviltech/wuf-ang-configuration';
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';

/**
 * Imports
 * Import components and services used by the module here
 */
import { WufNavigationComponent } from './navigation/navigation.component';
import { WufNavigationLinkComponent } from './navigation-link/navigation-link.component';
import { WufNavigationService } from './navigation.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatTooltipModule,
        MatMenuModule,
        WufConfigurationModule,
        WufLayoutModule
    ],
    declarations: [
        // Declare components used in this module
        WufNavigationComponent,
        WufNavigationLinkComponent
    ],
    exports: [
        // Export components used in this module
        WufNavigationComponent,
        WufNavigationLinkComponent
    ]
})
export class WufNavigationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufNavigationModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufNavigationService
            ]
        };
    }
}
