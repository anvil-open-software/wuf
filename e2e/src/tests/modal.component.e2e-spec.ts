/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { ModalComponentView } from '../pages/modal.component.view.po';
import { NavigationComponentView } from '../pages/navigation.component.view.po';
import { browser } from 'protractor';


describe('Modal Popover Page View', function () {
    let view: ModalComponentView = new ModalComponentView();

    let pageHref = '/components/modals';

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId = 'nav-modals';
    let navItemText = 'Modals';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
        browser.waitForAngularEnabled();
    });

    describe('Title', function () {
        it(`should exist`, () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it('should display title saying "Modal Component"', () => {
            expect(view.get_viewTitle()).toContain('Modal Component');
        });
    });

    describe('Button', function () {

        it(`has a button with label 'Open Material Design Dialog'`, () => {
            expect(view.get_modalComponentBtn().getText()).toBe('Open Material Design Dialog');
        });

    });

    describe('Click Buttons', function () {

        it(`modal shows`, () => {
            view.get_modalComponentBtn().click();
            expect(view.get_modalComponentContainer().isDisplayed()).toBe(true);
        });

        it(`has a modal with title 'Material Modal'`, () => {
            view.get_modalComponentBtn().click();
            expect(view.get_modalComponentWindowTitle().getText()).toBe('Material Modal');
        });

        it(`has a modal with actions in the footer`, () => {
            view.get_modalComponentBtn().click();
            expect(view.get_modalComponentWindowAction().isDisplayed()).toBe(true);
        });

        it(`has a modal, the modal has an input named 'animal'`, () => {
            view.get_modalComponentBtn().click();
            expect(view.get_modalComponentInput().isDisplayed()).toBe(true);
        });

        it(`has a modal, the modal has submit button`, () => {
            view.get_modalComponentBtn().click();
            expect(view.get_modalComponentSubmitBtn().isDisplayed()).toBe(true);
            expect(view.get_modalComponentSubmitBtn().getText()).toContain('Ok');
        });

        it(`has a modal, the modal has cancel button`, () => {
            view.get_modalComponentBtn().click();
            expect(view.get_modalComponentCancelBtn().isDisplayed()).toBe(true);
            expect(view.get_modalComponentCancelBtn().getText()).toContain('No Thanks');
        });

        describe('click close button', function () {

            it(`the modal closes`, () => {
                view.get_modalComponentBtn().click();
                expect(view.get_modalComponentContainer().isDisplayed()).toBe(true);
                view.get_modalComponentCancelBtn().click();
                browser.sleep(2000); // wait for close animation to complete
                expect(view.get_modalComponentContainer().isPresent()).toBe(false);
            });

            it(`the modal submits`, () => {
                view.get_modalComponentBtn().click();
                expect(view.get_modalComponentContainer().isDisplayed()).toBe(true);
                view.get_modalComponentInput().clear();
                view.get_modalComponentInput().sendKeys('dog');
                view.get_modalComponentSubmitBtn().click();
                browser.sleep(2000); // wait for close animation to complete
                expect(view.get_modalComponentContainer().isPresent()).toBe(false);
                expect(view.get_modalResults().getText()).toContain('dog');
            });
        });
    });

});
