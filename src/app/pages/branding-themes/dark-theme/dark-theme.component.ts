/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';


@Component({
    selector: 'app-themes',
    templateUrl: './dark-theme.component.html',
    styleUrls: ['./dark-theme.component.scss']
})
export class DarkThemeComponent implements OnInit {

    constructor(public configService: WufConfigurationService) {
    }

    ngOnInit() {
    }

    htmlCode = `<html lang="en" wuf-theme-dark="true">`;

    appComponentCode = `
	ngOnInit() {
		// Subscribe to configuration updates from WufConfigurationService
		this.configSubscription = this.configService.onConfigChange().subscribe(
			newConfig => {
				this.onConfigChange(newConfig);
			},
			err => {
				console.warn('error on subscription:', err);
			}
		);
	}
	
	onConfigChange(newConfig: any) {
		// Received notification of a config update.  Do something with each updated property, if applicable.
		
		// Apply dark theme
		if (newConfig.hasOwnProperty('themeDark')) {
			this.applyDarkTheme(newConfig.themeDark);
		}
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
`;

    configurationCode = `
		setDarkTheme(applyDark: boolean) {
		// Convert to config properties and send them to the WufConfigurationService
		this.configService.config = {
			themeDark: applyDark
		}
	}
`;

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
