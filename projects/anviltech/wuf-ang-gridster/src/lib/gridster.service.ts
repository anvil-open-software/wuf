/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { WufGridsterItem } from './gridster.interface';
import { Observable, Subject } from 'rxjs/index';


@Injectable({
    providedIn: 'root'
})
export class WufGridsterService {

    items: Array<WufGridsterItem>;
    private updateSubject = new Subject<any>();

    constructor() {
    }

    onUpdate(): Observable<any> {
        // Allow other components to receive notifications of gridster update events
        return this.updateSubject.asObservable();
    }

    add(item) {
        this.items.push(item);
        this.sendUpdate('add');
    }

    delete(index) {
        this.items.splice(index, 1);
        this.sendUpdate('delete');
    }

    sendUpdate(action) {
        this.updateSubject.next({
            action: action,
            items: this.items
        });
    }

    /* TODO:
        * Method for dynamically loading components within the gridster items
        * Pass "include delete" action
        * Method for passing in actions (in addition to the current delete action)
        * broadcast adding/removing events with current gridster list as payload
    */
}
