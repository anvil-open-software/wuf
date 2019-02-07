/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WufLoginComponent } from './login.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { WufLoginService } from './login.service';
import { WufLayoutService } from '@anviltech/wuf-ang-layout';


describe('WufLoginComponent', () => {
    let component: WufLoginComponent;
    let fixture: ComponentFixture<WufLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufLoginComponent],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatButtonModule
            ],
            providers: [
                WufLoginService,
                WufLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
