/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatMenuModule, MatTooltipModule } from '@angular/material';
import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';

import { WufNavigationComponent } from './navigation.component';
import { WufNavigationLinkComponent } from '../navigation-link/navigation-link.component';
import { WufNavigationService } from '../navigation.service';


describe('WufNavigationComponent', () => {
    let component: WufNavigationComponent;
    let fixture: ComponentFixture<WufNavigationComponent>;

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
                WufNavigationComponent,
                WufNavigationLinkComponent
            ],
            providers: [
                WufNavigationService,
                WufConfigurationService
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
