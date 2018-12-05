/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatMenuModule, MatTooltipModule } from '@angular/material';
import { KgConfigurationService } from '@kion/kg-ang-configuration';

import { KgNavigationComponent } from './navigation.component';
import { KgNavigationLinkComponent } from '../navigation-link/navigation-link.component';
import { RouterTestingModule } from '@angular/router/testing';
import { KgNavigationService } from '../navigation.service';


describe('KgNavigationComponent', () => {
    let component: KgNavigationComponent;
    let fixture: ComponentFixture<KgNavigationComponent>;

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
                KgNavigationComponent,
                KgNavigationLinkComponent
            ],
            providers: [
                KgNavigationService,
                KgConfigurationService
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
