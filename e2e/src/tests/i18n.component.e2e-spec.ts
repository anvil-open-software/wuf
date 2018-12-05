/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { I18nComponentView } from '../pages/i18n.component.view.po';
import { NavigationComponentView } from '../pages/navigation.component.view.po';
import { browser } from 'protractor';


describe('I18N Page View', function () {
    let view: I18nComponentView = new I18nComponentView();

    let pageHref: string = '/i18n';
    let culture: string = 'en-us'; // default language

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId: string = 'nav-i18n';
    let navItemText: string = 'I18N';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
    });

    describe('Title', function () {
        it(`should exist`, () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it('should display title saying "I18N"', () => {
            expect(view.get_viewTitle()).toContain('I18N');
        });
    });

    describe('Language', function () {

        it(`should have a paragraph showing language`, () => {
            if (culture === 'fr') {
                expect(view.get_language()).toBe('Français');
            }
            else {
                expect(view.get_language()).toBe('English');
            }
        });
    });

    describe('Culture', function () {
        it(`should have a paragraph showing culture`, () => {
            if (culture === 'fr') {
                expect(view.get_culture()).toBe('fr');
            }
            else {
                expect(view.get_culture()).toBe('en-us');
            }
        });
    });

    describe('Cardinality', function () {
        it(`should have a paragraph showing cardinality`, () => {
            if (culture === 'fr') {
                expect(view.get_cardinality_paragraphText()).toBe('deux loups');
            }
            else {
                expect(view.get_cardinality_paragraphText()).toBe('no wolves');
            }
        });
    });

    describe('Gender', function () {
        it(`should have a paragraph showing gender`, () => {
            if (culture === 'fr') {
                expect(view.get_gender_paragraphText()).toBe('L\'alpha de notre loup est féminin.');
            }
            else {
                expect(view.get_gender_paragraphText()).toBe('The alpha of our wolf pack is female.');
            }
        });
    });

    describe('Pluralization', function () {
        it(`should have a paragraph showing pluralization`, () => {
            if (culture === 'fr') {
                expect(view.get_pluralization_paragraphText()).toBe('Notre paquet de loup: contient deux loups femelles.');
            }
            else {
                expect(view.get_pluralization_paragraphText()).toBe('Our wolf pack: has no wolves.');
            }
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
