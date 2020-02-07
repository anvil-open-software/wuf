/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WufSentenceCasePipe } from '@anviltech/wuf-ang-utils';
import { UtilitiesComponent } from './utilities.component';
import { NgxMdModule } from 'ngx-md';


describe('UtilitiesComponent', () => {
    let component: UtilitiesComponent;
    let fixture: ComponentFixture<UtilitiesComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                UtilitiesComponent,
                WufSentenceCasePipe
            ],
            providers: [],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                NgxMdModule
            ]
        })
        .compileComponents();
    });

    beforeEach(async () => {
        fixture = await TestBed.createComponent(UtilitiesComponent);
        await fixture.detectChanges();
        component = await fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create the \'app-utilities\' component attributes', () => {
        expect(component.string_1).toBe('abc');
        expect(component.string_2).toBe('abc def');
        expect(component.string_3).toBe('Abc');
        expect(component.string_4).toBe('aBc');
        expect(component.string_5).toBe('123');
    });

    it('should have a \'capitalize-pipe-examples\' element', async(() => {
        de = fixture.debugElement.query(By.css('#capitalize-pipe-examples'));
        el = de.nativeElement;
        expect(el).toBeTruthy();
    }));

    it('should have a \'capitalize-pipe\' header', async(() => {
        de = fixture.debugElement.query(By.css('#capitalize-pipe-header'));
        el = de.nativeElement;
        expect(el.textContent).toContain('Capitalize Pipe');
    }));

    it('should have 5 \'capitalize-pipe\' paragraphs', async(() => {
        const elements = fixture.debugElement.queryAll(By.css('#capitalize-pipe-examples p'));
        expect(elements.length).toBe(5);
    }));

    it('should have first paragraph be a conversion of \`abc\' to \'Abc\'', async(() => {
        const elements = fixture.debugElement.queryAll(By.css('#capitalize-pipe-examples p span'));
        el = elements[0].nativeElement;
        expect(el.textContent).toContain('Abc');
    }));

    it('should have first paragraph be a conversion of \`abc def\' to \'Abc Def\'', async(() => {
        const elements = fixture.debugElement.queryAll(By.css('#capitalize-pipe-examples p span'));
        el = elements[1].nativeElement;
        expect(el.textContent).toContain('Abc Def');
    }));

    it('should have first paragraph be a conversion of \`Abc\' to \'Abc\'', async(() => {
        const elements = fixture.debugElement.queryAll(By.css('#capitalize-pipe-examples p span'));
        el = elements[2].nativeElement;
        expect(el.textContent).toContain('Abc');
    }));

    it('should have first paragraph be a conversion of \`aBc\' to \'Abc\'', async(() => {
        const elements = fixture.debugElement.queryAll(By.css('#capitalize-pipe-examples p span'));
        el = elements[3].nativeElement;
        expect(el.textContent).toContain('Abc');
    }));

    it('should have first paragraph be a conversion of \`123\' to \'123\'', async(() => {
        const elements = fixture.debugElement.queryAll(By.css('#capitalize-pipe-examples p span'));
        el = elements[4].nativeElement;
        expect(el.textContent).toContain('123');
    }));
});
