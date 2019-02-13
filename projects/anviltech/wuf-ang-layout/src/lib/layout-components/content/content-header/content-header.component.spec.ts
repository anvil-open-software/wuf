/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WufContentHeaderComponent } from './content-header.component';
import { WufSidebarService } from '../../sidebar/sidebar.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


describe('WufContentHeaderComponent', () => {
    let component: WufContentHeaderComponent;
    let fixture: ComponentFixture<WufContentHeaderComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                WufContentHeaderComponent
            ],
            providers: [
                WufSidebarService
            ],
            imports: [
                RouterTestingModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufContentHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a content-header', () => {
        de = fixture.debugElement.query(By.css('.content-header'));
        expect(de).toBeTruthy();
    });

    it('should have a toolbar', () => {
        de = fixture.debugElement.query(By.css('wuf-toolbar'));
        expect(de).toBeTruthy();
    });

});
