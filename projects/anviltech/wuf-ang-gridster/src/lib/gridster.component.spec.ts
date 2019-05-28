/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA }  from '@angular/core';

import { WufGridsterComponent } from './gridster.component';
import { WufGridsterItem } from './gridster.interface';
import { WufGridsterService } from './gridster.service';
import { MatMenuModule, MatAutocompleteModule } from '@angular/material';


describe('WufGridsterComponent', () => {
    let component: WufGridsterComponent;
    let fixture: ComponentFixture<WufGridsterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufGridsterComponent],
            imports: [
                MatMenuModule,
                MatAutocompleteModule
            ],
            providers: [WufGridsterService],
            schemas: [
              CUSTOM_ELEMENTS_SCHEMA,
              NO_ERRORS_SCHEMA
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufGridsterComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        component.items;
        expect(component).toBeTruthy();
    });
});
