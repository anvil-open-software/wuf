/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NgxMdModule } from 'ngx-md';

import { DevAngularAngularComponentsIntroComponent } from './dev-angular-components.component';


describe('DevAngularAngularComponentsIntroComponent', () => {
    let component: DevAngularAngularComponentsIntroComponent;
    let fixture: ComponentFixture<DevAngularAngularComponentsIntroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                DevAngularAngularComponentsIntroComponent
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
        fixture = TestBed.createComponent(DevAngularAngularComponentsIntroComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

});
