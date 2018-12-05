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
import { BrandingThemesIntroComponent } from './branding-themes-intro/branding-themes-intro.component';
import { ColorsComponent } from './colors/colors.component';
import { ThemesComponent } from './themes/themes.component';
import { DarkThemeComponent } from './dark-theme/dark-theme.component';
import { ThemeCssPropertiesComponent } from './css-properties/css-properties.component';


// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: 'colors', component: ColorsComponent, pathMatch: 'full'},
    {path: 'themes', component: ThemesComponent, pathMatch: 'full'},
    {path: 'darktheme', component: DarkThemeComponent, pathMatch: 'full'},
    {path: 'cssprops', component: ThemeCssPropertiesComponent, pathMatch: 'full'},
    {path: '', component: BrandingThemesIntroComponent, pathMatch: 'full'}
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
