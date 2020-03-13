import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufDynamicFormComponent } from './dynamic-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WufDynamicFieldDirective } from '../../directives/dynamic-field.directive';
import { FormBuilder, FormGroup } from '@angular/forms';


describe('WufDynamicFormComponent', () => {
    let component: WufDynamicFormComponent;
    let fixture: ComponentFixture<WufDynamicFormComponent>;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WufDynamicFormComponent,
                WufDynamicFieldDirective
            ],
            providers: [
                { provide: FormBuilder, useValue: formBuilder }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                ReactiveFormsModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WufDynamicFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
