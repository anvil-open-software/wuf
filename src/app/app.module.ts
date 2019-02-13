/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/***** Angular modules *****/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/***** Basic app components *****/
import { AppComponent } from './app.component';
import { RoutesModule } from './app-routes';

/***** Import WUF *****/
import { WufConfigurationModule, WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { WufLayoutModule, WufLayoutService } from '@anviltech/wuf-ang-layout';
import { WufUtilsModule } from '@anviltech/wuf-ang-utils';
import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
import { WufDashboardModule } from '@anviltech/wuf-ang-dashboard';
import { WufLoginModule } from '@anviltech/wuf-ang-login-animated';
import { WufNavigationModule } from '@anviltech/wuf-ang-navigation';
import { WufGridsterModule } from '@anviltech/wuf-ang-gridster';
import { WufSmartTableModule } from '@anviltech/wuf-ang-smart-table';
import '@anviltech/wuf-web-code-sample';
import '@anviltech/wuf-web-message';

/***** 3rd party imports *****/
import { NgxMdModule } from 'ngx-md';
import { CustomMaterialModule } from './internal/material.module';
import { OrigamiModule } from '@codebakery/origami';

// Import polymer controls that will be used by Vaadin Grid
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

// Import Vaadin Grid components
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-sorter';
import '@vaadin/vaadin-grid/vaadin-grid-filter';
import '@anviltech/wuf-poly-grid-styles';

/***** fake backend *****/
// Delete this for a production app
import { fakeBackendProvider } from './internal/fake-backend/fake-backend.service';

/***** Error pages *****/
import { PageNotFoundComponent } from './other/page-not-found/page-not-found.component';
import { ForbiddenComponent } from './other/forbidden/forbidden.component';

/***** Layouts *****/
import { LayoutsModule } from './internal/layouts/layouts.module';

/***** Misc placeholder pages *****/
import { SettingsComponent } from './other/settings/settings.component';

/***** Services *****/
import { ThemeListService } from './internal/theme-list.service';
import { UserService } from './internal/services/user.service';
import { NavigationService } from './internal/services/navigation.service';
import { FooterService } from './internal/services/footer.service';

/***** Example component pages *****/
import { HomeComponent } from './pages/home/home.component';
import { I18nComponent } from './pages/i18n/i18n.component';
import { UtilsModule } from './internal/utils/utils.module';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';


@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        // Angular Imports
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserAnimationsModule,

        // Util
        UtilsModule.forRoot(),

        // Layouts Modules
        LayoutsModule.forRoot(),

        // WUF
        WufUtilsModule,
        WufConfigurationModule.forRoot(),
        WufLayoutModule.forRoot(),
        WufDrawerModule.forRoot(),
        WufDashboardModule.forRoot(),
        WufLoginModule.forRoot(),
        WufNavigationModule.forRoot(),
        WufGridsterModule.forRoot(),
        WufSmartTableModule.forRoot(),

        // 3rd Party Imports
        NgxMdModule.forRoot(), // Markdown
        CustomMaterialModule.forRoot(), // Load all Angular Material modules
        OrigamiModule,

        // Routes (Keep as last module loaded)
        RoutesModule
    ],
    declarations: [
        // App
        AppComponent,

        // Misc app pages
        PageNotFoundComponent,
        ForbiddenComponent,
        SettingsComponent,
        HomeComponent,
        GettingStartedComponent,
        I18nComponent
    ],
    providers: [
        WufConfigurationService,
        WufLayoutService,
        ThemeListService,
        UserService,
        NavigationService,
        FooterService,

        // Provider used to create fake backend.  Delete this for a production app.
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
}
