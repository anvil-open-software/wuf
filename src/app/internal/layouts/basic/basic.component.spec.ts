/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WufLayoutModule } from '@anviltech/wuf-ang-layout';
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
                WufLayoutModule
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
