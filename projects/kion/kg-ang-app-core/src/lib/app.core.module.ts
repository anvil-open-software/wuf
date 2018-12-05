import { NgModule, Injector, ModuleWithProviders, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { GLOBAL_EVENT_BUS, Event } from './events/event.bus';
import { EVENT_TYPES } from './events/event.types';

import { IApplicationConfig } from './IApplicationConfig';

import { ObjectUtils } from './utils/objectUtils';

import { HttpClientModule } from '@angular/common/http';

import { CoreHttpService } from './http/core.http.service';

import { AppRootComponent } from './components/app.root.component/app.root.component';

export class ApplicationConfig implements IApplicationConfig {
    logoutRoute?: string = '/login';
    loginRoute?: string = '/logout';
}

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [AppRootComponent],
    declarations: [AppRootComponent],
    providers: [CoreHttpService]
})
export class AppCoreModule {
    private applicationConfig: IApplicationConfig;
    private logoutEvent: Event;
    private loginEvent: Event;

    public static forRoot(config: IApplicationConfig): ModuleWithProviders {
        return {
            ngModule: AppCoreModule,
            providers: [
                { provide: ApplicationConfig, useValue: config }
            ]
        };
    }

    constructor(@Optional() applicationConfig: ApplicationConfig,
                @Optional() private router: Router) {
        if (applicationConfig) {
            this.applicationConfig = ObjectUtils.extend(this.applicationConfig, applicationConfig);
        }

        this.logoutEvent = GLOBAL_EVENT_BUS.subscribe(EVENT_TYPES.AUTH_LOGOUT, this.onAuthLogout, this);
        this.loginEvent = GLOBAL_EVENT_BUS.subscribe(EVENT_TYPES.AUTH_LOGIN_SUCCESS, this.onAuthLogin, this);
    }

    public onAuthLogin() {
    }

    public onAuthLogout() {
        if (this.router) {
            this.router.navigateByUrl(this.applicationConfig.logoutRoute || '/logout');
        }
    }
}

