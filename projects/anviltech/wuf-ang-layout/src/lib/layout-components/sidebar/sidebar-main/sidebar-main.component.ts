/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';

import { WufSidebarService } from '../sidebar.service';


@Component({
    selector: 'wuf-sidebar',
    templateUrl: './sidebar-main.component.html',
    styleUrls: ['./sidebar-main.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufSidebarMainComponent implements OnInit, OnDestroy {
    sidebarToggleSubscription: Subscription;
    sidebarShowSubscription: Subscription;
    sidebarHideSubscription: Subscription;
    sidebarResizerDragStartSubscription: Subscription;
    sidebarResizerDragSubscription: Subscription;
    sidebarResizerDragEndSubscription: Subscription;
    sidebarResizerToggleSubscription: Subscription;
    configSubscription: Subscription;
    minSize: number = 55; // minimum width
    defaultSidebarSize: number = 230; // The default width of the sidebar when expanded.  Toggling the resizer will switch between the minSize and the defaultSidebarSize
    mainPanelMinSize: number = 40; // The width at which the sidebar is considered "minimized" with an icon-only view
    fontsizeBreakpointSmall: number = 200; // The width under which sidebar font decreases in size
    fontsizeBreakpointTiny: number = 150; // The width under which sidebar font decreases in size

    _storedTransition: string;
    _currentSize: number;

    @ViewChild('sidebarWrap') sidebarWrap: ElementRef;
    @ViewChild('sidebar') sidebar: ElementRef;

    constructor(public kgSidebarService: WufSidebarService, public configService: WufConfigurationService) {
    }

    ngOnInit() {
        // Subscribe to toggle sidebar events
        this.sidebarToggleSubscription = this.kgSidebarService.onToggleSidebar().subscribe((message: any) => {
            this.toggleSidebar(message.event);
        });

        this.sidebarShowSubscription = this.kgSidebarService.onShowSidebar().subscribe((message: any) => {
            this.showSidebar();
        });

        this.sidebarHideSubscription = this.kgSidebarService.onHideSidebar().subscribe((message: any) => {
            this.hideSidebar();
        });

        // Subscribe to resizer sizing events
        this.sidebarResizerDragStartSubscription = this.kgSidebarService.onSidebarResizerDragStart().subscribe((message: any) => {
            // Drag start
            this.startSidebarResizing(message.event);
        });

        this.sidebarResizerDragSubscription = this.kgSidebarService.onSidebarResizerDrag().subscribe((message: any) => {
            // Dragging
            this.sidebarResizing(message.event);
        });

        this.sidebarResizerDragEndSubscription = this.kgSidebarService.onSidebarResizerDragEnd().subscribe((message: any) => {
            // Drag end
            this.stopSidebarResizing(message.event);
        });

        this.sidebarResizerToggleSubscription = this.kgSidebarService.onSidebarResizerToggle().subscribe((message: any) => {
            // Resizer toggle
            this.toggleResizer(message.event);
        });

        // Subscribe to WufConfigurationService updates
        this.configSubscription = this.configService.onConfigChange().subscribe(
            newConfig => {
                this.onConfigChange(newConfig);
            },
            err => {
                console.warn('error on subscription:', err);
            }
        );
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.sidebarToggleSubscription.unsubscribe();
        this.sidebarShowSubscription.unsubscribe();
        this.sidebarHideSubscription.unsubscribe();
        this.sidebarResizerDragStartSubscription.unsubscribe();
        this.sidebarResizerDragSubscription.unsubscribe();
        this.sidebarResizerDragEndSubscription.unsubscribe();
        this.sidebarResizerToggleSubscription.unsubscribe();
        this.configSubscription.unsubscribe();
    }

    /***** sidebar initialization and restoration from configuration *****/

    saveSidebarStyles() {
        const computedStyle: any = window.getComputedStyle(this.sidebarWrap.nativeElement);
        this._storedTransition = computedStyle['transition'];
    }

    saveSidebarSize() {
        const currentWidth = this.getSidebarWidth();

        // Do nothing if the current size is the same as what's already in the config
        if (this.configService.config.hasOwnProperty('sidebarSize') && this.configService.config.sidebarSize === currentWidth) {
            return;
        }
        else {
            this.configService.config = {
                sidebarSize: currentWidth
            };
        }
    }

    onConfigChange(newConfig: any) {
        // Received notification of a config update.  Do something with each updated property, if applicable.

        // Update sidebar sizing as per config setting
        if (newConfig.hasOwnProperty('sidebarSize') && newConfig.sidebarSize !== this._currentSize) {
            // The config has a new sidebar size
            this.saveSidebarStyles();
            this.setSidebarSize(newConfig.sidebarSize, true); // The boolean here turns off the transition effect while setting the size
            this.restoreSidebarStyles(); // Now we need to restore the transition effect
        }
    }

    /***** sidebar toggling *****/

    toggleSidebar($event: any) {
        const isExpanded = this.getIsExpanded();

        // If it's explicitly set to collapsed or implicitly collapsed by browser size at initial load
        if (!isExpanded && !this.getHasWidth()) {
            this.showSidebar();
        }
        // Otherwise, collapse it
        else {
            this.hideSidebar();
        }
    }

    toggleResizer($event: any) {
        if (this.getIsMinimized()) {
            // If minimized, expand to default size
            this.setSidebarSize(this.defaultSidebarSize, false);
            this.setIsMinimized(false);
            setTimeout(() => {
                //Wait for transition to complete
                this.restoreSidebarStyles(); // Need to run this again after setSidebarSize to account for the transition time
                this.saveSidebarSize();
            }, 500);
        }
        else {
            // Minimize
            this.setSidebarSize(this.minSize, false);
            this.setIsMinimized(true);
            this.saveSidebarSize();
        }
        $event.preventDefault();
    }

    showSidebar() {
        this.kgSidebarService.setIsExpanded(true);

        // Get transition time and convert string in seconds or milliseconds (e.g., 5s / 500ms) to a number that can be used in the timeout
        const transitionInCss: string = this.sidebarWrap.nativeElement.style.transitionDuration || '0.5s';
        const multiplier: number = transitionInCss.indexOf('ms') > 0 ? 1 : 1000;
        const transitionTimeMatch: any = parseFloat(transitionInCss);
        const transitionTime = parseFloat(transitionTimeMatch) * multiplier;

        // Wait until transition has completed and then reset font sizes
        setTimeout(() => {
            this.restoreSidebarStyles(); // Reset font sizes
            this.setIsMinimized(this.getIsMinimized());
        }, transitionTime);
    }

    hideSidebar() {
        this.kgSidebarService.setIsExpanded(false);
    }

    getSidebarWidth(): number {
        return this.sidebarWrap.nativeElement.offsetWidth;
    }

    private getHasWidth() {
        return this.getSidebarWidth();
    }

    /**
     *
     * We want the initial display state of the sidebar to be determined by the width of the window.
     * If the window is small, the CSS will use mobile breakpoints to initially hide the sidebar.
     * If the window is large enough, the CSS will show the sidebar.
     * Override all of this behavior if the user EXPLICITLY sets the sidebar to expand/collapse
     * (i.e., if this.kgSidebarService.sidebarIsExpanded is NOT undefined)
     */
    private getIsExpanded() {
        let isExpanded;

        if (this.kgSidebarService.sidebarIsExpanded !== undefined && this.kgSidebarService.sidebarIsExpanded === false) {
            isExpanded = false;
        }
        else if (this.kgSidebarService.sidebarIsExpanded !== undefined && this.kgSidebarService.sidebarIsExpanded === true) {
            isExpanded = true;
        }

        return isExpanded;
    }

    private getIsMinimized() {
        return (this.getSidebarWidth() <= this.minSize);
    }

    /***** sidebar resizing *****/

    getSidebarMaxSize() {
        // The side panel can be as large as the browser window minus mainPanelMinSize
        let windowSize: number = document.body.offsetWidth;

        return windowSize - this.mainPanelMinSize;
    }

    restoreSidebarStyles(newWidth?: number, turnOffTransition?: boolean) {
        if (newWidth) {
            // We're doing something clever here with CSS custom properties.  When --wuf-sidebar-width-current is set, the sidebar will use this value for sizing.  When not set, sidebar width will revert to --wuf-sidebar-width.  View sidebar-main.component.scss to see how the CSS custom props are used.  This mechanism allows us to also expand/collapse the sidebar with the toggler without writing any inline CSS to the element.
            document.documentElement.style.setProperty('--wuf-sidebar-width-current', `${newWidth}px`);
        }

        // The above trick with CSS custom properties doesn't work for the transition property.  This is because setting a value for a custom property with "none" or "inherit" doesn't actually create a CSS custom property.  So instead we need to fall back on writing the cssText to the element.
        const sidebarTransition = this.kgSidebarService.sidebarIsResizing || turnOffTransition ? 'none!important' : this._storedTransition;
        const sidebarStyles = `transition:${sidebarTransition}`;
        this.sidebarWrap.nativeElement.style.cssText = sidebarStyles;

        if (this.getSidebarWidth() <= this.fontsizeBreakpointTiny) {
            document.documentElement.style.setProperty('--wuf-sidebar-text-current', '.7rem');
        }
        else if (this.getSidebarWidth() <= this.fontsizeBreakpointSmall) {
            document.documentElement.style.setProperty('--wuf-sidebar-text-current', '.8rem');
        }
        else {
            document.documentElement.style.setProperty('--wuf-sidebar-text-current', '1rem');
        }
    }

    checkSidebarValidBounds(newSize: number, minSize: number, maxSize: number): number {
        return newSize >= minSize
            ? (newSize <= maxSize)
                ? newSize
                : maxSize
            : minSize;
    }

    setSidebarSize(newPanelSize: number, turnOffTransition?: boolean) {
        let panelSize = this.checkSidebarValidBounds(newPanelSize, this.minSize, this.getSidebarMaxSize());
        this.restoreSidebarStyles(panelSize, turnOffTransition);
        this.setIsMinimized(this.getIsMinimized());
    }

    startSidebarResizing($event: any) {
        // About to start resizing
        this.kgSidebarService.sidebarIsResizing = true;
        this.restoreSidebarStyles();
        this._currentSize = this.getSidebarWidth();
    }

    setIsMinimized(setMinimized: boolean) {
        this.kgSidebarService.sidebarIsMinimized = setMinimized;
    }

    setCurrentSize(currentSize: number) {
        this._currentSize = currentSize;
    }

    sidebarResizing($event: any) {
        const delta = this.kgSidebarService.mouseOutOfWindow ? 0 : $event.movementX;
        const newSize = this._currentSize + delta;

        this.setSidebarSize(newSize);
        this.setIsMinimized(this.getIsMinimized());
        this.setCurrentSize(newSize);

        $event.preventDefault(); // prevent mouse selection of page content
    }

    stopSidebarResizing($event: any) {
        this.kgSidebarService.sidebarIsResizing = false;
        this.restoreSidebarStyles();
        this.saveSidebarSize();
    }


}
