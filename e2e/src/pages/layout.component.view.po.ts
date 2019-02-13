/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser, element, by } from 'protractor';


export class LayoutComponentView {

    get_viewPage = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page'));
    };

    get_viewSidebarComponent = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row wuf-sidebar'));
    };

    get_viewSidebarWrap = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row wuf-sidebar .sidebar-wrap'));
    };

    get_viewSidebarWrapCollapsed = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row wuf-sidebar .sidebar-wrap.collapsed'));
    };

    get_SidebarWidth() {
        return this.get_viewSidebarWrap().getCssValue('width').then(function (cssValue) {
            return cssValue;
        });
    }

    get_viewSidebarToggler = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row .main-header wuf-toolbar .sidebar-toggler'));
    };

    get_viewAppHeader = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row .main-header wuf-toolbar'));
    };

    get_viewContentHeader = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row .main-wrap .main wuf-content-header'));
    };

    get_viewContentArea = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row .main-wrap .main wuf-content-main .main-content-wrap'));
    };

    get_viewContentFooter = function () {
        return element(by.css('app-root app-layout-main wuf-view-main .page .page-row .main-wrap .main wuf-content-footer'));
    };

}
