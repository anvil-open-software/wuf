import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KgLoginComponent } from './kg-login.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { KgLoginService } from './kg-login.service';
import { KgLayoutService } from '@kion/kg-ang-layout';


describe('KgLoginComponent', () => {
    let component: KgLoginComponent;
    let fixture: ComponentFixture<KgLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgLoginComponent],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatButtonModule
            ],
            providers: [
                KgLoginService,
                KgLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
