/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { element, by, protractor, browser } from 'protractor';
import { WebElement } from 'selenium-webdriver';
import { UtilsComponentView } from './utilities.component.view.po';


export class WufWebMessagesComponentView {
    util = new UtilsComponentView();

    get_viewTitle() {
        return element(by.css('app-root h1')).getText();
    }


    get_viewWufWebMessageElement() {
        return element(by.css('wuf-web-message'));
    }

    get_errorMessageLink() {
        return element(by.id('errorMessageLink'));
    }

    get_infoMessageLink() {
        return element(by.id('infoMessageLink'));
    }

    get_successMessageLink() {
        return element(by.id('successMessageLink'));
    }

    get_warningMessageLink() {
        return element(by.id('warningMessageLink'));
    }

    /**
     * Return the children
     * @returns {WebElement[]}
     */
    get_kgWebMessageShadowChildren() {
        // browser.pause();
        const deferred = protractor.promise.defer();
        this.util.get_Element_ShadowRoot(this.get_viewWufWebMessageElement()).then(
            function (kgWebMessageElementShadowRoot) {
                deferred.fulfill(kgWebMessageElementShadowRoot.childNodes);
            }
        );
        return deferred.promise;
    }

    /**
     * Return the style element
     * @returns {WebElement[]}
     */
    get_kgWebMessageShadowStyles() {
        // browser.pause();
        const deferred = protractor.promise.defer();
        this.util.get_Element_ShadowRoot(this.get_viewWufWebMessageElement()).then(
            function (kgWebMessageElements_shadowRoot) {
                deferred.fulfill(kgWebMessageElements_shadowRoot.findElements(by.css('style')));
            }
        );
        return deferred.promise;
    }

    /**
     * Return all div elements
     * @returns {WebElement[]}
     */
    get_kgWebMessageShadowDivs() {
        // browser.pause();
        const deferred = protractor.promise.defer();
        this.util.get_Element_ShadowRoot(this.get_viewWufWebMessageElement()).then(
            function (kgWebMessageElements_shadowRoot) {
                deferred.fulfill(kgWebMessageElements_shadowRoot.findElements(by.css('div.message')));
            }
        );
        return deferred.promise;
    }

    /**
     * Poke into a message to extract its color
     * @param {WebElement} kbWebMessageElement
     * @returns {promise.Promise<string>}}
     */
    get_kgWebMessageColor(kbWebMessageElement: WebElement, messageType: string) {
        return kbWebMessageElement.getCssValue('color');
    }

    /**
     * Poke into a message to to extract its background color
     * @param {WebElement} kbWebMessageElement
     * @returns {promise.Promise<string>}
     */
    get_kgWebMessageBackgroundColor(kbWebMessageElement: WebElement) {
        return kbWebMessageElement.getCssValue('background-color');
    }

    /**
     * Poke into a message to to extract its text
     * @param {WebElement} kbWebMessageElement
     * @returns {promise.Promise<string>}
     */
    get_kgWebMessageText(kbWebMessageElement: WebElement) {
        const divEl = kbWebMessageElement.findElement(by.css('div'));
        return divEl.getText();
    }

    /**
     * Poke into a message and click its dismissal button
     * @param {WebElement} kbWebMessageElement
     */
    click_kgWebMessageElement_dismissButton(kbWebMessageElement: WebElement) {
        const deferred = protractor.promise.defer();
        kbWebMessageElement.findElement(by.css('button')).click().then(function () {
            deferred.fulfill(true);
        });
        return deferred.promise;
    }
}
