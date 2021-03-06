/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { WufLoginService } from '@anviltech/wuf-ang-login-animated';
import { WufLayoutService } from '@anviltech/wuf-ang-layout';
import { NgxMdModule } from 'ngx-md';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                NgxMdModule,
                HttpClientTestingModule
            ],
            declarations: [LoginComponent],
            providers: [
                WufLoginService,
                WufLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
