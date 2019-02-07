/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WufViewBasicComponent } from './basic.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WufLayoutService } from '../layout.service';


describe('WufViewBasicComponent', () => {
    let component: WufViewBasicComponent;
    let fixture: ComponentFixture<WufViewBasicComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [WufViewBasicComponent],
            providers: [
                WufLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufViewBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Layout elements', () => {

        it('should have a container element', () => {
            de = fixture.debugElement.query(By.css('.container-fluid'));
            expect(de).toBeTruthy();
        });

    });
});
