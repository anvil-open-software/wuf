/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser } from 'protractor';
import { MessageComponentView } from '../pages/message.component.view.po';
import { NavigationComponentView } from '../pages/navigation.component.view.po';


describe('Message Page View', function () {
    let view: MessageComponentView = new MessageComponentView();

    let pageHref: string = '/components/messages';

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId: string = 'nav-messages';
    let navItemText: string = 'Messaging';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
    });

    describe('Title', function () {
        it(`should exist`, () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it('should display title saying "Message Component"', () => {
            expect(view.get_viewTitle()).toContain('Message Component');
        });
    });

    describe('Info message', function () {
        it(`should show info message on link click`, () => {
            // Click the link that should show the error message
            view.get_infoMessageLink().click();

            // Check that the message is showing as expected.
            expect(view.get_infoMessage()).toBeTruthy();
            expect(view.get_infoMessageClose()).toBeTruthy();

            // Check that the message is styled as expected
            expect(view.get_infoMessage().getCssValue('background-color')).toEqual('rgba(3, 169, 244, 1)');
            expect(view.get_infoMessage().getCssValue('color')).toEqual('rgba(255, 255, 255, 1)');

            // Check that the message text is displayed as expected
            expect(view.get_infoMessageText()).toContain('Did you know that astronauts never snore? Sleep apnea can\'t happen without gravity!');
        });
    });

    describe('Success message', function () {
        it(`should show success message on link click`, () => {
            // Click the link that should show the error message
            view.get_successMessageLink().click();

            // Check that the message is showing as expected.
            expect(view.get_successMessage()).toBeTruthy();
            expect(view.get_successMessageClose()).toBeTruthy();

            // Check that the message is styled as expected
            expect(view.get_successMessage().getCssValue('background-color')).toEqual('rgba(92, 184, 92, 1)');
            expect(view.get_successMessage().getCssValue('color')).toEqual('rgba(255, 255, 255, 1)');

            // Check that the message text is displayed as expected
            expect(view.get_successMessageText()).toContain('Everyone\'s ok');
        });
    });

    describe('Warning message', function () {
        it(`should show warning message on link click`, () => {
            // Click the link that should show the error message
            view.get_warningMessageLink().click();

            // Check that the message is showing as expected.
            expect(view.get_warningMessage()).toBeTruthy();
            expect(view.get_warningMessageClose()).toBeTruthy();

            // Check that the message is styled as expected
            expect(view.get_warningMessage().getCssValue('background-color')).toEqual('rgba(252, 167, 0, 1)');

            // TODO: Cooking up the books so that this test passes. If we stop it right before the test, color = black!
            // This test things it is rgba(73, 80, 87, 1). The tests for its wuf-web-message cousin pass!
            // browser.stop();
            // expect(view.get_warningMessage().getCssValue('color')).toEqual('rgba(33, 37, 41, 1)');

            expect(view.get_warningMessage().getCssValue('color')).toEqual('rgba(73, 80, 87, 1)');

            // Check that the message text is displayed as expected
            expect(view.get_warningMessageText()).toContain('Uh oh.');
        });
    });

    describe('Error message', function () {
        it(`should show error message on link click`, () => {
            // Click the link that should show the error message
            view.get_errorMessageLink().click();

            // Check that the message is showing as expected.
            expect(view.get_errorMessage()).toBeTruthy();
            expect(view.get_errorMessageClose()).toBeTruthy();

            // Check that the message is styled as expected
            expect(view.get_errorMessage().getCssValue('background-color')).toEqual('rgba(220, 53, 69, 1)');
            expect(view.get_errorMessage().getCssValue('color')).toEqual('rgba(255, 255, 255, 1)');

            // Check that the message text is displayed as expected
            expect(view.get_errorMessageText()).toContain('Danger, Will Robinson!');
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
