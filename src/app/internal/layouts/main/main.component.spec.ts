import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { KgConfigurationService } from '@kion/kg-ang-configuration';
import { KgLayoutModule } from '@kion/kg-ang-layout';
import { KgNavigationModule, KgNavigationService } from '@kion/kg-ang-navigation';

import { LayoutMainComponent } from './main.component';
import { CustomMaterialModule } from '../../material.module';
import { ThemeListService } from '../../theme-list.service';


describe('LayoutMainComponent', () => {
    let component: LayoutMainComponent;
    let fixture: ComponentFixture<LayoutMainComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutMainComponent],
            imports: [
                RouterTestingModule,
                CustomMaterialModule,
                HttpClientModule,
                BrowserAnimationsModule,
                KgLayoutModule,
                KgNavigationModule
            ],
            providers: [
                KgConfigurationService,
                KgNavigationService,
                ThemeListService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Layout elements', () => {
        it('should have a kg-view-main element', () => {
            de = fixture.debugElement.query(By.css('kg-view-main'));
            el = de.nativeElement;
            expect(de).toBeTruthy();
        });

        it('should have a router-outlet', () => {
            de = fixture.debugElement.query(By.css('router-outlet'));
            el = de.nativeElement;
            expect(de).toBeTruthy();
        });
    });
});
