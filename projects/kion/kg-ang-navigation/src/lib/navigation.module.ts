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
import { KgConfigurationModule } from '@kion/kg-ang-configuration';
import { KgLayoutModule } from '@kion/kg-ang-layout';

/**
 * Imports
 * Import components and services used by the module here
 */
import { KgNavigationComponent } from './navigation/navigation.component';
import { KgNavigationLinkComponent } from './navigation-link/navigation-link.component';
import { KgNavigationService } from './navigation.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgNavigationComponent } from './navigation/navigation.component';
export { KgNavigationLinkComponent } from './navigation-link/navigation-link.component';
export { KgNavigationService } from './navigation.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatTooltipModule,
        MatMenuModule,
        KgConfigurationModule,
        KgLayoutModule
    ],
    declarations: [
        // Declare components used in this module
        KgNavigationComponent,
        KgNavigationLinkComponent
    ],
    exports: [
        // Export components used in this module
        KgNavigationComponent,
        KgNavigationLinkComponent
    ]
})
export class KgNavigationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgNavigationModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgNavigationService
            ]
        };
    }
}
