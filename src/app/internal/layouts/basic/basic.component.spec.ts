import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KgLayoutModule } from '@kion/kg-ang-layout';
import { LayoutBasicComponent } from './basic.component';


describe('LayoutBasicComponent', () => {
    let component: LayoutBasicComponent;
    let fixture: ComponentFixture<LayoutBasicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutBasicComponent],
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule,
                KgLayoutModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
