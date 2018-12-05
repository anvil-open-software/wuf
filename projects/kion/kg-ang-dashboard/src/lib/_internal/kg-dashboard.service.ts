/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


export interface kpi {
    value: any;
    label: string;
    color?: string;
    id: string;
    disabled?: boolean;
}

@Injectable()
export class KgDashboardService {

    kpiData: any = [];

    private kpiSubject = new BehaviorSubject<any>(this.kpiData);

    activeKpiId: string = '';

    constructor() {
    }

    addNewKpi(obj: any) {
        let newKpi: kpi = {
            value: obj.value,
            label: obj.label,
            color: obj.color,
            id: this.kpiData.length.toString() // provide a unique ID for this KPI
        };

        // make the first KPI the active KPI
        if (!this.kpiData.length) {
            this.activeKpiId = newKpi.id;
        }

        this.kpiData.push(newKpi);
        this.kpiSubject.next(this.kpiData);

        // return the ID so it can be used in markup
        return newKpi.id;
    }

    onKpiListUpdate(): Observable<any> {
        // Allow other components to subscribe to the toggle event
        return this.kpiSubject.asObservable();
    }

    setActive(id: string) {
        this.activeKpiId = id;
    }

    destroy() {
        this.kpiData = [];
        this.activeKpiId = '';
    }

}
