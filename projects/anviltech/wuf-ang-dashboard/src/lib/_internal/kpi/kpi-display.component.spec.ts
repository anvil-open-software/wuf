/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDisplayComponent } from './kpi-display.component';
import { KpiValueComponent } from '../kpi-value/kpi-value.component';
import { WufDashboardService } from '../dashboard.service';


describe('WufDashboardKpiComponent', () => {
    let component: KpiDisplayComponent;
    let fixture: ComponentFixture<KpiDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                KpiDisplayComponent,
                KpiValueComponent
            ],
            providers: [
                WufDashboardService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KpiDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
