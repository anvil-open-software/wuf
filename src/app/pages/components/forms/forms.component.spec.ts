/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { FormsComponent } from './forms.component';


describe('FormsComponent', () => {
    let component: FormsComponent;
    let fixture: ComponentFixture<FormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                MatAutocompleteModule,
                MatChipsModule,
                MatDatepickerModule,
                MatNativeDateModule
            ],
            declarations: [FormsComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
