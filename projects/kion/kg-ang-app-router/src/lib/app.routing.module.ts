import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { RouterModule, Router, Routes, Route } from '@angular/router';
import { IRoute, IChildRoute } from './IRoute';

import { DefinedRoutes } from './defined.routes.provider';

export interface IRouteConfig {
    mainViewComponent: any;
    defaultScreenComponent: any;
    loginScreenComponent?: any;
    logoutScreenComponent?: any;
    loginUrl?: string;
    logoutUrl?: string;
}
export class RouteConfig implements IRouteConfig {
    mainViewComponent: any;
    defaultScreenComponent: any;
    loginScreenComponent?: any;
    logoutScreenComponent?: any;
    loginUrl?: string;
    logoutUrl?: string;
}

export class ModuleRoute implements IRoute {
    implIRoutes: boolean;
    path: string;
    label: string;
    materialDesignIconId?: string;
    component?: any;
    activeOptions?: any;
    childRoutes?: IChildRoute[];
}

@NgModule({
    imports: [RouterModule.forRoot([])],
    exports: [RouterModule]
})
export class AppRoutingModule {
    private static routeConfig: RouteConfig | null = null;

    public static forRoot(routeConfig: IRouteConfig): ModuleWithProviders {
        return {
            ngModule: AppRoutingModule,
            providers: [
                { provide: RouteConfig, useValue: routeConfig },
                DefinedRoutes
            ]
        };
    }

    public static forChild(moduleRoute: IRoute): ModuleWithProviders {
        return {
            ngModule: AppRoutingModule,
            providers: [
                { provide: ModuleRoute, useValue: moduleRoute }
            ]
        };
    }

    public static transformChildRoutes(parentRoute: IRoute, childRoutes?: IChildRoute[]): Routes {
        let routes: Routes = [];

        if (parentRoute.component) {
            routes.push({
                path: '',
                component: parentRoute.component
            });
        }

        if (childRoutes && childRoutes.length > 0) {
            routes = routes.concat(childRoutes.map<Route>((childRoute: IChildRoute): Route => {
                const childPath: string = childRoute.dynamicPath != null ? childRoute.dynamicPath : childRoute.path;

                return {
                    path: childPath,
                    component: childRoute.component
                };
            }));
        }

        return routes;
    }

    constructor(@Optional() routeConfig: RouteConfig, @Optional() moduleRoute: ModuleRoute,
        private router: Router, private definedRoutes: DefinedRoutes) {
        if (routeConfig) {
            AppRoutingModule.routeConfig = routeConfig;

            let rootRoutes: Routes = [{
                path: '',
                component: AppRoutingModule.routeConfig.mainViewComponent,
                children: [{
                    path: '',
                    component: AppRoutingModule.routeConfig.defaultScreenComponent
                }]
            }];
            if (AppRoutingModule.routeConfig.loginScreenComponent) {
                rootRoutes.push({
                    path: AppRoutingModule.routeConfig.loginUrl || 'login',
                    component: AppRoutingModule.routeConfig.loginScreenComponent
                });
            }
            if (AppRoutingModule.routeConfig.logoutScreenComponent) {
                rootRoutes.push({
                    path: AppRoutingModule.routeConfig.logoutUrl || 'logout',
                    component: AppRoutingModule.routeConfig.logoutScreenComponent
                });
            }

            const moduleRoutes: IRoute[] = DefinedRoutes.getRoutes();

            if (moduleRoutes && moduleRoutes.length > 0) {
                rootRoutes = rootRoutes.concat(
                    moduleRoutes.map((definedRoute: IRoute): Route => {
                        return {
                            path: definedRoute.path,
                            // @ts-ignore: Object is possibly 'null'.
                            // We are setting it to a not null value so this will never be null. TSC doesn't see it.
                            component: AppRoutingModule.routeConfig.mainViewComponent,
                            children: AppRoutingModule.transformChildRoutes(definedRoute, definedRoute.childRoutes)
                        };
                    })
                );
            }

            rootRoutes.forEach((route: Route) => {
                this.router.config.push(route);
            });
        }

        if (moduleRoute) {
            DefinedRoutes.addRoute(moduleRoute);

            if (AppRoutingModule.routeConfig) {
                RouterModule.forChild([{
                    path: moduleRoute.path,
                    component: AppRoutingModule.routeConfig.mainViewComponent,
                    children: AppRoutingModule.transformChildRoutes(moduleRoute, moduleRoute.childRoutes)
                }]);
            }
        }
    }

    public addRoute(route: IRoute) {
        this.definedRoutes.addRoute(route);

        if (!AppRoutingModule.routeConfig) {
            throw new Error('Must run .forRoot() at the root of your application before dynamically adding routes.');
        }

        this.router.config.push({
            path: route.path,
            component: AppRoutingModule.routeConfig.mainViewComponent,
            children: AppRoutingModule.transformChildRoutes(route, route.childRoutes)
        });
    }
}
