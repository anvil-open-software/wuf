/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VaadinGridComponent } from './vaadin-grid.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomMaterialModule } from '../../../internal/material.module';


describe('VaadinGridComponent', () => {
    let component: VaadinGridComponent;
    let fixture: ComponentFixture<VaadinGridComponent>;
    // let comp:    CompositeComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                VaadinGridComponent
            ],
            imports: [
                RouterTestingModule,
                BrowserDynamicTestingModule,
                FormsModule,
                ReactiveFormsModule,
                CustomMaterialModule
            ],
            providers: []
        });

        // create component and test fixture
        fixture = TestBed.createComponent(VaadinGridComponent);

        // get test component from the fixture
        component = fixture.debugElement.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
