/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import {
    Component,
    OnInit,
    ViewEncapsulation,
    ViewChild,
    ElementRef,
    HostListener,
    AfterViewInit,
    OnDestroy,
    Input
} from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';

import { WufSidebarService } from '../../layout-components/sidebar/sidebar.service';
import { WufLayoutService } from '../layout.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'wuf-view-main',
    styleUrls: ['main.component.scss'],
    templateUrl: 'main.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class WufViewMainComponent implements OnInit, AfterViewInit, OnDestroy {

    navPosition: string = 'left';
    iconPosition: string = 'left';
    navAlignment: string = 'left';

    configSubscription: Subscription;

    constructor(
        public sidebarService: WufSidebarService,
        public configService: WufConfigurationService,
        public layoutService: WufLayoutService,
        @Inject(DOCUMENT) private document: any
    ) {
        // Subscribe to configuration updates
        this.configSubscription = this.configService.onConfigChange().subscribe(
            newConfig => {
                this.onConfigChange(newConfig);
            },
            err => {
                console.warn('error on subscription:', err);
            }
        );
    }

    @Input() logoRoute: string;

    /***** Sidebar Resizer *****/
    @ViewChild('sidebarResizer', {static: false}) sidebarResizer: ElementRef;

    onSidebarTogglerClick($event: any) {
        this.sidebarService.toggleSidebar($event);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.bindSidebarEvents();
    }

    ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.unbindSidebarEvents();

        // Unsubscribe from configuration updates
        if (this.configSubscription && !this.configSubscription.closed) {
            this.configSubscription.unsubscribe();
        }
    }

    /***** Events for Sidebar Resizer *****/
    bindSidebarEvents() {
        // bind mouse events to the sidebarResizer itself
        this.sidebarResizer.nativeElement.addEventListener('mousedown', this.onSidebarResizerDragStart.bind(this));
        this.sidebarResizer.nativeElement.addEventListener('dblclick', this.onSidebarResizerDoubleClick.bind(this));
    }

    unbindSidebarEvents() {
        // Remove event bindings
        this.sidebarResizer.nativeElement.removeEventListener('mousedown', this.onSidebarResizerDragStart.bind(this));
        this.sidebarResizer.nativeElement.removeEventListener('dblclick', this.onSidebarResizerDoubleClick.bind(this));
    }

    onSidebarResizerDragStart($event: any) {
        this.sidebarService.startResizerDrag($event);

        // Prevent inadvertent text selection of surrounding content
        document.body.style.userSelect = 'none';
        $event.preventDefault();
    }

    onSidebarResizerDrag($event: any) {
        if (this.sidebarService.sidebarIsResizing) {
            this.sidebarService.resizerDrag($event);
        }
    }

    onSidebarResizerDragEnd($event: any) {
        if (this.sidebarService.sidebarIsResizing) {
            this.sidebarService.endResizerDrag($event);
            document.body.style.userSelect = 'initial';
        }
    }

    onSidebarResizerDoubleClick($event: any) {
        this.sidebarService.toggleResizer($event);
    }

    onMouseOutOfWindow($event: any) {
        if ($event.target === 'document') {
            this.sidebarService.setMouseOut($event);
        }
    }

    onMouseIntoWindow($event: any) {
        this.sidebarService.setMouseEnter($event);
    }

    onConfigChange(newConfig: any) {
        this.navPosition = newConfig['navigation'].position;
        this.iconPosition = newConfig['navigation'].iconPosition;
        this.navAlignment = newConfig['navigation'].alignment;
    }

    // mouseup (also works on mouseup outside of window)
    @HostListener('window:mouseup', ['$event'])
    onMouseup($event: any) {
        this.onSidebarResizerDragEnd($event);
    }

    // mousemove
    @HostListener('mousemove', ['$event'])
    onMousemove($event: MouseEvent) {
        this.onSidebarResizerDrag($event);
    }

    // mouseout of document
    @HostListener('document:mouseout', ['$event'])
    onMouseout($event: MouseEvent) {
        this.onMouseOutOfWindow($event);
    }

    // mouseenter of document
    @HostListener('document:mouseenter', ['$event'])
    onMouseenter($event: MouseEvent) {
        this.onMouseIntoWindow($event);
    }
}
