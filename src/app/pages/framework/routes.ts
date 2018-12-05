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
import { AppRouterReadmeComponent } from './app.router.readme.component/app.router.readme.component';
import { AppAuthReadmeComponent } from './app.auth.readme.component/app.auth.readme.component';
import { FrameworkMainReadmeComponent } from './framework.main.component/framework.main.component';
import { AppCoreReadmeComponent } from './app.core.readme.component/app.core.readme.component';

// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: 'core', component: AppCoreReadmeComponent, pathMatch: 'full'},
    {path: 'auth', component: AppAuthReadmeComponent, pathMatch: 'full'},
    {path: 'router', component: AppRouterReadmeComponent, pathMatch: 'full'},
    {path: '', component: FrameworkMainReadmeComponent, pathMatch: 'full'}
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
