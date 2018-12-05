import { browser } from 'protractor';
import { SwitchToggleComponentView } from '../pages/switch-toggle.component.view.po';
import { NavigationComponentView } from '../pages/navigation.component.view.po';


describe('Angular Material slide toggle', function () {

    const view: SwitchToggleComponentView = new SwitchToggleComponentView();
    const pageHref: string = '/components/switches';

    const nav: NavigationComponentView = new NavigationComponentView();
    const navItemId: string = 'nav-switches';
    const navItemText: string = 'Switches';


    beforeEach(() => {
        // Load the page
        browser.get(pageHref);
        browser.waitForAngularEnabled();
    });

    describe('Title', () => {
        it(`should exist`, () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it(`should display title saying 'Angular Material Slide Toggle'`, () => {
            expect(view.get_viewTitle_text()).toEqual(`Angular Material Slide Toggle`);
        });
    });

    describe(`is loaded`, () => {
        it(`with the label 'Slide to green'`, () => {
            expect(view.get_cardContainer_actions_slide_toggle()).toBeTruthy();
            expect(view.get_cardContainer_actions_slide_toggle_text()).toEqual(`Slide to green`);
        });
        it(`with a 100 x 100 rectangle`, () => {
            expect(view.get_cardContainer_content()).toBeTruthy();
            expect(view.get_cardContainer_content().getCssValue('width')).toEqual('100px');
            expect(view.get_cardContainer_content().getCssValue('height')).toEqual('100px');
        });
        it(`with a rectangle with a blue background`, () => {
            expect(view.get_cardContainer_content().getCssValue('background-color')).toEqual('rgba(0, 0, 255, 1)');
        });
    });
    describe(`when it is slid`, () => {
        beforeEach(() => {
            view.get_cardContainer_actions_slide_toggle().click();
        });
        it(`wits the label switches to 'Slide to blue'`, () => {
            expect(view.get_cardContainer_actions_slide_toggle_text()).toEqual(`Slide to blue`);
        });
        it(`it the rectangle background becomes green`, () => {
            expect(view.get_cardContainer_content().getCssValue('background-color')).toEqual('rgba(0, 128, 0, 1)');
        });
    });


    /* Make sure there is a nav item for this page and that it is active */
    describe('Nav item', function () {
        const navItem = nav.get_navItemById(navItemId);
        const navItem_active = nav.get_activeNavItems().get(0);

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

