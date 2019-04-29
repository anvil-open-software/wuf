/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { WufConfigurationModule, WufConfigurationService } from '@anviltech/wuf-ang-configuration';
import { WufLayoutModule, WufLayoutService } from '@anviltech/wuf-ang-layout';
import { WufUtilsModule } from '@anviltech/wuf-ang-utils';
import { WufLoginService } from '@anviltech/wuf-ang-login-animated';

import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxMdModule } from 'ngx-md';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { RoutesModule } from './app-routes';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './_internal/services/user.service';

// Create a factory for the translate loader
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


describe('AppComponent', () => {
    let fake_routes: Routes = [
        {path: '**', component: HomeComponent}
    ];
    let fixture: ComponentFixture<AppComponent>;
    let comp: AppComponent;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                AppComponent,
                HomeComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(fake_routes),
                HttpClientModule,
                NgxMdModule,
                BrowserAnimationsModule,
                WufConfigurationModule.forRoot(),
                WufLayoutModule.forRoot(),
                WufUtilsModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    },
                    isolate: false
                })
            ],
            providers: [
                RoutesModule,
                WufConfigurationService,
                UserService,
                WufLoginService,
                WufLayoutService,
            ]
        })
        .compileComponents();
    }));

    it('should create the app', async(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
