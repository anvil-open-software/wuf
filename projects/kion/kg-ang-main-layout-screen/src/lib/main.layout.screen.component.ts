import { Component, ViewEncapsulation, OnInit, InjectionToken, Inject, Optional } from '@angular/core';
import { DefinedRoutes, IRoute } from '@kion/kg-ang-app-router';
import { AuthorizationCache } from '@kion/kg-ang-app-auth';
import { IChildRoute } from '@kion/kg-ang-app-router';
import { Subscription } from 'rxjs';
import { KgConfigurationService } from '@kion/kg-ang-configuration';

export const APP_NAME = new InjectionToken<string>('APPNAME');

@Component({
    selector: 'kg-main-layout-screen',
    templateUrl: './main.layout.screen.component.html',
    styleUrls: ['./main.layout.screen.component.scss'],
    providers: [KgConfigurationService],
    encapsulation: ViewEncapsulation.Emulated
})
export class MainLayoutScreenComponent implements OnInit {
    navData: any;
    definedRoutesSubscription: Subscription;

    constructor(
        @Optional() @Inject(APP_NAME) public appName = '',
        public authorizationCache: AuthorizationCache,
        private definedRoutes: DefinedRoutes,
        public configService: KgConfigurationService) {
    }

    ngOnInit() {
        // Subscribe to updates to defined routes.
        this.definedRoutesSubscription = this.definedRoutes.onRoutesUpdate().subscribe(
            routes => {
                this.updateNavData(routes);
            },
            err => {
                console.warn('error on defined routes subscription:', err);
            }
        );
    }

    public updateNavData(routes: IRoute[]) {
        this.navData = this.transformRoutesToNavItems(routes);
    }

    private transformRoutesToNavItems(routes: IRoute[]): any {
        return [{
            link: '/',
            label: 'Home',
            icon: 'home',
            id: 'nav-home'
        }].concat(routes.map((route: IRoute): any => {
            const subNavItems = this.transformChildRoutesToNavItems(route, route.childRoutes);

            return {
                link: '/' + route.path,
                label: route.label,
                icon: route.materialDesignIconId,
                id: 'nav-' + route.label.toLowerCase().replace(' ', '-'),
                links: subNavItems,
                activeOptions: route.activeOptions ? route.activeOptions : { exact: true },
            };
        }));
    }

    private transformChildRoutesToNavItems(parentRoute: IRoute, routes?: IChildRoute[]) {
        if (routes && routes.length > 0) {
            return routes.map((route: IChildRoute) => {
                return {
                    link: '/' + parentRoute.path + '/' + route.path,
                    label: route.label,
                    id: route.label.toLowerCase().replace(' ', '-'),
                    icon: route.materialDesignIconId,
                    activeOptions: route.activeOptions ? route.activeOptions : { exact: true },
                };
            });
        }

        return null;
    }
}
