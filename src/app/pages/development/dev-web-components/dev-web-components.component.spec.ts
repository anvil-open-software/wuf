/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { NgxMdModule } from 'ngx-md';

import { DevWebAngularComponentsIntroComponent } from './dev-web-components.component';


describe('DevWebAngularComponentsIntroComponent', () => {
    let component: DevWebAngularComponentsIntroComponent;
    let fixture: ComponentFixture<DevWebAngularComponentsIntroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                DevWebAngularComponentsIntroComponent
            ],
            providers: [],
            imports: [
                RouterTestingModule,
                FormsModule,
                NgxMdModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevWebAngularComponentsIntroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

});
