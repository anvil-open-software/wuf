/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

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
                RouterTestingModule,
                FormsModule,
                NgxMdModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevAngularAngularComponentsIntroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

});
