/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { WufLayoutModule } from '@anviltech/wuf-ang-layout';
import { WufNavigationModule, WufNavigationService } from '@anviltech/wuf-ang-navigation';

import { LayoutMainComponent } from './main.component';
import { CustomMaterialModule } from '../../material.module';
import { ThemeListService } from '../../theme-list.service';


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
                CustomMaterialModule,
                HttpClientModule,
                BrowserAnimationsModule,
                WufLayoutModule,
                WufNavigationModule
            ],
            providers: [
                WufConfigurationService,
                WufNavigationService,
                ThemeListService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
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
});
