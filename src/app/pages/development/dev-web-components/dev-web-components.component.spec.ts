/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
                FormsModule,
                NgxMdModule,
                HttpClientTestingModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevWebAngularComponentsIntroComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

});
