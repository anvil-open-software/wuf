/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NavigationComponentView } from '../pages/navigation.component.view.po';
import { browser, by, element } from 'protractor';


describe('Navigation Page View', function () {
    let view: NavigationComponentView = new NavigationComponentView();

    let pageHref: string = '/components/navigation';

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId: string = 'nav-navigation';
    let navItemText: string = 'Navigation';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
    });

    describe('Layout', function () {
        it(`should have a navigation element`, () => {
            expect(view.get_navComponent().isPresent()).toBeTruthy();
        });
    });

    /* Make sure there is a nav item for this page and that it is active */
    describe('Nav item', function () {
        let navItem = nav.get_navItemById(navItemId);
        let navItem_active = nav.get_activeNavItems().get(0);

        it(`should have a nav-item for this page`, () => {
            expect(navItem.isPresent()).toBeTruthy();
            expect(nav.get_navItemText(navItemId)).toBe(navItemText);
            expect(nav.get_navItemAnchorById(navItemId).getAttribute('href')).toContain(pageHref);
        });

        it(`should have only one active nav-item`, () => {
            expect(navItem_active.isPresent()).toBeTruthy();
            expect(nav.get_activeNavItems().count()).toBe(1);
        });

        it(`nav-item for this page should be the active nav-item`, () => {
            expect(navItem.getAttribute('outerHTML')).toEqual(navItem_active.getAttribute('outerHTML'));
        });
    });

});
