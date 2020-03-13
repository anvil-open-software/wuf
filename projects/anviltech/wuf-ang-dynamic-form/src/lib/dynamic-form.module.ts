/**
 * Angular Imports
 */
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import '@anviltech/wuf-web-message';

/**
 * Imports
 * Import components and services used by the module here
 */
import { WufDynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { WufDynamicFieldDirective } from './directives/dynamic-field.directive';
import { WufDynamicFormService } from './services/dynamic-form.service.service';
import { GroupComponent } from './components/inputs/group/group.component';
import { InputComponent } from './components/inputs/input/input.component';
import { ButtonComponent } from './components/inputs/button/button.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { DateComponent } from './components/inputs/date/date.component';
import { RadioComponent } from './components/inputs/radio/radio.component';
import { CheckboxComponent } from './components/inputs/checkbox/checkbox.component';
import { TextareaComponent } from './components/inputs/textarea/textarea.component';
import { SwitchComponent } from './components/inputs/switch/switch.component';
import { MultiSelectComponent } from './components/inputs/multi-select/multi-select.component';

const controls = [
    GroupComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    TextareaComponent,
    SwitchComponent,
    MultiSelectComponent
];

const components = [
    WufDynamicFormComponent,
    WufDynamicFieldDirective,
    ...controls
];

@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,

        // Angular Material
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatTooltipModule
    ],
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    entryComponents: [
        ...controls
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
