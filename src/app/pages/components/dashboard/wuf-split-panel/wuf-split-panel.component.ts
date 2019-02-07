/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'wuf-split-panel',
    templateUrl: './wuf-split-panel.component.html',
    styleUrls: ['./wuf-split-panel.component.scss']
})
export class WufSplitPanelComponent implements OnInit {

    @ViewChild('panelResizer') sidebarResizer: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }


    /***** panel resizing *****/

    // getPanelMaxSize() {
    // 	// The panel can be as large as the browser window minus panelMinSize
    // 	let windowSize: number = document.body.offsetWidth;
    //
    // 	return windowSize - this.panelMinSize;
    // }

    // /***** sidebar initialization and restoration from configuration *****/
    //
    // saveSidebarStyles() {
    // 	let computedStyle: any = window.getComputedStyle(this.sidebarWrap.nativeElement);
    // 	this._storedTransition = computedStyle['transition'];
    // }
    //
    // saveSidebarSize() {
    // 	let currentWidth = this.getSidebarWidth();
    //
    // 	// Do nothing if the current size is the same as what's already in the config
    // 	if (this.configService.config.hasOwnProperty('sidebarSize') && this.configService.config === currentWidth) {
    // 		return;
    // 	}
    // 	else {
    // 		this.configService.config = {
    // 			sidebarSize: currentWidth
    // 		};
    // 	}
    // }
    //
    // onConfigChange(newConfig: any) {
    // 	// Received notification of a config update.  Do something with each updated property, if applicable.
    //
    // 	// Update sidebar sizing as per config setting
    // 	if (newConfig.hasOwnProperty('sidebarSize') && newConfig.sidebarSize !== this._currentSize) {
    // 		// The config has a new sidebar size
    // 		this.saveSidebarStyles();
    // 		this.setSidebarSize(newConfig.sidebarSize, true); // The boolean here turns off the transition effect while setting the size
    // 		this.restoreSidebarStyles(); // Now we need to restore the transition effect
    // 	}
    // }

    // /***** Events for Sidebar Resizer *****/
    // bindSidebarEvents() {
    // 	// bind mouse events to the sidebarResizer itself
    // 	this.sidebarResizer.nativeElement.addEventListener('mousedown', this.onSidebarResizerDragStart.bind(this));
    // 	this.sidebarResizer.nativeElement.addEventListener('dblclick', this.onSidebarResizerDoubleClick.bind(this));
    // }
    //
    // unbindSidebarEvents() {
    // 	// Remove event bindings
    // 	this.sidebarResizer.nativeElement.removeEventListener('mousedown', this.onSidebarResizerDragStart.bind(this));
    // 	this.sidebarResizer.nativeElement.removeEventListener('dblclick', this.onSidebarResizerDoubleClick.bind(this));
    // }
    //
    // onSidebarResizerDragStart($event: any) {
    // 	this.sidebarService.startResizerDrag($event);
    // }
    //
    // onSidebarResizerDrag($event: any) {
    // 	if (this.sidebarService.sidebarIsResizing) {
    // 		this.sidebarService.resizerDrag($event);
    // 	}
    // }
    //
    // onSidebarResizerDragEnd($event: any) {
    // 	if (this.sidebarService.sidebarIsResizing) {
    // 		this.sidebarService.endResizerDrag($event);
    // 	}
    // }
    //
    // onSidebarResizerDoubleClick($event: any) {
    // 	this.sidebarService.toggleResizer($event);
    // }
    //
    // onMouseOutOfWindow($event: any) {
    // 	if ($event.target == 'document') {
    // 		this.sidebarService.setMouseOut($event);
    // 	}
    // }
    //
    // onMouseIntoWindow($event: any) {
    // 	this.sidebarService.setMouseEnter($event);
    // }
    //
    // // mouseup (also works on mouseup outside of window)
    // @HostListener('window:mouseup', ['$event'])
    // onMouseup($event: any) {
    // 	this.onSidebarResizerDragEnd($event);
    // }
    // // mousemove
    // @HostListener('mousemove', ['$event'])
    // onMousemove($event: MouseEvent) {
    // 	this.onSidebarResizerDrag($event);
    // }
    //
    // // mouseout of document
    // @HostListener('document:mouseout', ['$event'])
    // onMouseout($event: MouseEvent) {
    // 	this.onMouseOutOfWindow($event);
    // }
    //
    // // mouseenter of document
    // @HostListener('document:mouseenter', ['$event'])
    // onMouseenter($event: MouseEvent) {
    // 	this.onMouseIntoWindow($event);
    // }

    // restorePanelStyles(newWidth?: number, turnOffTransition?: boolean) {
    // 	if (newWidth) {
    // 		// this.sidebarResizer.nativeElement.setProperty('--wuf-Panel-width-current', `${newWidth}px`);
    // 	}
    // }
    //
    // checkPanelValidBounds(newSize: number, minSize: number, maxSize: number): number {
    // 	return newSize >= minSize
    // 		? (newSize <= maxSize)
    // 			? newSize
    // 			: maxSize
    // 		: minSize;
    // }
    //
    // setPanelSize(newPanelSize: number, turnOffTransition?: boolean) {
    // 	let panelSize = this.checkPanelValidBounds(newPanelSize, this.minSize, this.getPanelMaxSize());
    // 	this.restorePanelStyles(panelSize, turnOffTransition);
    // 	this.setIsMinimized(this.getIsMinimized());
    // }
    //
    // startPanelResizing($event: any) {
    // 	// About to start resizing
    // 	this.kgPanelService.PanelIsResizing = true;
    // 	this.restorePanelStyles();
    // 	this._currentSize = this.getPanelWidth();
    // }
    //
    // setIsMinimized(setMinimized: boolean) {
    // 	this.kgPanelService.PanelIsMinimized = setMinimized;
    // }
    //
    // setCurrentSize(currentSize: number) {
    // 	this._currentSize = currentSize;
    // }
    //
    // PanelResizing($event: any) {
    // 	let delta = this.kgPanelService.mouseOutOfWindow ? 0 : $event.movementX;
    //
    // 	let newSize = this._currentSize + delta;
    //
    // 	this.setPanelSize(newSize);
    // 	this.setIsMinimized(this.getIsMinimized());
    // 	this.setCurrentSize(newSize);
    //
    // 	$event.preventDefault(); // prevent mouse selection of page content
    // }
    //
    // stopPanelResizing($event: any) {
    // 	this.kgPanelService.PanelIsResizing = false;
    // 	this.restorePanelStyles();
    // 	this.savePanelSize();
    // }

}
