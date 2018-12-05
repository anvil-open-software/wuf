import { UtilsComponentView } from '../pages/utilities.component.view.po';
import { browser } from 'protractor';
import { NavigationComponentView } from '../pages/navigation.component.view.po';


describe('Capitalize Page View', function () {
    let view: UtilsComponentView = new UtilsComponentView();

    let pageHref: string = '/components/utilities';

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId: string = 'nav-utilities';
    let navItemText: string = 'Utilities';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
    });

    describe('Title', function () {
        it(`should exist`, () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it('should display title saying "Utilities"', () => {
            expect(view.get_viewTitle()).toContain('Utilities');
        });
    });

    describe('Capitalization', function () {

        it(`should have five paragraphs showing capitalization examples`, () => {
            expect(view.get_component_paragraphs().count()).toBe(5);
        });

        it(`should have five spans showing capitalization examples`, () => {
            expect(view.get_component_spans().count()).toBe(5);
        });

        it(`should have first span show 'Capitalize abc to Abc'`, () => {
            expect(view.get_component_spans().get(0).getText()).toBe('Capitalize abc to Abc');
        });

        it(`should have first span show 'Capitalize abc def to Abc Def'`, () => {
            expect(view.get_component_spans().get(1).getText()).toBe('Capitalize abc def to Abc Def');
        });

        it(`should have first span show 'Capitalize Abc to Abc'`, () => {
            expect(view.get_component_spans().get(2).getText()).toBe('Capitalize Abc to Abc');
        });

        it(`should have first span show 'Capitalize aBc to Abc'`, () => {
            expect(view.get_component_spans().get(3).getText()).toBe('Capitalize aBc to Abc');
        });

        it(`should have first span show 'Capitalize 123 to 123'`, () => {
            expect(view.get_component_spans().get(4).getText()).toBe('Capitalize 123 to 123');
        });
    });

    /* Make sure there is a nav item for this page and that it is active */
    describe('Nav item', function () {
        let navItem = nav.get_navItemById(navItemId);
        let navItem_active = nav.get_activeNavItems().get(0);

        it(`should have a nav-item for this page`, () => {
            expect(navItem).toBeTruthy();
            expect(nav.get_navItemText(navItemId)).toBe(navItemText);
            expect(nav.get_navItemAnchorById(navItemId).getAttribute('href')).toContain(pageHref);
        });

        it(`should have only one active nav-item`, () => {
            expect(navItem_active).toBeTruthy();
            expect(nav.get_activeNavItems().count()).toBe(1);
        });

        it(`nav-item for this page should be the active nav-item`, () => {
            expect(navItem.getAttribute('outerHTML')).toEqual(navItem_active.getAttribute('outerHTML'));
        });
    });

});
