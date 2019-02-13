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

import { I18nComponent } from './i18n.component';
import { WufContentFooterService } from '@anviltech/wuf-ang-layout';


describe('I18nComponent', () => {
    let component: I18nComponent;
    let fixture: ComponentFixture<I18nComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                I18nComponent
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
        fixture = TestBed.createComponent(I18nComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    it('should have cardinality paragraph', async(() => {
        de = fixture.debugElement.query(By.css('#example_cardinality'));
        el = de.nativeElement;
        expect(el).toBeTruthy();
    }));

    it('should have cardinality paragraph showing \'two wolves\'', async(() => {
        de = fixture.debugElement.query(By.css('#example_cardinality'));
        el = de.nativeElement;
        expect(el.textContent).toContain('no wolves');
    }));

    it('should have gender paragraph', async(() => {
        de = fixture.debugElement.query(By.css('#example_gender'));
        el = de.nativeElement;
        expect(el).toBeTruthy();
    }));

    it('should have gender paragraph showing \'female.\'', async(() => {
        de = fixture.debugElement.query(By.css('#example_gender'));
        el = de.nativeElement;
        expect(el.textContent).toContain('female.');
    }));

    it('should have pluralization paragraph', async(() => {
        de = fixture.debugElement.query(By.css('#example_pluralization'));
        el = de.nativeElement;
        expect(el).toBeTruthy();
    }));

    it('should have pluralization paragraph showing \'has no wolves.\'', async(() => {
        de = fixture.debugElement.query(By.css('#example_pluralization'));
        el = de.nativeElement;
        expect(el.textContent).toContain('has no wolves.');
    }));


});
