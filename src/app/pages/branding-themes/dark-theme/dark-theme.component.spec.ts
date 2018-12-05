import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DarkThemeComponent } from './dark-theme.component';
import { ThemeListService } from '../../../internal/theme-list.service';
import { KgConfigurationService } from '@kion/kg-ang-configuration';


describe('ThemesComponent', () => {
    let component: DarkThemeComponent;
    let fixture: ComponentFixture<DarkThemeComponent>;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                DarkThemeComponent
            ],
            providers: [
                ThemeListService,
                KgConfigurationService
            ],
            imports: [
                FormsModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DarkThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

});
