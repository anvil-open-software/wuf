/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Angular Imports
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Imports
 * Import components and services used by the module here
 */
import { WufSentenceCasePipe } from './capitalize.pipe/capitalize.pipe';

/**
 * Export
 * Export components and services used by the module here
 */
export * from './capitalize.pipe/capitalize.pipe';
// export * from './test-utils/custom-matchers/custom-matchers';
// export * from './test-utils/auto-prefixer';
// export * from './test-utils/dom-tools';
// export * from './test-utils/helpers';
// export * from './test-utils/object-extend';
// export * from './test-utils/positioning';
// export * from './test-utils/style-transforms';
// export * from './test-utils/triggers';
export * from './utils/utils';
export { WufSentenceCasePipe } from './capitalize.pipe/capitalize.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // Declare components used in this module
        WufSentenceCasePipe
    ],
    exports: [
        // Export components used in this module
        WufSentenceCasePipe
    ]
})
export class WufUtilsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufUtilsModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
