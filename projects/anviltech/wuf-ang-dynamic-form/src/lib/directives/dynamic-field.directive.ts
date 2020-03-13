import {
    ComponentFactoryResolver,
    Directive,
    Input,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GroupComponent } from '../components/inputs/group/group.component';
import { FieldConfig } from '../models/field.interface';
import { InputComponent } from '../components/inputs/input/input.component';
import { ButtonComponent } from '../components/inputs/button/button.component';
import { SelectComponent } from '../components/inputs/select/select.component';
import { DateComponent } from '../components/inputs/date/date.component';
import { RadioComponent } from '../components/inputs/radio/radio.component';
import { CheckboxComponent } from '../components/inputs/checkbox/checkbox.component';
import { TextareaComponent } from '../components/inputs/textarea/textarea.component';
import { SwitchComponent } from '../components/inputs/switch/switch.component';
import { MultiSelectComponent } from '../components/inputs/multi-select/multi-select.component';


@Directive({
    selector: '[wuf-dynamic-field]'
})
export class WufDynamicFieldDirective implements OnInit {

    @Input() field: FieldConfig;
    @Input() rootGroup: FormGroup;
    @Input() parentGroup: FormGroup;
    componentRef: any;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {
    }

    ngOnInit() {
        const componentMapper = {
            group: GroupComponent,
            input: InputComponent,
            button: ButtonComponent,
            select: SelectComponent,
            date: DateComponent,
            radio: RadioComponent,
            checkbox: CheckboxComponent,
            textarea: TextareaComponent,
            switch: SwitchComponent,
            multi: MultiSelectComponent
        };

        const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.rootGroup = this.rootGroup;
        this.componentRef.instance.parentGroup = this.parentGroup;
    }

}
