import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***** 3rd Party *****/
import { TranslateModule } from '@ngx-translate/core';
import { CustomMaterialModule } from './material.module';


@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    declarations: [],
    exports: [
        TranslateModule,
        CustomMaterialModule
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // Add any services used by this module to the providers collection
            ]
        };
    }
}
