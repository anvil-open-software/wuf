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

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */
import { KgConfigurationModule, KgConfigurationService } from '@kion/kg-ang-configuration';
import { MatTooltipModule } from '@angular/material';

/**
 * Imports
 * Import local components and services used by the module here
 */
import { KgViewBasicComponent } from './layouts/basic/basic.component';
import { KgViewMainComponent } from './layouts/main/main.component';
import { KgContentMainComponent } from './layout-components/content/content-main/content-main.component';
import { KgContentHeaderComponent } from './layout-components/content/content-header/content-header.component';
import { KgContentFooterComponent } from './layout-components/content/content-footer/content-footer.component';
import { KgContentFooterService } from './layout-components/content/content-footer/content-footer.service';
import { KgSidebarMainComponent } from './layout-components/sidebar/sidebar-main/sidebar-main.component';
import { KgSidebarFooterComponent } from './layout-components/sidebar/sidebar-footer/sidebar-footer.component';
import { KgSidebarService } from './layout-components/sidebar/sidebar.service';
import { KgToolbarComponent } from './layout-components/toolbar/toolbar.component';
import { KgBreadcrumbComponent } from './layout-components/breadcrumb/breadcrumb.component';
import { KgLayoutService } from './layouts/layout.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgViewBasicComponent } from './layouts/basic/basic.component';
export { KgViewMainComponent } from './layouts/main/main.component';
export { KgContentMainComponent } from './layout-components/content/content-main/content-main.component';
export { KgContentHeaderComponent } from './layout-components/content/content-header/content-header.component';
export { KgContentFooterComponent } from './layout-components/content/content-footer/content-footer.component';
export { KgContentFooterService } from './layout-components/content/content-footer/content-footer.service';
export { KgSidebarMainComponent } from './layout-components/sidebar/sidebar-main/sidebar-main.component';
export { KgSidebarFooterComponent } from './layout-components/sidebar/sidebar-footer/sidebar-footer.component';
export { KgSidebarService } from './layout-components/sidebar/sidebar.service';
export { KgToolbarComponent } from './layout-components/toolbar/toolbar.component';
export { KgBreadcrumbComponent, KgBreadcrumbItem } from './layout-components/breadcrumb/breadcrumb.component';
export { KgLayoutService } from './layouts/layout.service';

const components = [
    // List all components and modules used in this module
    KgViewBasicComponent,
    KgViewMainComponent,
    KgContentMainComponent,
    KgContentHeaderComponent,
    KgContentFooterComponent,
    KgToolbarComponent,
    KgBreadcrumbComponent,
    KgSidebarMainComponent,
    KgSidebarFooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatTooltipModule,
        KgConfigurationModule
    ],
    declarations: components,
    exports: components
})
export class KgLayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgLayoutModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgContentFooterService,
                KgSidebarService,
                KgConfigurationService,
                KgLayoutService
            ]
        };
    }
}
