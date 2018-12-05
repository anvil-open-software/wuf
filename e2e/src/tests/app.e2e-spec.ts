/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { AppComponentView } from '../pages/app.po';
import { browser, by, element } from 'protractor';

import { NavigationComponentView } from '../pages/navigation.component.view.po';


describe('AppComponent View', function () {
    let view: AppComponentView = new AppComponentView();

    let pageHref: string = '/';

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId: string = 'nav-intro';
    let navItemText: string = 'Introduction';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
    });
    //TODO: Add some tests for the content of the home page

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
