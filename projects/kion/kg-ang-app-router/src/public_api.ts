/*
 * Public API Surface of kg-ang-app-router
 */

import { AppRoute } from './lib/app.route.annotation';
import { DefinedRoutes } from './lib/defined.routes.provider';
import { IRoute, IChildRoute } from './lib/IRoute';
import { AppRoutingModule, IRouteConfig } from './lib/app.routing.module';


export { IRoute, IRouteConfig, IChildRoute, AppRoute, AppRoutingModule, DefinedRoutes };
