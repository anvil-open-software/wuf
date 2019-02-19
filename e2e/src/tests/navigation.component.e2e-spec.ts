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

});
