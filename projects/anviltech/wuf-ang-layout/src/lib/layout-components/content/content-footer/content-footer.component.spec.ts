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


describe('WufContentFooterComponent', () => {
    let component: WufContentFooterComponent;
    let fixture: ComponentFixture<WufContentFooterComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
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
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
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
