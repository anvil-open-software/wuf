/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/***** Import page layouts *****/
import { LayoutsModule, LayoutBasicComponent, LayoutMainComponent } from './_internal/layouts/layouts.module';

/***** Import page modules *****/
// Error pages
import { PageNotFoundComponent } from './other/page-not-found/page-not-found.component';
import { ForbiddenComponent } from './other/forbidden/forbidden.component';

// Other placeholder pages
import { SettingsComponent } from './other/settings/settings.component';

// Component pages
import { HomeComponent } from './pages/home/home.component';
import { I18nAngularComponent } from './pages/i18n/i18n-angular/i18n-ang.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';


// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'gettingstarted', component: GettingStartedComponent, pathMatch: 'full'},
    {path: 'settings', component: SettingsComponent, pathMatch: 'full'}
];

// Pages with basic layout (no header, footer, or nav)
const routes_layout_basic = [
    /* Error routes */
    {path: 'forbidden', component: ForbiddenComponent, pathMatch: 'full'}
];

const routes = [
    // Eager-load components based on their respective layouts, identified above
    {path: '', component: LayoutMainComponent, children: routes_layout_main},
    {path: '', component: LayoutBasicComponent, children: routes_layout_basic},

    // Lazy load feature modules
    {path: 'components', loadChildren: './pages/components/components.module#ComponentsModule'},
    {path: 'development', loadChildren: './pages/development/development.module#DevelopmentModule'},
    {path: 'i18n', loadChildren: './pages/i18n/i18n.module#I18nModule'},
    {path: 'setup', loadChildren: './pages/app-setup/setup.module#SetupModule'},
    {path: 'themes', loadChildren: './pages/branding-themes/branding-themes.module#BrandingThemesModule'},

    // 404.  If all else fails, go here.  (Keep this as last route)
    {
        path: '', component: LayoutBasicComponent, children: [
            {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        LayoutsModule,
        RouterModule.forRoot(routes)
    ]
})
export class RoutesModule {
}
