// import { AppComponentView } from '../pages/app.po';
import { MultiplePopoverComponentView } from '../pages/multiSelect.component.view.po';
import { NavigationComponentView } from '../pages/navigation.component.view.po';
import { browser } from 'protractor';
import { Utils } from '../pages/common.po';


describe('Multi-Select Page View', function () {
    let view: MultiplePopoverComponentView = new MultiplePopoverComponentView();
    let utils: Utils = new Utils();

    let pageHref: string = '/components/multipopovers';

    let nav: NavigationComponentView = new NavigationComponentView();
    let navItemId: string = 'nav-multipopovers';
    let navItemText: string = 'Multi-Select';

    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
    });

    describe('Title', function () {
        it(`should exist`, () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it('should display title saying "Multi-Select Component"', () => {
            expect(view.get_viewTitle()).toContain('Multi-Select Component');
        });
    });

    describe('Buttons', function () {

        it(`has a button called This is a Multiple-list button`, () => {
            expect(view.get_multiPopoverMultiBtn().getText()).toBe('Granted Roles (0)');
        });

        it(`has a button called This is a Single-list button`, () => {
            expect(view.get_multiPopoverSingleBtn().getText()).toBe('This is a Single-list button');
        });

        it(`has a button called This is a Empty-list button`, () => {
            expect(view.get_multiPopoverEmptyBtn().getText()).toBe('This is a Empty-list button');
        });

    });

    describe('Click Buttons', function () {

        it(`has a popover show when clicking the first button`, () => {
            view.get_multiPopoverMultiBtn().click();
            expect(view.get_multiPopoverMultiPopover()).toBeTruthy();
            expect(view.get_popoverTitle().getText()).toBe('My Popover for Multiple List');
            expect(view.get_multiPopoverItem1().getText()).toContain('Dematic');
            expect(view.get_multiPopoverItem2().getText()).toContain('KION');
            expect(view.get_multiPopoverItem3().getText()).toContain('Amazon');
            expect(view.get_multiPopoverItem4().getText()).toContain('Google');
            expect(view.get_selectAll().isPresent()).toBe(true);
            expect(view.get_clearAll().isPresent()).toBe(false);
            expect(view.get_popoverSubmitBtn()).toBeTruthy();
            expect(view.get_popoverCancelBtn()).toBeTruthy();

        });

        it(`has a popover shows when clicking the second button`, () => {
            view.get_multiPopoverSingleBtn().click();
            utils.waitForElement('#ngb-popover-2 kg-multi-popover .multi-popover-container .multi-popover-item label input');
            expect(view.get_multiPopoverSinglePopover()).toBeTruthy();
            expect(view.get_popoverTitle().getText()).toBe('My Popover for Single List');
            // expect(view.get_singlePopoverItem1().getText()).toContain('Dematic'); //TODO: this test intermittently fails.  Timing issue?
            expect(view.get_popoverSubmitBtn().isPresent()).toBe(true);
            expect(view.get_popoverCancelBtn().isPresent()).toBe(true);
        });

        it(`has a popover shows when clicking the third button`, () => {
            view.get_multiPopoverEmptyBtn().click();
            expect(view.get_multiPopoverEmptyPopover()).toBeTruthy();
            expect(view.get_popoverTitle().getText()).toBe('My Popover for Empty List');
            expect(view.get_emptyPopoverItem1().isPresent()).toBe(false);
            expect(view.get_popoverSubmitBtn().isPresent()).toBe(false);
            expect(view.get_popoverCancelBtn().isPresent()).toBe(true);
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
