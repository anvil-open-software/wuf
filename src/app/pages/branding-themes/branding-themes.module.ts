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
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';

/***** 3rd party imports *****/
import { NgxMdModule } from 'ngx-md';
import { CustomMaterialModule } from '../../internal/material.module';
import { UtilsModule } from '../../internal/utils/utils.module';

/***** Import page modules *****/
import { BrandingThemesIntroComponent } from './branding-themes-intro/branding-themes-intro.component';
import { ColorsComponent } from './colors/colors.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeCssPropertiesComponent } from './css-properties/css-properties.component';
import { DarkThemeComponent } from './dark-theme/dark-theme.component';


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
        WufLayoutModule,

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
        BrandingThemesIntroComponent,
        ColorsComponent,
        ThemesComponent,
        ThemeCssPropertiesComponent,
        DarkThemeComponent
    ]
})
export class BrandingThemesModule {
}
