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
    {path: 'components', loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule)},
    {path: 'development', loadChildren: () => import('./pages/development/development.module').then(m => m.DevelopmentModule)},
    {path: 'i18n', loadChildren: () => import('./pages/i18n/i18n.module').then(m => m.I18nModule)},
    {path: 'setup', loadChildren: () => import('./pages/app-setup/setup.module').then(m => m.SetupModule)},
    {path: 'themes', loadChildren: () => import('./pages/branding-themes/branding-themes.module').then(m => m.BrandingThemesModule)},

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
