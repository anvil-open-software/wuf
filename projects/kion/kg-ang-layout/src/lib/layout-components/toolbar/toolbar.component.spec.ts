/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgToolbarComponent } from './toolbar.component';


describe('KgToolbarComponent', () => {
    let component: KgToolbarComponent;
    let fixture: ComponentFixture<KgToolbarComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Stub KgSidebarService for test purposes
    let spy_serviceMethod: any;
    let sidebarService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgToolbarComponent],
            providers: []
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Slots', () => {
        it('should have two slots for content', () => {
            //TODO
        });
    });

});
