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

import { WebMessagesComponent } from './web-messages.component';


describe('WufWebMessagesComponent', () => {
    let component: WebMessagesComponent;
    let fixture: ComponentFixture<WebMessagesComponent>;

    const de: DebugElement = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                WebMessagesComponent
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
        fixture = TestBed.createComponent(WebMessagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

});
