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
import { UtilsModule } from '../../_internal/utils/utils.module';

/***** Import WUF *****/
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';

/***** 3rd party imports *****/
import { NgxMdModule } from 'ngx-md';

/***** Import page modules *****/
import { I18nIntroComponent } from './i18n-intro/i18n-intro.component';
import { I18nAngularComponent } from './i18n-angular/i18n-ang.component';
import { I18nNgxTranslateComponent } from './i18n-ngx-translate/i18n-ngx-translate.component';


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

        // WUF
        WufLayoutModule,

        // Utils
        UtilsModule,

        // 3rd Party Imports
        NgxMdModule, // Markdown

        // Routes (Keep as last module loaded)
        RoutesModule

    ],
    declarations: [
        // Page imports
        I18nIntroComponent,
        I18nAngularComponent,
        I18nNgxTranslateComponent
    ]
})
export class I18nModule {
}
