/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class SetupConfigurationComponent implements OnInit {

    serviceDefaultExample = `
    {
        id:                     'wuf-application',
        navigation: {
            position:       'left',
            iconPosition:   'left',
            alignment:      'left'
        },
        theme:                  'dematic',
        user: {
            id:             'default'
        }
    }
    `;

    serverDataExample = `
    {
        "user": {
            id: 147123-874793-75782819,
            username: 'someuser',
            firstName: 'Tony',
            lastName: 'Stark'
        }
    }
    `;

    appDefaultExample = `
    {
        id:                     'living-style-guide',
        name:                   'Living Style Guide',
        copyrightName:          'ACME, Inc.'
        navigation: {
            position:       'left',
            iconPosition:   'left',
            alignment:      'left'
        },
        theme:                  'dematic',
    }
    `;

    appComponentExample = `
        import { Component, ViewEncapsulation, OnInit, Renderer2, OnDestroy } from '@angular/core';

        import { WufConfigurationService } from '@anviltech/wuf-ang-configuration'
        import { deepMerge } from '@anviltech/wuf-ang-utils';
        import { UserService } from './internal/services/user.service';
        
        // The following imports are only used for demo purposes
        import { configuration } from './internal/configuration/configuration';
        import { FakeUser } from './internal/fake-backend.service';
        
        
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            providers: [ WufConfigurationService, UserService ],
            encapsulation: ViewEncapsulation.Emulated
        })
        export class AppComponent implements OnInit, OnDestroy {
        
            config: any = configuration;
            configSubscription: any;
            currentThemeId: string;
        
            constructor(private configService: WufConfigurationService, private renderer: Renderer2, private userService: UserService) {
            }
        
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
        
                // Get fake login info from FakeUser object of fake-backend.service
                let fakeLoginData = {
                    username: FakeUser.username,
                    password: FakeUser.password
                };
        
                // Authenticate using fake username/password
                this.userService.authenticate(fakeLoginData).subscribe(
                    data => {
                        // success
                        let user = {
                            user: data
                        };
        
                        // Merge received user data with configuration data from local storage
                        let mergedConfiguration = this.getMergedConfiguration(user);
        
                        // Send merged configuration data to the config service (which updates the UI accordingly)
                        this.configService.config = mergedConfiguration;
                    },
                    error => {
                        // error
                        console.warn('Error retrieving config from server. Error:', error)
                    }
                );
        
                // Subscribe to configuration updates
                this.configSubscription = this.configService.onConfigChange().subscribe(
                    newConfig => {
                        this.onConfigChange(newConfig);
                    },
                    err => {
                        console.warn('error on subscription:', err);
                    }
                );
            }
        
            ngOnDestroy() {
                this.configSubscription.unsubscribe();
            }
        
            getMergedConfiguration(userData: any) {
                /* Create a config object comprised of data from various sources:
                    1. If user settings are received from the backend with new attributes or with modified values, use these new/modified values
                    2. If no new or modified setting values are received from server, use locally stored setting values
                    3. If no local or stored settings values exist, use default application settings pulled from Angular's environment properties
                    4. If no default application settings exist in Angular's environment properties, use the default settings baked into the application and application components.  Nothing to do here since those properties live in the components themselves.
                */
                let key = this.configService.getStorageKey(this.config.id,  userData.user.id);
        
                return deepMerge(
                    {},
                    this.config, // start with default app config
                    this.configService.getStoredConfig(key), // apply config from local storage, if any
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
                // Set the 'wuf-theme' property on the <html> element.  This is what makes the SCSS selectors inside /src/assets/dummydata/branding work.
                this.currentThemeId = themeId;
                this.renderer.setAttribute(document.documentElement, 'wuf-theme', themeId);
            }
        
            applyDarkTheme(applyDark: boolean) {
                if (!applyDark) {
                    // Remove the 'wuf-theme-dark' property, if no longer applicable
                    this.renderer.removeAttribute(document.documentElement, 'wuf-theme-dark');
                }
                else if (applyDark) {
                    // Set the 'wuf-theme-dark' property on the <html> element.  This is what makes the SCSS selectors inside /src/assets/dummydata/branding work.
                    this.renderer.setAttribute(document.documentElement, 'wuf-theme-dark', "true");
                }
            }
        
        }
    `;

    setupCode1 = `import { WufConfigurationModule, WufConfigurationService } from '@anviltech/wuf-ang-configuration';`;
    setupCode2 = `
    providers: [
        WufConfigurationService
    ],
    `;

    constructor() {
    }

    ngOnInit() {
    }

}
