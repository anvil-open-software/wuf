/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WufSidebarFooterComponent } from './sidebar-footer.component';
import { WufSidebarService } from '../sidebar.service';
import { MatTooltipModule } from '@angular/material';


describe('WufSidebarFooterComponent', () => {
    let component: WufSidebarFooterComponent;
    let fixture: ComponentFixture<WufSidebarFooterComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Store the service and the httpmock in variables
    let service: WufSidebarService;
    let httpMock: HttpTestingController;
    let testDataUrl: string = '/api/footer'; // This can be any URL since we will be intercepting it below;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // Need to import the RouterTestingModule to make the template able to recognize the router attributes
                RouterTestingModule,
                MatTooltipModule,

                // Import HttpClient testing modules to mock requests
                HttpClientTestingModule
            ],
            declarations: [WufSidebarFooterComponent],
            providers: [WufSidebarService]
        });
        // .compileComponents();

        service = TestBed.get(WufSidebarService);
        httpMock = TestBed.get(HttpTestingController);
    }));

    // Verify that no more requests remain to be consumed
    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufSidebarFooterComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Footer', () => {
        it('should have a sidebar footer element', () => {
            expect(fixture.debugElement.query(By.css('.sidebar-footer-wrap'))).toBeTruthy();
        });
    });

    describe('Service', () => {
        it('should get footer item data from service', () => {

            // Consume the service we want to test.  We are not going to be using the real HttpClient but a mock of that provided by Angular.
            service.getSidebarFooterData(testDataUrl).subscribe((data: any) => {
                // Expect correct, but faked, results
                expect(data.items.length).toBe(3);
                expect(data.items[0].link).toBe('/help');
                expect(data.items[0].tooltip).toBe('Help');
                expect(data.items[0].icon).toBe('help');
                expect(data.items[0].id).toBe('footer-help');
            });

            // Now we can tell httpMock what kind of request we expect (i.e., GET) and toward which URL
            const req = httpMock.expectOne(testDataUrl, 'fake call to api');
            expect(req.request.method).toBe('GET');

            // Set up the dummy data and flush it through the request made above
            req.flush({
                    'items':
                        [
                            {
                                'link': '/help',
                                'tooltip': 'Help',
                                'icon': 'help',
                                'id': 'footer-help'
                            },
                            {
                                'link': '/account',
                                'tooltip': 'Account',
                                'icon': 'person',
                                'id': 'footer-account'
                            },
                            {
                                'link': '/settings',
                                'tooltip': 'Settings',
                                'icon': 'settings',
                                'id': 'footer-settings'
                            }
                        ]
                }
            );

            // Make sure there are no other outstanding http calls
            httpMock.verify();

        });

    });

});
