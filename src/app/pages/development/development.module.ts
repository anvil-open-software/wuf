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
import { DevAngularAngularComponentsIntroComponent } from './dev-angular-components/dev-angular-components.component';
import { DevWebAngularComponentsIntroComponent } from './dev-web-components/dev-web-components.component';
import { DevelopmentComponent } from './development/development.component';


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

        // 3rd Party Imports
        NgxMdModule, // Markdown

        // Routes (Keep as last module loaded)
        RoutesModule

    ],
    declarations: [
        // Page imports
        DevAngularAngularComponentsIntroComponent,
        DevWebAngularComponentsIntroComponent,
        DevelopmentComponent
    ]
})
export class DevelopmentModule {
}
