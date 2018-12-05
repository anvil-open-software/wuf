/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgContentMainComponent } from './content-main.component';


describe('KgContentMainComponent', () => {
    let component: KgContentMainComponent;
    let fixture: ComponentFixture<KgContentMainComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgContentMainComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgContentMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a main-content-wrap element', () => {
        de = fixture.debugElement.query(By.css('.content-wrap'));

        expect(de).toBeTruthy();
    });
});
