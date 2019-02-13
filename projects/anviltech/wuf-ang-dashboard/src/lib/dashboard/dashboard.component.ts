/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnDestroy, OnInit, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WufDashboardService } from '../_internal/dashboard.service';


@Component({
    selector: 'wuf-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufDashboardComponent implements OnInit, OnDestroy, AfterViewInit {

    @Input() data?: any;
    @Input() color?: any;
    @Input() minKpiCount?: number = 4; // Minimum number of KPIs to show. Filler KPIs will be included to match this number.  Set to 0 to allow any number of KPIs.

    kpiSubscription: Subscription;
    kpiList: any = [];
    kpiFillerList: any = [];

    constructor(public dashboardService: WufDashboardService) {
    }

    ngOnInit() {
        // Subscribe to updates to the KPI list
        this.kpiSubscription = this.dashboardService.onKpiListUpdate().subscribe(
            (message: any) => {
                this.onKpiListUpdate(message);
            },
            (err: any) => {
                console.warn('error on kpi subscription:', err);
            }
        );
    }

    ngOnDestroy() {
        this.kpiSubscription.unsubscribe();
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        console.log('this.kpiList.length=' + this.kpiList.length);
        console.log('this.kpiFillerList.length=' + this.kpiFillerList.length);
        this.addFillerKpis();
    }

    addFillerKpis() {
        // Add empty KPIs so that a minimum of minKpiCount are shown.  This helps avoid weird looking layouts when there are only 1 or 2 KPIs.
        if (this.kpiList.length < this.minKpiCount) {
            for (let i = 0; i < this.minKpiCount - this.kpiList.length; i++) {
                // Add filler KPIs
                this.kpiFillerList.push({
                    value: '--',
                    label: '--',
                    disabled: true,
                    id: 'filler_' + i
                });
            }
        }
    }

    onKpiListUpdate(kpiList: any) {
        this.kpiList = kpiList;
    }

}
