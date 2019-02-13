/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { WufNavigationService } from '@anviltech/wuf-ang-navigation';
import { ThemeListService } from '../../theme-list.service';
import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { WufDrawerService } from '@anviltech/wuf-ang-drawer';


@Component({
    selector: 'app-layout-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LayoutMainComponent implements OnInit, OnDestroy {

    // Set the URL from which to fetch the routes/navigation data object.
    // We're setting this to a dummy, local route for this app but you
    // can/should use a data service for a real app.
    navDataUrl: string = '/api/navigation';
    footerDataUrl: string = '/api/footer';
    title: string;
    navData: any;
    logoRoute: string = '/'; // Route path to take users when clicking on header logo
    themes: any;
    theme: any;
    configSubscription: any;

    constructor(
        private navService: WufNavigationService,
        private themeList: ThemeListService,
        public configService: WufConfigurationService,
        private drawerService: WufDrawerService
    ) {
        this.theme = this.themeList[0];
        this.themes = themeList.themes;
    }

    ngOnInit() {
        // Fetch nav data
        this.navService.getNavData(this.navDataUrl).subscribe(
            results => {
                this.navData = results.data.links;
            },
            err => {
                console.error('Error retrieving nav data:', err);
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

    setTheme(theme: any) {
        // Convert theme properties to config properties and send them to the WufConfigurationService
        this.configService.config = theme.config;
    }

    onNavPositionChange($event) {
        this.configService.config = {navigation: {position: this.configService.config.navigation.position}};
    }

    onNavIconPositionChange($event) {
        this.configService.config = {navigation: {iconPosition: this.configService.config.navigation.iconPosition}};
    }

    onNavAlignmentChange($event) {
        this.configService.config = {navigation: {alignment: this.configService.config.navigation.alignment}};
    }

    openDrawer() {
        this.drawerService.show('settingsDrawer');
    }

    onThemeChange($event: any) {
        this.setTheme(this.theme);
    }

    onConfigChange(newConfig: any) {
        // Determine current theme
        for (let i = 0; i < this.themes.length; i++) {
            if (this.themes[i].config.theme === newConfig.theme) {
                this.theme = this.themes[i];
                break;
            }
        }

        // Add page title to login screen
        this.title = newConfig.hasOwnProperty('name') ? newConfig['name'] : undefined;
    }

    setDarkTheme(applyDark: boolean) {
        // Convert to config properties and send them to the WufConfigurationService
        this.configService.config = {
            themeDark: applyDark
        };
    }

    onDarkThemeChange(val) {
        this.setDarkTheme(val);
    }

}
