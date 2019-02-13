/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WufContentFooterComponent } from './content-footer.component';
import { WufContentFooterService } from './content-footer.service';

import { WufCustomMatchers } from '@anviltech/wuf-ang-utils';


describe('WufContentFooterComponent', () => {
    let component: WufContentFooterComponent;
    let fixture: ComponentFixture<WufContentFooterComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        jasmine.addMatchers(WufCustomMatchers);

        TestBed.configureTestingModule({
            declarations: [
                WufContentFooterComponent
            ],
            providers: [
                WufContentFooterService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufContentFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a main-footer-wrap', () => {
        de = fixture.debugElement.query(By.css('.main-footer-wrap'));
        expect(de).toBeTruthy();
    });

    // it('should not be active by default', () => {
    // 	de = fixture.debugElement.query(By.css('.main-footer-wrap'));
    // 	el = de.nativeElement;
    // 	expect(el).not.toHaveCssClass('active');
    // });
});
