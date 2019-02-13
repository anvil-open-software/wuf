/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufSplitPanelComponent } from './wuf-split-panel.component';


describe('WufSplitPanelComponent', () => {
    let component: WufSplitPanelComponent;
    let fixture: ComponentFixture<WufSplitPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufSplitPanelComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufSplitPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
