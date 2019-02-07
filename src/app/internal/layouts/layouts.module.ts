/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/***** Import WUF *****/
import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';
import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
import { WufNavigationModule } from '@anviltech/wuf-ang-navigation';
import { WufLoginModule } from '@anviltech/wuf-ang-login-animated';

/***** 3rd Party *****/
import { MatTooltipModule } from '@angular/material';
import { CustomMaterialModule } from '../../internal/material.module';

/***** Local layout components *****/
import { LayoutMainComponent } from './main/main.component';
import { LayoutBasicComponent } from './basic/basic.component';

/***** Exports *****/
export { LayoutMainComponent } from './main/main.component';
export { LayoutBasicComponent } from './basic/basic.component';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        MatTooltipModule,

        // WUF
        WufLayoutModule,
        WufDrawerModule,
        WufNavigationModule,
        WufLoginModule
    ],
    declarations: [
        LayoutMainComponent,
        LayoutBasicComponent
    ]
})
export class LayoutsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LayoutsModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufConfigurationService
            ]
        };
    }
}
