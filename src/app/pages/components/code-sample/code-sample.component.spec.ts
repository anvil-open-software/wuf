/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxMdModule } from 'ngx-md';

import { CodeSampleComponent } from './code-sample.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CodeSampleComponent', () => {
    let component: CodeSampleComponent;
    let fixture: ComponentFixture<CodeSampleComponent>;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                CodeSampleComponent
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
        fixture = TestBed.createComponent(CodeSampleComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

});
