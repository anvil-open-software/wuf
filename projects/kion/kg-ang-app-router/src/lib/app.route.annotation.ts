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
