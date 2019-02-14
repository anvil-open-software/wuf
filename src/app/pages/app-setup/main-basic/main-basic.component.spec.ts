/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LayoutMainBasicComponent } from './main-basic.component';


describe('LayoutMainBasicComponent', () => {
    let component: LayoutMainBasicComponent;
    let fixture: ComponentFixture<LayoutMainBasicComponent>;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                LayoutMainBasicComponent
            ],
            providers: [],
            imports: [
                RouterTestingModule,
                FormsModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutMainBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // describe('Sanity check', () => {
    //     it('should create', () => {
    //         expect(component).toBeTruthy();
    //     });
    // });

});
