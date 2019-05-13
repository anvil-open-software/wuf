/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufGridsterComponent } from './gridster.component';
import { WufGridsterItem } from './gridster.interface';
import { WufGridsterService } from './gridster.service';


describe('WufGridsterComponent', () => {
    let component: WufGridsterComponent;
    let fixture: ComponentFixture<WufGridsterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WufGridsterComponent, WufGridsterItem],
            providers: [WufGridsterService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufGridsterComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
