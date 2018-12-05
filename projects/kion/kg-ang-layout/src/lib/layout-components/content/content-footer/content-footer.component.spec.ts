/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgContentFooterComponent } from './content-footer.component';
import { KgContentFooterService } from './content-footer.service';

import { KgCustomMatchers } from '@kion/kg-ang-utils';


describe('KgContentFooterComponent', () => {
    let component: KgContentFooterComponent;
    let fixture: ComponentFixture<KgContentFooterComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        jasmine.addMatchers(KgCustomMatchers);

        TestBed.configureTestingModule({
            declarations: [
                KgContentFooterComponent
            ],
            providers: [
                KgContentFooterService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgContentFooterComponent);
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
