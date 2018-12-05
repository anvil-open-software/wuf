import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KgViewMainComponent } from './main.component';

import { KgConfigurationService } from '@kion/kg-ang-configuration';

import { KgSidebarService } from '../../layout-components/sidebar/sidebar.service';
import { KgSidebarMainComponent } from '../../layout-components/sidebar/sidebar-main/sidebar-main.component';
import { KgLayoutService } from '../layout.service';


describe('KgViewMainComponent', () => {
    let component: KgViewMainComponent;
    let fixture: ComponentFixture<KgViewMainComponent>;

    let sidebarService: any;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                HttpClientTestingModule
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                KgViewMainComponent,
                KgSidebarMainComponent
            ],
            providers: [
                KgSidebarService,
                KgConfigurationService,
                KgLayoutService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgViewMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        sidebarService = KgSidebarService;
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('Layout elements', () => {

        it('should have a page element', () => {
            de = fixture.debugElement.query(By.css('.page'));
            expect(de).toBeTruthy();
        });

        it('should have a app-level header', () => {
            de = fixture.debugElement.query(By.css('.page .page-row .main-header kg-toolbar'));
            el = de.nativeElement;
            expect(de).toBeTruthy();
        });

        it('should have a main content area', () => {
            de = fixture.debugElement.query(By.css('.page .page-row .main-wrap .main'));
            expect(de).toBeTruthy();
        });

        describe('Sidebar', () => {
            it('should have a sidebar', () => {
                de = fixture.debugElement.query(By.css('.page .page-row kg-sidebar'));
                expect(de).toBeTruthy();
            });

            it('should have a sidebar toggler', () => {
                de = fixture.debugElement.query(By.css('.page .page-row .main-header kg-toolbar .sidebar-toggler'));
                el = de.nativeElement;
                expect(de).toBeTruthy();
            });
        });

        describe('Logo', () => {
            it('should have logo', () => {
                expect(fixture.debugElement.query(By.css('.header-logo'))).toBeTruthy();
            });
        });

    });
});
