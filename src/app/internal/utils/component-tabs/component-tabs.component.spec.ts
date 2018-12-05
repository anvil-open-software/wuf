/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentTabsComponent } from './component-tabs.component';
import { CustomMaterialModule } from '../../material.module';


describe('ComponentTabsComponent', () => {
    let component: ComponentTabsComponent;
    let fixture: ComponentFixture<ComponentTabsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentTabsComponent],
            imports: [
                BrowserAnimationsModule,
                CustomMaterialModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
