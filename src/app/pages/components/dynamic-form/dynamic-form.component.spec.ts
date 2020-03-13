import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxMdModule } from 'ngx-md';

import { DynamicFormComponent } from './dynamic-form.component';
import { WufContentFooterService, WufLayoutModule } from '@anviltech/wuf-ang-layout';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustomMaterialModule } from '../../../_internal/material.module';
import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
import { WufDynamicFormModule } from '@anviltech/wuf-ang-dynamic-form';


// Create a factory for the translate loader
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

describe('DynamicFormComponent', () => {
    let component: DynamicFormComponent;
    let fixture: ComponentFixture<DynamicFormComponent>;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [DynamicFormComponent],
            providers: [
                WufContentFooterService,
                TranslateService
            ],
            imports: [
                NgxMdModule,
                HttpClientTestingModule,
                RouterTestingModule,
                CustomMaterialModule.forRoot(),
                WufDynamicFormModule.forRoot(),
                ReactiveFormsModule,
                NoopAnimationsModule,
                WufLayoutModule,
                WufDrawerModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    },
                    isolate: false
                })
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
        component.mergedFormInputs = formBuilder.group({
            chain: ['chain', Validators.required],
            ip: [
                '',
                Validators.required
            ],
            action: ['action', Validators.required]
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
