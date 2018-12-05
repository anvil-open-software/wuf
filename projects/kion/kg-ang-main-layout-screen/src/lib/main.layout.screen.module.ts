/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { KgLayoutModule } from '@kion/kg-ang-layout';
import { KgConfigurationService } from '@kion/kg-ang-configuration';
import { KgNavigationModule, KgNavigationService } from '@kion/kg-ang-navigation';

import { MainLayoutScreenComponent } from './main.layout.screen.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        KgLayoutModule,
        KgNavigationModule
    ],
    exports: [MainLayoutScreenComponent],
    declarations: [MainLayoutScreenComponent],
    entryComponents: [MainLayoutScreenComponent]
})
export class MainLayoutScreenModule implements OnInit, OnDestroy {
    logoRoute = '/'; // Route path to take users when clicking on header logo
    navDataUrl = '/api/navigation'; // URL from which to fetch navigation data
    navData: any;
    onDestroy$ = new Subject<void>();
    authorizationCache: any;

    constructor(private navService: KgNavigationService, public configService: KgConfigurationService) { }

    public ngOnInit() {
        // Fetch nav data
        this.navService.getNavData(this.navDataUrl).subscribe(
            results => {
                this.navData = results.data;
            },
            err => {
                console.error('Error retrieving nav data:', err);
            }
        );

        // Subscribe to configuration updates
        this.configService.onConfigChange()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(
                newConfig => {
                    this.onConfigChange(newConfig);
                },
                err => {
                    console.warn('error on subscription:', err);
                }
            );
    }

    public ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onConfigChange(newConfig: any) {
        // Do something with updated config
    }
}
