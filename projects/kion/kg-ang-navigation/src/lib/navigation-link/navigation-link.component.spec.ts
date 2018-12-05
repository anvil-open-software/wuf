import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatMenuModule, MatTooltipModule } from '@angular/material';
import { KgSidebarService } from '@kion/kg-ang-layout';

import { KgNavigationLinkComponent } from './navigation-link.component';


describe('KgNavigationLinkComponent', () => {
    let component: KgNavigationLinkComponent;
    let fixture: ComponentFixture<KgNavigationLinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // Need imports the RouterTestingModule to make the template be able to recognize the router attributes
                RouterTestingModule,
                HttpClientTestingModule,
                MatTooltipModule,
                MatMenuModule
            ],
            declarations: [
                KgNavigationLinkComponent
            ],
            providers: [
                KgSidebarService
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KgNavigationLinkComponent);
        component = fixture.componentInstance;
        component.link = '/navlink';
        component.label = '"nav link text"';
        component.icon = '&#xE88A;';
        fixture.detectChanges();
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    it('label should be "nav link text"', () => {
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').textContent).toContain('"nav link text"');
    });

    it('url should be /navlink', () => {
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').getAttribute('href')).toContain('/navlink');
    });


    it('icon should be ', () => {
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a i.material-icons').textContent).toContain('');
    });
});
