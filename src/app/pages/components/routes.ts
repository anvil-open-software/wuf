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
import { ComponentsIntroComponent } from './components-intro/components-intro.component';
import { CodeSampleComponent } from './code-sample/code-sample.component';
import { SwitchComponent } from './switch/switch.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WebMessagesComponent } from './web-messages/web-messages.component';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FormsComponent } from './forms/forms.component';
import { GridsterComponent } from './gridster/gridster.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { DynamicFormTestComponent } from "./dynamic-form/dynamic-form-test.component";


// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
    {path: 'alerts', component: AlertComponent, pathMatch: 'full'},
    {path: 'breadcrumb', component: BreadcrumbComponent, pathMatch: 'full'},
    {path: 'buttons', component: ButtonComponent, pathMatch: 'full'},
    {path: 'calendar', component: CalendarComponent, pathMatch: 'full'},
    {path: 'cards', component: CardComponent, pathMatch: 'full'},
    {path: 'codesample', component: CodeSampleComponent, pathMatch: 'full'},
    {path: 'kgWebMessages', component: WebMessagesComponent, pathMatch: 'full'},
    {path: 'modals', component: ModalComponent, pathMatch: 'full'},
    {path: 'navigation', component: NavigationComponent, pathMatch: 'full'},
    {path: 'navigationfooter', component: NavigationFooterComponent, pathMatch: 'full'},
    {path: 'switches', component: SwitchComponent, pathMatch: 'full'},
    {path: 'toolbars', component: ToolbarComponent, pathMatch: 'full'},
    {path: 'utilities', component: UtilitiesComponent, pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'drawer', component: DrawerComponent, pathMatch: 'full'},
    {path: 'forms', component: FormsComponent, pathMatch: 'full'},
    {path: 'gridster', component: GridsterComponent, pathMatch: 'full'},
    {path: 'smarttable', component: SmartTableComponent, pathMatch: 'full'},
    {path: 'dynamicform', component: DynamicFormTestComponent, pathMatch: 'full'},

    {path: '', component: ComponentsIntroComponent, pathMatch: 'full'}
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
