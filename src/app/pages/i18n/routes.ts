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
import { I18nAngularComponent } from './i18n-angular/i18n-ang.component';
import { I18nNgxTranslateComponent } from './i18n-ngx-translate/i18n-ngx-translate.component';
import { I18nIntroComponent } from './i18n-intro/i18n-intro.component';


// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: 'i18nangular', component: I18nAngularComponent, pathMatch: 'full'},
    {path: 'i18nngxtranslate', component: I18nNgxTranslateComponent, pathMatch: 'full'},
    {path: '', component: I18nIntroComponent, pathMatch: 'full'}
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
