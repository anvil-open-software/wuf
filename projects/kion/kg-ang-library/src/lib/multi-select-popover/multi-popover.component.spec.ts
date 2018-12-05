/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { KgMultiPopoverComponent } from './multi-popover.component';
import { MatButtonModule } from '@angular/material';


describe('MultiplePopoverComponent', () => {
    let component: KgMultiPopoverComponent;
    let fixture: ComponentFixture<KgMultiPopoverComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                FormsModule,
                MatButtonModule
            ],
            declarations: [
                KgMultiPopoverComponent
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgMultiPopoverComponent);
        component = fixture.componentInstance;
        component.items = [{name: 'Dematic', id: '1'},
            {name: 'KION', id: '2'}];

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('name must be KgNavigationLinkComponent', () => {
        expect(component.myName).toEqual('KgMultiPopoverComponent');
    });


    it('popover content should have Dematic', () => {
        let popover = fixture.debugElement;
        expect(popover.queryAll(By.css('label'))[0].nativeElement.textContent).toContain('Dematic');

    });

    it('popover content should have KION', () => {
        let popover = fixture.debugElement;
        expect(popover.queryAll(By.css('label'))[1].nativeElement.textContent).toContain('KION');

    });


});
