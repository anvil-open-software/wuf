/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { KgSentenceCasePipe } from '@kion/kg-ang-utils';
import { KgSingleInputComponent } from './single-input.component';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';


describe('KgSingleInputComponent', () => {
    let component: KgSingleInputComponent;
    let fixture: ComponentFixture<KgSingleInputComponent>;
    let thisForm: FormGroup;
    let thisControl = new FormControl('');
    let thisModel = {name: 'Dematic'};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                FormsModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            declarations: [
                KgSingleInputComponent,
                KgSentenceCasePipe
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgSingleInputComponent);
        component = fixture.componentInstance;
        component.form = thisForm;
        component.control = thisControl;
        component.name = 'name';
        component.type = 'text';
        component.model = thisModel.name;
        component.validation = ['required'];

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('name must be SingleInputComponent', () => {
        expect(component.myName).toEqual('KgSingleInputComponent');
    });

    it('input should have a value Dematic', () => {

        // NgModel is asynchronous,
        // We have to use theFixture#whenStable method,
        // which gives us a promise to the stabilised state.
        fixture.whenStable().then(() => {
            let singleInput = fixture.debugElement.query(By.css('input'));
            expect(singleInput.nativeElement.value).toBe('Dematic');
        });
    });


});
