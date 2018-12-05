/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser, element, by } from 'protractor';


export class MultiplePopoverComponentView {
    multiPopoverComponentTitleEl = element(by.id('ui-packages-trainer-app-multi-popover'));
    multiPopoverComponentMultiBtn = element(by.id('buttonTriggerPopover1'));
    multiPopoverComponentSingleBtn = element(by.id('buttonTriggerPopover2'));
    multiPopoverComponentEmptyBtn = element(by.id('buttonTriggerPopover3'));
    multiPopoverComponentMultiPopover = element(by.id('ngb-popover-1'));
    multiPopoverComponentSinglePopover = element(by.id('ngb-popover-2'));
    multiPopoverComponentEmptyPopover = element(by.id('ngb-popover-3'));
    multiPopoverComponentSubmitBtn = element(by.name('submitButton'));
    multiPopoverComponentCancelBtn = element(by.name('cancelButton'));
    multiPopoverComponentEmptyInfo = element(by.className('multi-popover-container'));

    popoverTitle = element(by.className('popover-header'));

    // Multiple Item popover
    multiPopoverItem1 = element.all(by.css('#ngb-popover-1 kg-multi-popover .multi-popover-container .multi-popover-item')).get(0);
    multiPopoverItem2 = element.all(by.css('#ngb-popover-1 kg-multi-popover .multi-popover-container .multi-popover-item')).get(1);
    multiPopoverItem3 = element.all(by.css('#ngb-popover-1 kg-multi-popover .multi-popover-container .multi-popover-item')).get(2);
    multiPopoverItem4 = element.all(by.css('#ngb-popover-1 kg-multi-popover .multi-popover-container .multi-popover-item')).get(3);

    // Single Item popover
    singlePopoverItem1 = element(by.css('#ngb-popover-2 kg-multi-popover .multi-popover-container .multi-popover-item'));

    // Empty Item popover
    emptyPopoverItem1 = element(by.css('#ngb-popover-3 kg-multi-popover .multi-popover-container .multi-popover-item'));


    clearAll = element.all(by.className('multi-popover-clear-all')).get(1);
    selectAll = element.all(by.className('multi-popover-clear-all')).get(0);

    get_viewTitle() {
        return element(by.css('app-root h1')).getText();
    }

    get_multiPopoverComponentTitle() {
        return this.multiPopoverComponentTitleEl;
    }

    get_multiPopoverMultiBtn() {
        return this.multiPopoverComponentMultiBtn;
    }

    get_multiPopoverSingleBtn() {
        return this.multiPopoverComponentSingleBtn;
    }

    get_multiPopoverEmptyBtn() {
        return this.multiPopoverComponentEmptyBtn;
    }

    get_multiPopoverMultiPopover() {
        return this.multiPopoverComponentMultiPopover;
    }

    get_multiPopoverSinglePopover() {
        return this.multiPopoverComponentSinglePopover;
    }

    get_multiPopoverEmptyPopover() {
        return this.multiPopoverComponentEmptyPopover;
    }

    get_popoverTitle() {
        return this.popoverTitle;
    }

    // Multiple Item popover
    get_multiPopoverItem1() {
        return this.multiPopoverItem1;
    }

    get_multiPopoverItem2() {
        return this.multiPopoverItem2;
    }

    get_multiPopoverItem3() {
        return this.multiPopoverItem3;
    }

    get_multiPopoverItem4() {
        return this.multiPopoverItem4;
    }

    // Single Item popover
    get_singlePopoverItem1() {
        return this.singlePopoverItem1;
    }

    // Empty Item popover
    get_emptyPopoverItem1() {
        return this.emptyPopoverItem1;
    }

    get_popoverSubmitBtn() {
        return this.multiPopoverComponentSubmitBtn;
    }

    get_popoverCancelBtn() {
        return this.multiPopoverComponentCancelBtn;
    }

    get_popoverEmptyInfo() {
        return this.multiPopoverComponentEmptyInfo;
    }

    get_clearAll() {
        return this.clearAll;
    }

    get_selectAll() {
        return this.selectAll;
    }

}
