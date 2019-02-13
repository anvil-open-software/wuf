/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { WufDashboardService } from '../_internal/dashboard.service';


@Component({
    selector: 'wuf-kpi',
    templateUrl: './kpi.component.html',
    styleUrls: ['./kpi.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufKpiComponent implements OnInit, OnDestroy {

    @Input() value?: any;
    @Input() label: string;
    @Input() active: boolean = false;
    @Input() padding?: string;
    @Input() color?: string;

    id: string;

    constructor(public dashboardService: WufDashboardService) {
    }

    ngOnInit() {
        // Create a new KPI object in dashboard service.
        this.id = this.dashboardService.addNewKpi({
            value: this.value,
            label: this.label,
            color: this.color
        });
    }

    ngOnDestroy() {
        this.dashboardService.destroy();
    }

}
