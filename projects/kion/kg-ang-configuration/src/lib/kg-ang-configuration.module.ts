/**
 * Angular Imports
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Imports
 * Import components and services used by the module here
 */
import { KgConfigurationService } from './kg-ang-configuration.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgConfigurationService } from './kg-ang-configuration.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // Declare components used in this module
    ],
    exports: [
        // Export components used in this module
    ]
})
export class KgConfigurationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgConfigurationModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgConfigurationService
            ]
        };
    }
}
