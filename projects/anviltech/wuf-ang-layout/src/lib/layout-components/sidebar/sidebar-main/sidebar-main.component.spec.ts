/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WufSidebarMainComponent } from './sidebar-main.component';
import { WufSidebarService } from '../sidebar.service';
import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';


describe('WufSidebarMainComponent', () => {
    let component: WufSidebarMainComponent;
    let fixture: ComponentFixture<WufSidebarMainComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Stub WufSidebarService for test purposes
    let spy_serviceMethod: any;
    let sidebarService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [WufSidebarMainComponent],
            providers: [
                WufSidebarService,
                WufConfigurationService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufSidebarMainComponent);
        component = fixture.componentInstance;

        // Get WufSidebarService from the root injector
        sidebarService = fixture.debugElement.injector.get(WufSidebarService);

        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Service', () => {
        it('tracks if toggleSidebar() from service can be called using spy', () => {
            spy_serviceMethod = spyOn(sidebarService, 'toggleSidebar');

            expect(spy_serviceMethod).not.toHaveBeenCalled(); // Check if any calls have been made to mock service yet
            sidebarService.toggleSidebar(); // Make a call
            expect(spy_serviceMethod).toHaveBeenCalled(); // Now check again
        });
    });

    describe('Expand/Collapse sidebar', () => {
        it('should have a sidebar-wrap element', () => {
            expect(fixture.debugElement.query(By.css('#sidebar-wrap'))).toBeTruthy();
        });

        it('should not have classname "collapsed" before calling hideSidebar()', () => {
            expect(fixture.debugElement.query(By.css('#sidebar-wrap.collapsed'))).toBeFalsy();
        });
    });


});
