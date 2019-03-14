/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WufLayoutModule } from '@anviltech/wuf-ang-layout';
import { WufLoginService, WufLoginModule } from '@anviltech/wuf-ang-login-animated';
import { WufLayoutService } from '@anviltech/wuf-ang-layout';

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
                WufLayoutModule,
                WufLoginModule
            ],
            providers: [
                WufLoginService,
                WufLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutBasicComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
