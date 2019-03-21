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

import { I18nAngularComponent } from './i18n-ang.component';
import { WufContentFooterService } from '@anviltech/wuf-ang-layout';


describe('I18nAngularComponent', () => {
    let component: I18nAngularComponent;
    let fixture: ComponentFixture<I18nAngularComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                I18nAngularComponent
            ],
            providers: [
                WufContentFooterService
            ],
            imports: [
                RouterTestingModule,
                FormsModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(I18nAngularComponent);
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have cardinality paragraph showing \'two wolves\'', async(() => {
        expect(compiled.querySelector('#example_cardinality').textContent).toContain('no wolves');
    }));

    it('should have gender paragraph', async(() => {
        expect(compiled.querySelector('#example_gender')).toBeTruthy();
    }));

    it('should have gender paragraph showing \'female.\'', async(() => {
        expect(compiled.querySelector('#example_gender').textContent).toContain('female.');
    }));

    it('should have pluralization paragraph', async(() => {
        expect(compiled.querySelector('#example_pluralization')).toBeTruthy();
    }));

    it('should have pluralization paragraph showing \'has no wolves.\'', async(() => {
        expect(compiled.querySelector('#example_pluralization').textContent).toContain('has no wolves.');
    }));


});
