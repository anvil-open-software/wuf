import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ColorsComponent } from './colors.component';


describe('ColorsComponent', () => {
    let component: ColorsComponent;
    let fixture: ComponentFixture<ColorsComponent>;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                ColorsComponent
            ],
            providers: [],
            imports: [
                RouterTestingModule,
                FormsModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

});
