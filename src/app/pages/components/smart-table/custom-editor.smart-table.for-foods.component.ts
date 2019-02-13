/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { WufSmartTableCell, WufSmartTableDefaultEditor, WufSmartTableEditor } from '@anviltech/wuf-ang-smart-table';

// import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

//import { OrganizationService} from './organization.service';

@Component({
    template: `
        <!--<div class="input-group">-->

            <!--<ng-template #popContent1>-->
                <!--<wuf-multi-popover [items]="multipleItems"-->
                                  <!--(onSubmitClose)="submitPopover($event)"-->
                                  <!--(onCancelClose)="cancelPopover($event)">-->
                <!--</wuf-multi-popover>-->
            <!--</ng-template>-->

            <!--<ng-template #popHoverContent1>-->
                <!--<wuf-multi-popover-hover [items]="multipleItemsForPopover">-->
                <!--</wuf-multi-popover-hover>-->
            <!--</ng-template>-->

            <!--<div class="multiple-popover-wrap-div"-->
                 <!--triggers="manual"-->
                 <!--container="body"-->
                 <!--placement="right"-->
                 <!--#hoverP="ngbPopover"-->
                 <!--[ngbPopover]="popHoverContent1"-->
                 <!--popoverTitle="{{multipleItemsTitle}}"-->
                 <!--(mouseover)="mouseOverMultiPopover()"-->
                 <!--(mouseleave)="mouseLeaveMultiPopover()"-->
                 <!--style="width: 100%">-->
                <!--<button mat-raised-button-->
                        <!--class="granted-roles-input"-->
                        <!--name="grantedRoles"-->
                        <!--placeholder="Granted Roles"-->
                        <!--triggers="manual"-->
                        <!--popoverTitle="{{multipleItemsTitle}}"-->
                        <!--container="body"-->
                        <!--placement="right"-->
                        <!--id="businessRolesPopover"-->
                        <!--style="width: 100%"-->
                        <!--#clickP="ngbPopover"-->
                        <!--[ngbPopover]="popContent1"-->
                        <!--(click)="openMultiPopover()">-->
	                <!--<span>-->
		            	<!--<i class="fa fa-user-plus" aria-hidden="true"></i>-->
		            <!--</span>-->
                    <!--{{multipleItemsForInput}}-->
                <!--</button>-->
            <!--</div>-->
        <!--</div>-->
    `
})
export class CustomEditorForFoodsSmartTable extends WufSmartTableDefaultEditor implements AfterViewInit {

    // @ViewChild('clickP') public clickPopover: NgbPopover;
    // @ViewChild('hoverP') public hoverPopover: NgbPopover;
    //
    // public multipleItems = [];
    // public multipleItemsForPopover = [];
    // public multipleItemsForInput = 'Favorite Foods (0)';
    // public multipleItemsTitle = 'Favorite Foods';
    // public popoverItemsOrigin = [];
    //
    // constructor() {
    //     super();
    // }
    //
    ngAfterViewInit() {
        // this.multipleItems = [
        //     {name: 'pizza', id: '1'},
        //     {name: 'dumplings', id: '2'},
        //     {name: 'hamburger', id: '3'},
        //     {name: 'steak', id: '4'},
        //     {name: 'lobster', id: '5'}];
    }
    //
    // submitPopover(items: any) {
    //     console.log(items, 'items in submitPopover');
    //     this.multipleItemsForPopover = items;
    //     this.multipleItemsForInput = 'Favorite Foods (' + items.length + ')';
    //
    //     let valueString = '';
    //     for (let item of this.multipleItemsForPopover) {
    //         valueString = valueString + item['name'] + ', ';
    //     }
    //     this.cell.newValue = valueString.slice(0, -2);
    //
    //     this.clickPopover.close();
    // }
    //
    // cancelPopover() {
    //     this.clickPopover.close();
    // }
    //
    // openMultiPopover() {
    //     // Every time when the popover open, remember the assigned values and map to the checkboxes of the selected value
    //     for (let item of this.multipleItems) {
    //         // First make every checkbox checked value to false
    //         item['checked'] = false;
    //
    //         for (let role of this.popoverItemsOrigin) {
    //             if (item['name'] === role['name']) {
    //                 // Check the selected value checkboxes
    //                 item['checked'] = true;
    //             }
    //         }
    //     }
    //
    //     this.clickPopover.open();
    //     // If the multiple select popover opens then the hover popover should be closed
    //     this.hoverPopover.close();
    // }
    //
    // mouseOverMultiPopover() {
    //     //The hover popover only be triggered when the clickPopover is closed
    //     // and the selected items number is larger than 1
    //     if (!this.clickPopover.isOpen() && this.multipleItemsForPopover.length > 0) {
    //         this.hoverPopover.open();
    //     }
    // }
    //
    // mouseLeaveMultiPopover() {
    //     this.hoverPopover.close();
    // }

}
