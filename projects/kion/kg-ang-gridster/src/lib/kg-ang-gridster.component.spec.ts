/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgGridsterComponent } from './kg-ang-gridster.component';


describe('KgGridsterComponent', () => {
    let component: KgGridsterComponent;
    let fixture: ComponentFixture<KgGridsterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgGridsterComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgGridsterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
