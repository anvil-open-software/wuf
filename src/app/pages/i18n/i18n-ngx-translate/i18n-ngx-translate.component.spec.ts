/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { I18nNgxTranslateComponent } from './i18n-ngx-translate.component';
import { WufContentFooterService } from '@anviltech/wuf-ang-layout';

// Create a factory for the translate loader
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


describe('I18nNgxTranslateComponent', () => {
    let component: I18nNgxTranslateComponent;
    let fixture: ComponentFixture<I18nNgxTranslateComponent>;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                I18nNgxTranslateComponent
            ],
            providers: [
                WufContentFooterService,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpClientTestingModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    },
                    isolate: false
                })
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(I18nNgxTranslateComponent);
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

});
