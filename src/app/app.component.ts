/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation, OnInit, Renderer2, OnDestroy } from '@angular/core';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { deepMerge } from '@anviltech/wuf-ang-utils';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from './_internal/services/user.service';

// App configuration
import { configuration } from './_internal/configuration/configuration';

// The following imports are only used for demo purposes
import { FakeUser } from './_internal/fake-backend/data/user';
import { WufLoginService } from '@anviltech/wuf-ang-login-animated';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [WufConfigurationService, UserService],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit, OnDestroy {

    config: any = configuration;
    configSubscription: any;
    loginSubscription: any;
    currentThemeId: string;
    defaultLang: string = 'en';
    mediaQueryList: any;

    constructor(
        private wufConfigService: WufConfigurationService,
        private renderer: Renderer2,
        private userService: UserService,
        private loginService: WufLoginService,
        public translate: TranslateService,
        private mediaMatcher: MediaMatcher
    ) {}

    ngOnInit() {
        /*
            FAKING LOGIN
            Since this app has no backend, we are not presenting the user with a login screen.
            However, we still need user data in order to create a proper configuration object.
            In order to fake it, we get fake username and password info from the FakeUser object
            of fake-backend.service, which simulates data collection from a login screen.

            Once we have fake username/password we proceed as any production app would and pass this
            info into the UserService's authenticate() method. This method will then send an
            authentication request to '/api/authenticate'.

            Because there is no backend, we need to intercept '/api/authenticate' using an HttpInterceptor.
            This is what fakeBackendProvider does for us.

            This process will simulate the effect of logging in and then assembling a full configuration object
            which can then be used throughout this application.

            NOTE: The above process happens upon every browser refresh.  Obviously, if this were a
            production application, we would only want to do this process when the user session
            or the user token (if using JWT) has expired.  This app makes no assumptions about (or has
            any opinions on) the login process.
        */

        // Get fake login info from FakeUser object of /src/internal/fake-backend/data/user.ts
        const fakeLoginData = {
            username: FakeUser.username,
            password: FakeUser.password
        };

        // Authenticate using fake username/password
        this.userService.authenticate(fakeLoginData).subscribe(
            userData => {
                // Authentication successful.  We now have fake user data.
                const user = userData.data;

                // Set a storage key to get/set config in local storage
                const appName = configuration.id;
                const userName = user.hasOwnProperty('id') ? user.id : user.hasOwnProperty('username') ? user.username : 'default_user';
                this.wufConfigService.setStorageKey(appName + '_' + userName); // set the storage key to use from here on out

                // Merge received user data with configuration data from local storage
                const mergedConfiguration = this.getMergedConfiguration(user);

                // Send merged configuration data to the config service (which updates the UI accordingly)
                this.wufConfigService.config = mergedConfiguration;

                // Set up default value for dark theme mode.
                this.mediaQueryList = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)');
                if (this.mediaQueryList.matches && !this.wufConfigService.config.hasOwnProperty('themeDark')) {
                    // If user has turned on dark theme mode in the OS, apply it to the app,
                    // but only if they haven't already specified a default value.
                    this.wufConfigService.config = {
                        themeDark: true
                    };
                }

                // Detect changes to media for dark theme mode in the OS
                this.mediaQueryList.addListener( () => {
                    if (this.mediaQueryList.matches) {
                        this.wufConfigService.config = {
                            themeDark: true
                        };
                    }
                    else {
                        this.wufConfigService.config = {
                            themeDark: false
                        };
                    }
                });
            },
            error => {
                // error
                console.warn('Error retrieving config from server. Error:', error);
            }
        );

        // This language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang(this.defaultLang);

        // Subscribe to configuration updates
        this.configSubscription = this.wufConfigService.onConfigChange().subscribe(
            newConfig => {
                this.onConfigChange(newConfig);
            },
            err => {
                console.warn('error on subscription:', err);
            }
        );

        // Subscribe to login subject (this only applies when using <wuf-login> component
        this.loginSubscription = this.loginService.onLogin().subscribe(
            loginData => {
                // We have collected username/password information from the form in the <wuf-login> component.
                // Now we need to do something with it, like send it to the server for authentication.
            },
            err => {
                console.warn('error on login form:', err);
            }
        );
    }

    ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks

        // Unsubscribe from configuration updates
        if (this.configSubscription && !this.configSubscription.closed) {
            this.configSubscription.unsubscribe();
        }

        // Unsubscribe from login updates
        if (this.loginSubscription && !this.loginSubscription.closed) {
            this.loginSubscription.unsubscribe();
        }
    }

    getMergedConfiguration(userData: any) {
        /* Create a config object comprised of data from various sources:
            1. If user settings are received from the backend with new attributes or with
               modified values, use these new/modified values
            2. If no new or modified setting values are received from server, use locally
               stored setting values
            3. If no local or stored settings values exist, use default application settings
               pulled from src/app/internal/configuration/configuration.ts
            4. If no default application settings exist in Angular's environment properties,
               use the default settings baked into the application and application components.
               Nothing to do here since those properties live in the components themselves.
        */
        const key = this.wufConfigService.getStorageKey();

        return deepMerge(
            {},
            this.config, // start with default app config
            this.wufConfigService.getStoredConfig(key), // apply config from local storage, if any
            userData // data from server response trumps all
        );

    }

    onConfigChange(newConfig: any) {
        // Received notification of a config update.  Do something with each updated property, if applicable.

        // Apply a theme
        if (newConfig.hasOwnProperty('theme') && newConfig.theme !== this.currentThemeId) {
            this.applyTheme(newConfig.theme);
        }

        // Apply dark theme
        if (newConfig.hasOwnProperty('themeDark')) {
            this.applyDarkTheme(newConfig.themeDark);
        }

        // Config has already been applied to local storage.  Now send updated config back to server for DB storage.
        // (This is where you should send configuration updates back to the server for server-side persistence)
    }

    applyTheme(themeId: string) {
        // Set the 'wuf-theme' property on the <html> element.  This is what makes the SCSS selectors inside
        // /src/assets/dummydata/branding work.
        this.currentThemeId = themeId;
        this.renderer.setAttribute(document.documentElement, 'wuf-theme', themeId);
    }

    applyDarkTheme(applyDark: boolean) {
        if (!applyDark) {
            // Remove the 'wuf-theme-dark' property, if no longer applicable
            this.renderer.removeAttribute(document.documentElement, 'wuf-theme-dark');
        }
        else if (applyDark) {
            // Set the 'wuf-theme-dark' property on the <html> element.
            // This is what makes the SCSS selectors inside /src/assets/dummydata/branding work.
            this.renderer.setAttribute(document.documentElement, 'wuf-theme-dark', 'true');
        }
    }

}
