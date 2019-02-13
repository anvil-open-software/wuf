/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatMenuModule, MatTooltipModule } from '@angular/material';
import { WufSidebarService } from '@anviltech/wuf-ang-layout';

import { WufNavigationLinkComponent } from './navigation-link.component';


describe('WufNavigationLinkComponent', () => {
    let component: WufNavigationLinkComponent;
    let fixture: ComponentFixture<WufNavigationLinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                HttpClientTestingModule,
                MatTooltipModule,
                MatMenuModule
            ],
            declarations: [
                WufNavigationLinkComponent
            ],
            providers: [
                WufSidebarService
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufNavigationLinkComponent);
        component = fixture.componentInstance;
        component.link = '/navlink';
        component.label = '"nav link text"';
        component.icon = '&#xE88A;';
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    it('label should be "nav link text"', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').textContent).toContain('"nav link text"');
    });

    it('url should be /navlink', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').getAttribute('href')).toContain('/navlink');
    });


    it('icon should be ', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a i.material-icons').textContent).toContain('');
    });
});
