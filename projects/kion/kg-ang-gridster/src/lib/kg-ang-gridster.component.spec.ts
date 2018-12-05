import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgGridsterComponent } from './kg-ang-gridster.component';


describe('KgGridsterComponent', () => {
    let component: KgGridsterComponent;
    let fixture: ComponentFixture<KgGridsterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgGridsterComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgGridsterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
