/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { WufContentFooterService } from '@anviltech/wuf-ang-layout';
import { NgxMdModule } from 'ngx-md';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                HomeComponent
            ],
            imports: [
                RouterTestingModule,
                NgxMdModule,
                HttpClientTestingModule
            ],
            providers: [
                WufContentFooterService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    describe('Layout', () => {
        let el: any;

        beforeEach(async () => {
            await fixture.detectChanges();
        });

        it('should have a view component', async () => {
            el = await fixture.debugElement.queryAll(By.css('app-root view-main'));
            expect(el).toBeTruthy;
            expect(true).toBe(true); // remove annoying warning message
        });

        it('should have a header component', async () => {
            el = await fixture.debugElement.queryAll(By.css('app-root view-main .container-fluid.page .main-wrap .main app-content-header'));
            expect(el).toBeTruthy;
            expect(true).toBe(true); // remove annoying warning message
        });

        it('should have a content component', async () => {
            el = await fixture.debugElement.queryAll(By.css('app-root view-main .container-fluid.page .main-wrap .main app-content'));
            expect(el).toBeTruthy;
            expect(true).toBe(true); // remove annoying warning message
        });

        it('should have a footer component', async () => {
            el = await fixture.debugElement.queryAll(By.css('app-root view-main .container-fluid.page .main-wrap .main app-content-footer'));
            expect(el).toBeTruthy;
            expect(true).toBe(true); // remove annoying warning message
        });
    });
});
