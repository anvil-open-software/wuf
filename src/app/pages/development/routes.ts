/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/***** Import page layouts *****/
import { LayoutBasicComponent, LayoutMainComponent, LayoutsModule } from '../../_internal/layouts/layouts.module';


/***** Import page modules *****/
import { DevelopmentComponent } from './development/development.component';
import { DevAngularAngularComponentsIntroComponent } from './dev-angular-components/dev-angular-components.component';
import { DevWebAngularComponentsIntroComponent } from './dev-web-components/dev-web-components.component';


// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: 'angularcomponents', component: DevAngularAngularComponentsIntroComponent, pathMatch: 'full'},
    {path: 'webcomponents', component: DevWebAngularComponentsIntroComponent, pathMatch: 'full'},
    {path: '', component: DevelopmentComponent, pathMatch: 'full'}
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
