import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDisplayComponent } from './kpi-display.component';
import { KpiValueComponent } from '../kpi-value/kpi-value.component';
import { KgDashboardService } from '../kg-dashboard.service';


describe('KgDashboardKpiComponent', () => {
    let component: KpiDisplayComponent;
    let fixture: ComponentFixture<KpiDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                KpiDisplayComponent,
                KpiValueComponent
            ],
            providers: [
                KgDashboardService
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
