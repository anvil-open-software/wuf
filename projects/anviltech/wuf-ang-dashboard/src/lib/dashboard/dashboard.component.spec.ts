/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufDashboardComponent } from './dashboard.component';
import { KpiDisplayComponent } from '../_internal/kpi/kpi-display.component';
import { WufDashboardService } from '../_internal/dashboard.service';
import { KpiValueComponent } from '../_internal/kpi-value/kpi-value.component';


describe('WufDashboardComponent', () => {
    let component: WufDashboardComponent;
    let fixture: ComponentFixture<WufDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WufDashboardComponent,
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
        fixture = TestBed.createComponent(WufDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
