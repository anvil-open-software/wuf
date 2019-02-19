/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

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

});
