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

/***** Import page modules *****/
import { AppRouterReadmeComponent } from './app.router.readme.component/app.router.readme.component';
import { AppAuthReadmeComponent } from './app.auth.readme.component/app.auth.readme.component';
import { FrameworkMainReadmeComponent } from './framework.main.component/framework.main.component';
import { AppCoreReadmeComponent } from './app.core.readme.component/app.core.readme.component';
import { UtilsModule } from '../../internal/utils/utils.module';


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

        // Routes (Keep as last module loaded)
        RoutesModule

    ],
    declarations: [
        // Page imports
        AppRouterReadmeComponent,
        AppAuthReadmeComponent,
        AppCoreReadmeComponent,
        FrameworkMainReadmeComponent
    ]
})
export class FrameworkReadmeModule {
}
