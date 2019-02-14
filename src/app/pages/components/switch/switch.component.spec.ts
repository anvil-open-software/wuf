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

import { SwitchComponent } from './switch.component';


describe('SwitchComponent', () => {
    let component: SwitchComponent;
    let fixture: ComponentFixture<SwitchComponent>;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                SwitchComponent
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
        fixture = TestBed.createComponent(SwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // describe('Sanity check', () => {
    //     it('should create', () => {
    //         expect(component).toBeTruthy();
    //     });
    // });

    describe('Switch component', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should have a switch component', () => {
            let el = fixture.debugElement.query(By.css('mat-slide-toggle'));
            expect(el).toBeTruthy();
        });

    });


});
