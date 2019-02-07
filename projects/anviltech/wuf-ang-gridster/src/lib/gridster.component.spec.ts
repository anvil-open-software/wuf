/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufGridsterComponent } from './gridster.component';


describe('WufGridsterComponent', () => {
    let component: WufGridsterComponent;
    let fixture: ComponentFixture<WufGridsterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufGridsterComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufGridsterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
