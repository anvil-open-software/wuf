import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DynamicFormTestComponent } from './dynamic-form-test.component';
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

describe('DynamicFormTestComponent', () => {
    let component: DynamicFormTestComponent;
    let fixture: ComponentFixture<DynamicFormTestComponent>;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [DynamicFormTestComponent],
            providers: [
                WufContentFooterService,
                TranslateService
            ],
            imports: [
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
        fixture = TestBed.createComponent(DynamicFormTestComponent);
        component = fixture.componentInstance;
        component.dynamicSourceForm = formBuilder.group({
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
