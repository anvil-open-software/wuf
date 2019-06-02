import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***** 3rd Party *****/
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        TranslateModule
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
