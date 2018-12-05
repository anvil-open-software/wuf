/**
 * Angular Imports
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Imports
 * Import components and services used by the module here
 */
import { KgMultiPopoverComponent } from './multi-popover.component';
import { KgMultiPopoverHoverComponent } from './multi-popover-hover.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgMultiPopoverComponent } from './multi-popover.component';
export { KgMultiPopoverHoverComponent } from './multi-popover-hover.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        // Declare components used in this module
        KgMultiPopoverComponent,
        KgMultiPopoverHoverComponent
    ],
    exports: [
        // Export components used in this module
        KgMultiPopoverComponent,
        KgMultiPopoverHoverComponent
    ]
})
export class KgMultiPopoverModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgMultiPopoverModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
