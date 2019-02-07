/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/***** Angular modules *****/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/***** Basic app components *****/
import { RoutesModule } from './routes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/***** Import WUF *****/
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';

/***** 3rd party imports *****/
import { NgxMdModule } from 'ngx-md';
import { UtilsModule } from '../../internal/utils/utils.module';
import { CustomMaterialModule } from '../../internal/material.module';

/***** Import page modules *****/
import { SetupIntroComponent } from './setup-intro/setup-intro.component';
import { SetupBaseStylesComponent } from './base-styles/base-styles.component';
import { LayoutComponentsComponent } from './layout-components/layout-components.component';
import { LayoutMainBasicComponent } from './main-basic/main-basic.component';
import { SetupCssPropertiesComponent } from './css-properties/css-properties.component';
import { SetupConfigurationComponent } from './configuration/configuration.component';


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

        // Util Module
        UtilsModule,

        // WUF
        WufLayoutModule,

        // 3rd Party Imports
        NgxMdModule, // Markdown
        CustomMaterialModule,

        // Routes (Keep as last module loaded)
        RoutesModule

    ],
    declarations: [
        // Page imports
        SetupIntroComponent,
        SetupBaseStylesComponent,
        LayoutComponentsComponent,
        LayoutMainBasicComponent,
        SetupCssPropertiesComponent,
        SetupConfigurationComponent
    ]
})
export class SetupModule {
}
