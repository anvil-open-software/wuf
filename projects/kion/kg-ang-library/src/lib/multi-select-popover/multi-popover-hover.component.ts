import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'kg-multi-popover-hover',
    styleUrls: ['multi-popover-hover.component.scss'],
    templateUrl: 'multi-popover-hover.component.html'
})
export class KgMultiPopoverHoverComponent implements OnInit {

    myName = 'KgMultiPopoverHoverComponent';
    message = 'I am in the multiple-select hover popover component!';

    @Input() items: Array<any>;

    constructor() {
    }

    ngOnInit() {
    }
}
