/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/***** Angular modules *****/
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/***** Basic app components *****/
import { RoutesModule } from './routes';

/***** Import WUF *****/
import { WufToastsModule } from '@anviltech/wuf-ang-toasts';
import { WufUtilsModule } from '@anviltech/wuf-ang-utils';
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';
import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
import { WufDashboardModule } from '@anviltech/wuf-ang-dashboard';
import { WufLoginModule } from '@anviltech/wuf-ang-login-animated';
import { WufNavigationModule } from '@anviltech/wuf-ang-navigation';
import { WufGridsterModule } from '@anviltech/wuf-ang-gridster';
import { WufSmartTableModule } from '@anviltech/wuf-ang-smart-table';

/***** 3rd party imports *****/
import { NgxMdModule } from 'ngx-md';
import { CustomMaterialModule } from '../../internal/material.module';
import { UtilsModule } from '../../internal/utils/utils.module';

/***** TODO *****/
import { WufSplitPanelComponent } from './dashboard/wuf-split-panel/wuf-split-panel.component'; // TODO: move this to common-components once component is built

/***** Smart Table extras *****/
import { CustomEditorForFoodsSmartTable } from './smart-table/custom-editor.smart-table.for-foods.component';
import { CustomRenderForGradeSmartTable } from './smart-table/custom-render.smart-table.for-grade.component';
import { CustomEditorForNameValidationSmartTable } from './smart-table/custom-editor.smart-table.for-name-validation.component';
import { CustomEditorForIDValidationSmartTable } from './smart-table/custom-editor.smart-table.for-id-validation.component';

/***** Import page modules *****/
import { ComponentsIntroComponent } from './components-intro/components-intro.component';
import { SwitchComponent } from './switch/switch.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ModalComponent } from './modal/modal.component';
import { MaterialDialogExample } from './modal/modal/material.dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CodeSampleComponent } from './code-sample/code-sample.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginScreenReadmeComponent } from './login.screen.readme.component/login.screen.readme.component';
import { LogoutScreenReadmeComponent } from './logout.screen.readme.component/logout.screen.readme.component';
import { WebMessagesComponent } from './web-messages/web-messages.component';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VaadinGridComponent } from './vaadin-grid/vaadin-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FormsComponent } from './forms/forms.component';
import { FormSettingsService } from './forms/form.service';
import { GridsterComponent } from './gridster/gridster.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ToastsComponent } from './toasts/toasts.component';


@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        // Angular Imports
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        CdkTableModule,

        // WUF
        WufToastsModule,
        WufUtilsModule,
        WufLayoutModule,
        WufDrawerModule,
        WufDashboardModule,
        WufLoginModule,
        WufNavigationModule,
        WufGridsterModule,
        WufSmartTableModule,

        // Utils
        UtilsModule,

        // 3rd Party Imports
        NgxMdModule, // Markdown
        CustomMaterialModule,

        // Routes (Keep as last module loaded)
        RoutesModule
    ],
    declarations: [
        // Page imports
        SwitchComponent,
        UtilitiesComponent,
        ModalComponent,
        MaterialDialogExample,
        NavigationComponent,
        NavigationFooterComponent,
        ButtonComponent,
        CardComponent,
        ComponentsIntroComponent,
        CodeSampleComponent,
        CalendarComponent,
        LoginScreenReadmeComponent,
        LogoutScreenReadmeComponent,
        WebMessagesComponent,
        AlertComponent,
        BreadcrumbComponent,
        ToastsComponent,
        ToolbarComponent,
        VaadinGridComponent,
        DashboardComponent,
        LoginComponent,
        DrawerComponent,
        FormsComponent,
        GridsterComponent,
        SmartTableComponent,

        // Smart Table component examples
        CustomEditorForFoodsSmartTable,
        CustomRenderForGradeSmartTable,
        CustomEditorForNameValidationSmartTable,
        CustomEditorForIDValidationSmartTable,

        // TODO: move this to common-components
        WufSplitPanelComponent
    ],
    entryComponents: [
        MaterialDialogExample,

        // Smart table examples
        CustomEditorForFoodsSmartTable,
        CustomRenderForGradeSmartTable,
        CustomEditorForNameValidationSmartTable,
        CustomEditorForIDValidationSmartTable
    ],
    providers: [
        FormSettingsService
    ]
})
export class ComponentsModule {
}
