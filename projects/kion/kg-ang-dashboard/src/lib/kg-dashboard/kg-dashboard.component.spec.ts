import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgDashboardComponent } from './kg-dashboard.component';
import { KpiDisplayComponent } from '../_internal/kpi/kpi-display.component';
import { KgDashboardService } from '../_internal/kg-dashboard.service';
import { KpiValueComponent } from '../_internal/kpi-value/kpi-value.component';


describe('KgDashboardComponent', () => {
    let component: KgDashboardComponent;
    let fixture: ComponentFixture<KgDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                KgDashboardComponent,
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
        fixture = TestBed.createComponent(KgDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
