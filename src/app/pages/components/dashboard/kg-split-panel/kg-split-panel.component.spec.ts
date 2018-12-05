/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgSplitPanelComponent } from './kg-split-panel.component';


describe('KgSplitPanelComponent', () => {
    let component: KgSplitPanelComponent;
    let fixture: ComponentFixture<KgSplitPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KgSplitPanelComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgSplitPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
