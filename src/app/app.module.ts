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
import { KgConfigurationModule, KgConfigurationService } from '@kion/kg-ang-configuration';
import { KgLayoutModule, KgLayoutService } from '@kion/kg-ang-layout';
import { KgUtilsModule } from '@kion/kg-ang-utils';
import { KgDrawerModule } from '@kion/kg-ang-drawer';
import { KgDashboardModule } from '@kion/kg-ang-dashboard';
import { KgLoginModule } from '@kion/kg-ang-login-animated';
import { KgNavigationModule } from '@kion/kg-ang-navigation';
import { KgGridsterModule } from '@kion/kg-ang-gridster';
import { KgSmartTableModule } from '@kion/kg-ang-smart-table';
import '@kion/kg-web-code-sample';
import '@kion/kg-web-message';

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
import '@kion/kg-poly-grid-styles';

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
        KgUtilsModule,
        KgConfigurationModule.forRoot(),
        KgLayoutModule.forRoot(),
        KgDrawerModule.forRoot(),
        KgDashboardModule.forRoot(),
        KgLoginModule.forRoot(),
        KgNavigationModule.forRoot(),
        KgGridsterModule.forRoot(),
        KgSmartTableModule.forRoot(),

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
        KgConfigurationService,
        KgLayoutService,
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
