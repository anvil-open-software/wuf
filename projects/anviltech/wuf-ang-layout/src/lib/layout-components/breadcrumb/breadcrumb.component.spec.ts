/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { WufBreadcrumbComponent } from './breadcrumb.component';


describe('WufBreadcrumbComponent', () => {
    let component: WufBreadcrumbComponent;
    let fixture: ComponentFixture<WufBreadcrumbComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [WufBreadcrumbComponent],
            providers: []
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufBreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

});
