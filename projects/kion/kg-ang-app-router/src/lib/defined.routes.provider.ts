/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { IRoute, IChildRoute } from './IRoute';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

const _definedRoutes: IRoute[] = [];
const _definedRoutesSubject = new BehaviorSubject<IRoute[]>(_definedRoutes);

@Injectable()
export class DefinedRoutes {
    static addRoute(route: IRoute) {
        const previousRegisteredRoute = _definedRoutes.find(r => r.path === route.path);
        if (previousRegisteredRoute) {
            console.warn(`Attempted to register previously registered route '${previousRegisteredRoute.path}'. This will be ignored.`);
        } else {
            _definedRoutes.push(route);
            _definedRoutesSubject.next(_definedRoutes);
        }
    }

    static getRoutes(): IRoute[] {
        return _definedRoutes;
    }

    public addRoute(route: IRoute) {
        DefinedRoutes.addRoute(route);
    }

    public getRoutes(): IRoute[] {
        return _definedRoutes;
    }

    onRoutesUpdate(): Observable<IRoute[]> {
        // Allow other components to subscribe to the event.
        return _definedRoutesSubject.asObservable();
    }
}
