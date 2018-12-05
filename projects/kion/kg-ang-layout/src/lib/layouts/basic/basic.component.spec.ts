/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgViewBasicComponent } from './basic.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KgLayoutService } from '../layout.service';


describe('KgViewBasicComponent', () => {
    let component: KgViewBasicComponent;
    let fixture: ComponentFixture<KgViewBasicComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [KgViewBasicComponent],
            providers: [
                KgLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgViewBasicComponent);
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
