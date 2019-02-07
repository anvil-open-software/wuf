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
import { WufConfigurationModule, WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { MatTooltipModule } from '@angular/material';

/**
 * Imports
 * Import local components and services used by the module here
 */
import { WufViewBasicComponent } from './layouts/basic/basic.component';
import { WufViewMainComponent } from './layouts/main/main.component';
import { WufContentMainComponent } from './layout-components/content/content-main/content-main.component';
import { WufContentHeaderComponent } from './layout-components/content/content-header/content-header.component';
import { WufContentFooterComponent } from './layout-components/content/content-footer/content-footer.component';
import { WufContentFooterService } from './layout-components/content/content-footer/content-footer.service';
import { WufSidebarMainComponent } from './layout-components/sidebar/sidebar-main/sidebar-main.component';
import { WufSidebarFooterComponent } from './layout-components/sidebar/sidebar-footer/sidebar-footer.component';
import { WufSidebarService } from './layout-components/sidebar/sidebar.service';
import { WufToolbarComponent } from './layout-components/toolbar/toolbar.component';
import { WufBreadcrumbComponent } from './layout-components/breadcrumb/breadcrumb.component';
import { WufLayoutService } from './layouts/layout.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { WufViewBasicComponent } from './layouts/basic/basic.component';
export { WufViewMainComponent } from './layouts/main/main.component';
export { WufContentMainComponent } from './layout-components/content/content-main/content-main.component';
export { WufContentHeaderComponent } from './layout-components/content/content-header/content-header.component';
export { WufContentFooterComponent } from './layout-components/content/content-footer/content-footer.component';
export { WufContentFooterService } from './layout-components/content/content-footer/content-footer.service';
export { WufSidebarMainComponent } from './layout-components/sidebar/sidebar-main/sidebar-main.component';
export { WufSidebarFooterComponent } from './layout-components/sidebar/sidebar-footer/sidebar-footer.component';
export { WufSidebarService } from './layout-components/sidebar/sidebar.service';
export { WufToolbarComponent } from './layout-components/toolbar/toolbar.component';
export { WufBreadcrumbComponent, WufBreadcrumbItem } from './layout-components/breadcrumb/breadcrumb.component';
export { WufLayoutService } from './layouts/layout.service';

const components = [
    // List all components and modules used in this module
    WufViewBasicComponent,
    WufViewMainComponent,
    WufContentMainComponent,
    WufContentHeaderComponent,
    WufContentFooterComponent,
    WufToolbarComponent,
    WufBreadcrumbComponent,
    WufSidebarMainComponent,
    WufSidebarFooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatTooltipModule,
        WufConfigurationModule
    ],
    declarations: components,
    exports: components
})
export class WufLayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufLayoutModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufContentFooterService,
                WufSidebarService,
                WufConfigurationService,
                WufLayoutService
            ]
        };
    }
}
