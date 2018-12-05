import { NgModule, ModuleWithProviders } from '@angular/core';

/***** testing (delete these) *****/

/**
 * Imports
 * Step 1: Import all of the _modules_ here
 */
// WUF Dependencies
import { KgConfigurationModule, KgConfigurationService } from '@kion/kg-ang-configuration';
import { KgLayoutModule, KgLayoutService } from '@kion/kg-ang-layout';

// 3rd Party Dependencies
import { CustomMaterialModule } from './helpers/material.module';

// Modules
import { KgMessageModule } from './message/message.module';
import { KgMultiPopoverModule } from './multi-select-popover/multi-popover.module';
import { KgSingleInputModule } from './single-input/single-input.module';


/**
 * Modules
 * Step 2: Add every _module_ to this list
 */
export const KG_MODULES: any = [
    KgMessageModule,
    KgMultiPopoverModule,
    KgSingleInputModule
];

/**
 * Apply modules with .forRoot()
 * Step 3: Add every _module_ to the imports collection
 */
@NgModule({
    imports: [
        // Add modules here
        CustomMaterialModule,
        KgConfigurationModule.forRoot(),
        KgLayoutModule.forRoot(),
        KgMessageModule.forRoot(),
        KgMultiPopoverModule.forRoot(),
        KgSingleInputModule.forRoot()
    ],
    exports: KG_MODULES,
    providers: [
        KgConfigurationService,
        KgLayoutService
    ]
})
export class KgRootModule {
}

@NgModule({
    imports: KG_MODULES,
    exports: KG_MODULES
})
export class KgModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgRootModule
        };
    }
}

/**
 * Add exports to index.ts
 * Step 4: Export all Modules, Services, Directives, and Components from every module inside ../public_api.ts
 */
