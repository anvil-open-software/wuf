/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser, element, by } from 'protractor';


export class NavigationComponentView {

    /**
     * Get navigation component.
     * @returns Navigation component
     */
    get_navComponent() {
        return element(by.css('app-root app-layout-main wuf-view-main wuf-sidebar .sidebar-wrap .sidebar-content-wrap wuf-navigation'));
    }

    /**
     * Get all nav-items.
     * @returns Array of nav-items
     */
    get_navItems() {
        return element.all(by.css('wuf-sidebar wuf-navigation .nav-wrap ul.nav wuf-navigation-link'));
    }

    /**
     * Get a navigation element by its id.
     * @param {string} route - The route used by the navigation item is used as the key css selector for finding the element.
     * @returns Nav item
     */
    get_navItemById(id) {
        return element(by.css(`wuf-sidebar wuf-navigation .nav-wrap ul.nav wuf-navigation-link li.nav-item#${id} a`));
    }

    /**
     * Get active navigation element
     * @param {string} route - The route used by the navigation item is used as the key css selector for finding the element.
     * @returns Nav item
     */
    get_activeNavItems() {
        return element.all(by.css(`wuf-sidebar wuf-navigation .nav-wrap ul.nav wuf-navigation-link li.nav-item a.active`));
    }

    /**
     * Get a navigation element's <a> tag by its id.
     * @param {string} route - The route used by the navigation item is used as the key css selector for finding the element.
     * @returns Nav item
     */
    get_navItemAnchorById(id) {
        return element(by.css(`wuf-sidebar wuf-navigation .nav-wrap ul.nav wuf-navigation-link li.nav-item#${id} a`));
    }

    /**
     * Get a navigation element's text.
     * @param {string} id - The unique id used by the navigation item is used as the css selector for the element.
     * @returns Nav item text
     */
    get_navItemText(id) {
        let navItem = element(by.css(`wuf-sidebar wuf-navigation .nav-wrap ul.nav wuf-navigation-link li.nav-item#${id} a span.nav-item-label`));
        return navItem.getText();
    }

    /**
     * Find a nav item by its route and click on it.
     * @param {string} id - The unique id used by the navigation item is used as the css selector for the element.
     */
    clickOn_navItem(id) {
        let navItem = this.get_navItemById(id);
        navItem.click();
    }

}
