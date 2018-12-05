/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


// Define an interface for the expected sidebar footer items returned in the response
export interface SidebarFooterItem {
    link: string;
    label: string;
    icon?: string;
    id?: string;

    [propName: string]: any; // This "index signature" allows the interface to accept any additional unexpected properties without throwing an error.  This is necessary because the routes service may use the same data object.
}

export interface FooterResponseData {
    routes: SidebarFooterItem[];
}

@Injectable()
export class KgSidebarService {

    sidebarIsExpanded: boolean;  // Keep this undefined so the sidebar can expand/collapse automatically based on initial screen size
    sidebarIsResizing: boolean = false;
    sidebarIsMinimized: boolean = false;
    mouseOutOfWindow: boolean = false;

    constructor(private http: HttpClient) {
    }

    /***** sidebar toggling *****/
    private toggleSubject = new Subject<any>();
    private showSubject = new Subject<any>();
    private hideSubject = new Subject<any>();

    // Allow other components to receive notifications of toggle events
    toggleSidebar($event: any) {
        this.toggleSubject.next({event: $event});
    }

    onToggleSidebar(): Observable<any> {
        // Allow other components to subscribe to the toggle event
        return this.toggleSubject.asObservable();
    }

    showSidebar() {
        this.showSubject.next();
    }

    hideSidebar() {
        this.hideSubject.next();
    }

    onShowSidebar(): Observable<any> {
        // Allow other components to subscribe to the show event
        return this.showSubject.asObservable();
    }

    onHideSidebar(): Observable<any> {
        // Allow other components to subscribe to the hide event
        return this.hideSubject.asObservable();
    }

    setIsExpanded(val: boolean) {
        this.sidebarIsExpanded = val;
    }

    /***** footer links *****/
    public getSidebarFooterData(url: string): Observable<any> {
        return this.http.get<FooterResponseData>(url);
    }

    /***** sidebar resizer *****/
    private resizerDragStartSubject = new Subject<any>();
    private resizerDragSubject = new Subject<any>();
    private resizerDragEndSubject = new Subject<any>();
    private resizerToggleSubject = new Subject<any>();

    // Allow other components to subscribe to sidebar resizing events...
    onSidebarResizerDragStart(): Observable<any> {
        // Allow other components to subscribe to resizing event
        return this.resizerDragStartSubject.asObservable();
    }

    onSidebarResizerDrag(): Observable<any> {
        // Allow other components to subscribe to resizing event
        return this.resizerDragSubject.asObservable();
    }

    onSidebarResizerDragEnd(): Observable<any> {
        // Allow other components to subscribe to resizing end event
        return this.resizerDragEndSubject.asObservable();
    }

    onSidebarResizerToggle(): Observable<any> {
        // Allow other components to subscribe to resizer double-click
        return this.resizerToggleSubject.asObservable();
    }

    // Allow other components to receive notifications of toggle events
    startResizerDrag($event: any) {
        this.resizerDragStartSubject.next({event: $event});
    }

    resizerDrag($event: any) {
        this.resizerDragSubject.next({event: $event});
    }

    endResizerDrag($event: any) {
        this.resizerDragEndSubject.next({event: $event});
    }

    toggleResizer($event: any) {
        this.resizerToggleSubject.next({event: $event});
    }

    setMouseOut($event: any) {
        // The mouse has left the window.  Note this so we can discard mouse movements.
        this.mouseOutOfWindow = true;
    }

    setMouseEnter($event: any) {
        // The mouse moved back into the window.  Note this so we can start accepting mouse movements.
        this.mouseOutOfWindow = false;
    }

}
