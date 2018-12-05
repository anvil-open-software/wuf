import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'kg-multi-popover',
    styleUrls: ['multi-popover.component.scss'],
    templateUrl: 'multi-popover.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class KgMultiPopoverComponent implements OnInit {

    myName = 'KgMultiPopoverComponent';
    message = 'I am in the multiple-select popover component!';
    atLeastOneItemSelected: boolean;
    allItemsSelected: boolean;
    isListDirty: boolean;

    @Input() items: Array<any>;

    @Output() onSubmitClose = new EventEmitter<any>();

    @Output() onCancelClose = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        // When popover is opened checked whether to show the clearAll link
        for (let item of this.items) {
            if (item['checked']) {
                this.atLeastOneItemSelected = true;
            }
            if (!item['checked']) {
                this.allItemsSelected = true;
            }
        }

        this.isListDirty = true;
    }

    get selectedOptions() {
        return this.items
        .filter(item => item.checked)
        .map(item => item);
    }

    submitClose() {
        this.onSubmitClose.emit(this.selectedOptions);
    }

    cancelClose() {
        this.onCancelClose.emit();
    }

    onChangeObj($event: any) {

        //When item is changed, check whether to show clearAll link
        this.atLeastOneItemSelected = false;
        this.allItemsSelected = false;
        this.isListDirty = false;
        for (let item of this.items) {
            if (item['checked']) {
                this.atLeastOneItemSelected = true;
            }
            if (!item['checked']) {
                this.allItemsSelected = true;
            }
        }
    }

    clearAll() {
        for (let item of this.items) {
            item['checked'] = false;
        }
        this.atLeastOneItemSelected = false;
        this.allItemsSelected = true;
        this.isListDirty = false;
    }

    selectAll() {
        for (let item of this.items) {
            item['checked'] = true;
        }
        this.allItemsSelected = false;
        this.atLeastOneItemSelected = true;
        this.isListDirty = false;
    }

}
