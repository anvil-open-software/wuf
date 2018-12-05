/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KgConfigurationModule, KgConfigurationService } from '@kion/kg-ang-configuration';
import { KgLayoutModule, KgLayoutService } from '@kion/kg-ang-layout';
import { KgUtilsModule } from '@kion/kg-ang-utils';
import { KgLoginService } from '@kion/kg-ang-login-animated';

import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxMdModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { RoutesModule } from './app-routes';
import { MessageComponent } from './pages/components/message/message.component';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './internal/services/user.service';


describe('AppComponent', () => {
    let fake_routes: Routes = [
        {path: 'messageComponent', component: MessageComponent},
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
                MessageComponent,
                AppComponent,
                HomeComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(fake_routes),
                HttpClientModule,
                NgxMdModule,
                BrowserAnimationsModule,
                KgConfigurationModule.forRoot(),
                KgLayoutModule.forRoot(),
                KgUtilsModule
            ],
            providers: [
                RoutesModule,
                KgConfigurationService,
                UserService,
                KgLoginService,
                KgLayoutService
            ]
        });
        // WebPack developers need not call compileComponents because it inlines templates and css as part of the
        // automated build process that precedes running the test.
        // .compileComponents(); compile template and css
    }));

    it('should create the app', async(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
