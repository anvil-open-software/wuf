/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { WufLoginService, WufLoginModule } from '@anviltech/wuf-ang-login-animated';
import { WufLayoutService, WufLayoutModule } from '@anviltech/wuf-ang-layout';
import { WufNavigationModule, WufNavigationService } from '@anviltech/wuf-ang-navigation';
import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
import { WufSidebarService } from '@anviltech/wuf-ang-layout';

import { LayoutMainComponent } from './main.component';
import { ThemeListService } from '../../theme-list.service';
import { SharedModule } from '../../shared.module';


describe('LayoutMainComponent', () => {
    let component: LayoutMainComponent;
    let fixture: ComponentFixture<LayoutMainComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutMainComponent],
            imports: [
                RouterTestingModule,
                SharedModule.forRoot(),
                HttpClientModule,
                BrowserAnimationsModule,
                WufLayoutModule,
                WufNavigationModule,
                WufLoginModule,
                WufDrawerModule,
                HttpClientTestingModule // Mock backend for navigation service
            ],
            providers: [
                WufConfigurationService,
                WufNavigationService,
                ThemeListService,
                WufLoginService,
                WufLayoutService,
                WufSidebarService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutMainComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    describe('Layout elements', () => {
        it('should have a wuf-view-main element', () => {
            de = fixture.debugElement.query(By.css('wuf-view-main'));
            el = de.nativeElement;
            expect(de).toBeTruthy();
        });

        it('should have a router-outlet', () => {
            de = fixture.debugElement.query(By.css('router-outlet'));
            el = de.nativeElement;
            expect(de).toBeTruthy();
        });
    });

    it(`should issue a request for navigation`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            // 2. inject HttpClient and HttpTestingController into the test
            inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
                // 3. Verify that only a single request has been issued for this URL
                backend.expectOne({
                    url: '/api/navigation',
                    method: 'GET'
                });
            })
        )
    );
});
