/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/***** Import page layouts *****/
import { LayoutBasicComponent, LayoutMainComponent, LayoutsModule } from '../../internal/layouts/layouts.module';


/***** Import page modules *****/
import { SetupIntroComponent } from './setup-intro/setup-intro.component';
import { SetupBaseStylesComponent } from './base-styles/base-styles.component';
import { LayoutComponentsComponent } from './layout-components/layout-components.component';
import { LayoutMainBasicComponent } from './main-basic/main-basic.component';
import { SetupCssPropertiesComponent } from './css-properties/css-properties.component';
import { SetupConfigurationComponent } from './configuration/configuration.component';

// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: 'basestyles', component: SetupBaseStylesComponent, pathMatch: 'full'},
    {path: 'layoutcomponents', component: LayoutComponentsComponent, pathMatch: 'full'},
    {path: 'mainbasic', component: LayoutMainBasicComponent, pathMatch: 'full'},
    {path: 'cssprops', component: SetupCssPropertiesComponent, pathMatch: 'full'},
    {path: 'configuration', component: SetupConfigurationComponent, pathMatch: 'full'},
    {path: '', component: SetupIntroComponent, pathMatch: 'full'}
];

// Pages with basic layout (no header, footer, or nav)
const routes_layout_basic = [];

const routes = [
    {
        path: '',
        // canActivateChild: [AuthGuard], // Ensures user is authenticated before allowing access to any child route
        children: [
            {
                path: '', // This is a component-less route, which makes it easier to guard child routes,
                // canActivateChild: [AuthGuard], // Ensures user is authenticated before allowing access to any child route
                component: LayoutMainComponent,
                children: routes_layout_main
            },
            {
                path: '', // This is a component-less route, which makes it easier to guard child routes,
                // canActivateChild: [AuthGuard], // Ensures user is authenticated before allowing access to any child route
                component: LayoutBasicComponent,
                children: routes_layout_basic
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        LayoutsModule,
        RouterModule.forChild(routes)
    ]
})
export class RoutesModule {
}
