/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { WufNavigationModule } from '@anviltech/wuf-ang-navigation';

import { NavigationComponent } from './navigation.component';


describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                NavigationComponent
            ],
            imports: [
                RouterTestingModule,
                WufNavigationModule
            ],
            providers: []
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
