/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufKpiComponent } from './kpi.component';
import { WufDashboardService } from '../_internal/dashboard.service';


describe('WufDashboardKpiComponent', () => {
    let component: WufKpiComponent;
    let fixture: ComponentFixture<WufKpiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufKpiComponent],
            providers: [WufDashboardService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufKpiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
