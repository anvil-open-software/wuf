/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgKpiComponent } from './kg-kpi.component';
import { KgDashboardService } from '../_internal/kg-dashboard.service';


describe('KgDashboardKpiComponent', () => {
    let component: KgKpiComponent;
    let fixture: ComponentFixture<KgKpiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgKpiComponent],
            providers: [KgDashboardService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgKpiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
