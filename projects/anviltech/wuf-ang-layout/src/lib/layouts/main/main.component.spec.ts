/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WufViewMainComponent } from './main.component';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';

import { WufSidebarService } from '../../layout-components/sidebar/sidebar.service';
import { WufSidebarMainComponent } from '../../layout-components/sidebar/sidebar-main/sidebar-main.component';
import { WufLayoutService } from '../layout.service';


describe('WufViewMainComponent', () => {
    let component: WufViewMainComponent;
    let fixture: ComponentFixture<WufViewMainComponent>;

    let sidebarService: any;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                HttpClientTestingModule
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                WufViewMainComponent,
                WufSidebarMainComponent
            ],
            providers: [
                WufSidebarService,
                WufConfigurationService,
                WufLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufViewMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        sidebarService = WufSidebarService;
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Layout elements', () => {

        it('should have a page element', () => {
            de = fixture.debugElement.query(By.css('.page'));
            expect(de).toBeTruthy();
        });

        it('should have a app-level header', () => {
            de = fixture.debugElement.query(By.css('.page .page-row .main-header wuf-toolbar'));
            el = de.nativeElement;
            expect(de).toBeTruthy();
        });

        it('should have a main content area', () => {
            de = fixture.debugElement.query(By.css('.page .page-row .main-wrap .main'));
            expect(de).toBeTruthy();
        });

        describe('Sidebar', () => {
            it('should have a sidebar', () => {
                de = fixture.debugElement.query(By.css('.page .page-row wuf-sidebar'));
                expect(de).toBeTruthy();
            });

            it('should have a sidebar toggler', () => {
                de = fixture.debugElement.query(By.css('.page .page-row .main-header wuf-toolbar .sidebar-toggler'));
                el = de.nativeElement;
                expect(de).toBeTruthy();
            });
        });

        describe('Logo', () => {
            it('should have logo', () => {
                expect(fixture.debugElement.query(By.css('.header-logo'))).toBeTruthy();
            });
        });

    });
});
