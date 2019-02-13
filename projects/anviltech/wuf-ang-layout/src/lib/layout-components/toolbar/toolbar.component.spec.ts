/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WufToolbarComponent } from './toolbar.component';


describe('WufToolbarComponent', () => {
    let component: WufToolbarComponent;
    let fixture: ComponentFixture<WufToolbarComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Stub WufSidebarService for test purposes
    let spy_serviceMethod: any;
    let sidebarService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufToolbarComponent],
            providers: []
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufToolbarComponent);
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
