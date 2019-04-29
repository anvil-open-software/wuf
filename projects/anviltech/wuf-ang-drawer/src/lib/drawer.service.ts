/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WufDrawerService {

    private showSubject = new Subject<any>();
    private hideSubject = new Subject<any>();
    private minimizeSubject = new Subject<any>();
    private expandSubject = new Subject<any>();

    constructor() {
    }

    show(id: string) {
        this.showDrawer(id);
    }

    hide(id: string) {
        this.hideDrawer(id);
    }

    showDrawerObservable(): Observable<any> {
        // Allow other components to subscribe to the show event
        return this.showSubject.asObservable();
    }

    hideDrawerObservable(): Observable<any> {
        // Allow other components to subscribe to the hide event
        return this.hideSubject.asObservable();
    }

    minimizeDrawerObservable(): Observable<any> {
        // Allow other components to subscribe to the minimize event
        return this.minimizeSubject.asObservable();
    }

    expandDrawerObservable(): Observable<any> {
        // Allow other components to subscribe to the expand event
        return this.expandSubject.asObservable();
    }

    hideDrawer(id: string) {
        this.hideSubject.next({id: id});
    }

    showDrawer(id: string) {
        this.showSubject.next({id: id});
    }
}
