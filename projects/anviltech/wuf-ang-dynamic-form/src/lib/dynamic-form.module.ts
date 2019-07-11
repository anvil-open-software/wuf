import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * Imports
 * Import components and services used by the module here
 */
import {WufDynamicFormComponent} from './dynamic-form.component';
import {WufDynamicFormService} from './dynamic-form.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        WufDynamicFormComponent
    ],
    exports: [
        WufDynamicFormComponent
    ]
})

export class WufDynamicFormModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WufDynamicFormModule,
            providers: [
                // Add any services used by this module to the providers collection
                WufDynamicFormService
            ]
        };
    }
}
