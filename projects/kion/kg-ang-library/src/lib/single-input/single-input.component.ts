import {
    Component,
    Input,
    Output,
    ViewChild,
    ElementRef,
    AfterViewInit,
    EventEmitter,
    ViewEncapsulation
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'kg-single-input',
    styleUrls: ['single-input.component.scss'],
    templateUrl: 'single-input.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class KgSingleInputComponent implements AfterViewInit {

    myName = 'KgSingleInputComponent';
    message = 'I am in the single-input component!';

    @Input() name: any;
    @Input() type: any;
    @Input() model: any;
    @Input() form: FormGroup;
    @Input() control: FormControl;
    @Input() validation: Array<any>;
    @ViewChild('input') inputRef: ElementRef;

    public NumOfMinLength: any;
    public NumOfMaxLength: any;
    private result: any = {};

    @Output() modelChange = new EventEmitter();

    constructor() {
    }

    change(newValue: any) {
        this.model = newValue;
        this.result['model'] = this.model;
        this.result['name'] = this.name;
        // Need to return the name and the new ng-model value of this input
        this.modelChange.emit(this.result);
    }

    ngAfterViewInit() {
        // You should see the actual form control properties being passed in

        for (const validator of this.validation) {
            if (validator.includes('minlength')) {
                this.NumOfMinLength = validator.split(':')[1];
            }
            if (validator.includes('maxlength')) {
                this.NumOfMaxLength = validator.split(':')[1];
            }
        }

    }

}
