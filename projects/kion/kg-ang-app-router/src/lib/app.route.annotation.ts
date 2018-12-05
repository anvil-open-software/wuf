/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { DefinedRoutes } from './defined.routes.provider';


export function AppRoute(target: any, property: string) {
    Object.defineProperty(target, property, {
        get: function () {
            return this[`_${property}`];
        },
        set: function (value) {
            if (value.implIRoutes) {
                DefinedRoutes.addRoute(value);
            }

            this[`_${property}`] = value;
        }
    });
}
