/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser, by } from 'protractor';
import { WufWebMessagesComponentView } from '../pages/web-messages.component.view.po';
import { WebElement } from 'selenium-webdriver';
import { NavigationComponentView } from '../pages/navigation.component.view.po';


describe('WEB Component: KG-WEB-MESSAGES Page View', function () {

    const MESSAGES = {
        ERROR: `Danger, Will Robinson!`,
        INFO: `Did you know that astronauts never snore? Sleep apnea can't happen without gravity!`,
        SUCCESS: `I'm ok!`,
        WARNING: `The "check engine" light is on.`
    };

    const MESSAGE_TYPE = {
        ERROR: `danger`,
        INFO: `info`,
        SUCCESS: `success`,
        WARNING: `warning`
    };

    const view: WufWebMessagesComponentView = new WufWebMessagesComponentView();

    const pageRoute: string = '/components/kgWebMessages';

    // Default values not used by this test
    const nav: NavigationComponentView = new NavigationComponentView();
    const navItemId: string = 'nav-kgWebMessages';
    const navItemText: string = 'Web Messages';

    beforeEach(() => {
        // Load the page
        browser.get(pageRoute);
        browser.waitForAngularEnabled();
    });

    describe('The KG-WEB-COMPONENT page ', function () {
        it('has title', () => {
            expect(view.get_viewTitle()).toBeTruthy();
        });

        it('has title saying "WEB Component: KG-WEB-MESSAGES"', () => {
            expect(view.get_viewTitle()).toContain('WEB Component: KG-WEB-MESSAGE');
        });

        it('has the wuf-web-message element on the page', () => {
            expect(view.get_viewWufWebMessageElement()).toBeTruthy();
        });

        it(`has the wuf-web-message element on the page and have a tag of 'wuf-web-message'`, () => {
            expect(view.get_viewWufWebMessageElement().getTagName()).toEqual('wuf-web-message');
        });

        it('its wuf-web-message element has one shadow-root child', () => {
            view.get_kgWebMessageShadowStyles().then(
                function (WebElements: WebElement[]) {
                    // browser.pause();
                    // debugger;
                    expect(WebElements.length).toBe(1);
                }
            );
        });

        it('its wuf-web-message element has one shadow-root style child', () => {
            view.get_kgWebMessageShadowStyles().then(
                function (WebElements: WebElement[]) {
                    expect(WebElements[0].getTagName()).toEqual('style');
                }
            );
        });
    });

    /**
     * Notice that we will not dive deep into the structure of these elements, since this is validated
     * in their components' unit tests.
     */
    describe('Error message', () => {
        beforeEach(() => {
            browser.waitForAngularEnabled();
            view.get_errorMessageLink().click();
        });
        describe('after the page is rendered, and its render button is clicked', () => {
            it('the wuf-web-message element has one shadow-root div child', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements.length).toBe(1);
                    }
                );
            });
            it(`and it has  'message message-dismissible message-danger' classes`, () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                    }
                );
            });
            describe('the wuf-web-message custom element', () => {
                it('has a color = rgba(255, 255, 255, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageColor(WebElements[0], MESSAGE_TYPE.ERROR).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(255, 255, 255, 1)');
                                });
                        }
                    );
                });
                it('has a background color = rgba(3, 169, 244, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageBackgroundColor(WebElements[0]).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(220, 53, 69, 1)');
                                });
                        }
                    );
                });
                it('has a text = ' + MESSAGES.ERROR, () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageText(WebElements[0]).then(
                                function (messageText) {
                                    expect(messageText).toEqual(MESSAGES.ERROR);
                                });
                        }
                    );
                });
            });
        });

        describe(' after the wuf-web-message dismiss button is clicked', () => {
            it('the wuf-web-message element is on the page)', () => {
                expect(view.get_viewWufWebMessageElement()).toBeTruthy();
            });
            it('the wuf-web-message element has no shadow-root children', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(WebElements[0]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (elements: WebElement[]) {
                                        expect(elements.length).toBe(0);
                                    }
                                );
                            });
                    }
                );
            });
        });
    });

    describe('Information message', () => {
        beforeEach(() => {
            browser.waitForAngularEnabled();
            view.get_infoMessageLink().click();
        });
        describe('after the page is rendered, and its render button is clicked', () => {
            it('the wuf-web-message element has one shadow-root child', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements.length).toBe(1);
                    }
                );
            });
            it(`and it has  'message message-dismissible message-info' classes`, () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements[0].getAttribute('class')).toEqual('message message-dismissible message-info');
                    }
                );
            });
            describe('the wuf-web-message custom element', () => {
                it('has a color = rgba(255, 255, 255, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageColor(WebElements[0], MESSAGE_TYPE.INFO).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(255, 255, 255, 1)');
                                });
                        }
                    );
                });
                it('has a background color = rgba(3, 169, 244, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageBackgroundColor(WebElements[0]).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(3, 169, 244, 1)');
                                });
                        }
                    );
                });
                it('has a text = ' + MESSAGES.INFO, () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageText(WebElements[0]).then(
                                function (messageText) {
                                    expect(messageText).toEqual(MESSAGES.INFO);
                                });
                        }
                    );
                });
            });
        });

        describe(' after the wuf-web-message dismiss button is clicked', () => {
            it('the wuf-web-message element is on the page)', () => {
                expect(view.get_viewWufWebMessageElement()).toBeTruthy();
            });
            it('the wuf-web-message element has no shadow-root children', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(WebElements[0]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (elements: WebElement[]) {
                                        expect(elements.length).toBe(0);
                                    }
                                );
                            });
                    }
                );
            });
        });
    });

    describe('Success message', () => {
        beforeEach(() => {
            browser.waitForAngularEnabled();
            view.get_successMessageLink().click();
        });
        describe('after the page is rendered, and its render button is clicked', () => {
            it('the wuf-web-message element has one shadow-root child', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements.length).toBe(1);
                    }
                );
            });
            it(`and it has  'message message-dismissible message-success' classes`, () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements[0].getAttribute('class')).toEqual('message message-dismissible message-success');
                    }
                );
            });
            describe('the wuf-web-message custom element', () => {
                it('has a color = rgba(255, 255, 255, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageColor(WebElements[0], MESSAGE_TYPE.SUCCESS).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(255, 255, 255, 1)');
                                });
                        }
                    );
                });
                it('has a background color = rgba(92, 184, 92, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageBackgroundColor(WebElements[0]).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(92, 184, 92, 1)');
                                });
                        }
                    );
                });
                it('has a text = ' + MESSAGES.SUCCESS, () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageText(WebElements[0]).then(
                                function (messageText) {
                                    expect(messageText).toEqual(MESSAGES.SUCCESS);
                                });
                        }
                    );
                });
            });
        });

        describe(' after the wuf-web-message dismiss button is clicked', () => {
            it('the wuf-web-message element is on the page)', () => {
                expect(view.get_viewWufWebMessageElement()).toBeTruthy();
            });
            it('the wuf-web-message element has no shadow-root children', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(WebElements[0]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (elements: WebElement[]) {
                                        expect(elements.length).toBe(0);
                                    }
                                );
                            }
                        );
                    }
                );
            });
        });
    });

    describe('Warning message', () => {
        beforeEach(() => {
            browser.waitForAngularEnabled();
            view.get_warningMessageLink().click();
        });
        describe('after the page is rendered, and its render button is clicked', () => {
            it('the wuf-web-message element has one shadow-root child', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements.length).toBe(1);
                    }
                );
            });
            it(`and it has  'message message-dismissible message-warning' classes`, () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        expect(WebElements[0].getAttribute('class')).toEqual('message message-dismissible message-warning');
                    }
                );
            });
            describe('the wuf-web-message custom element', () => {
                it('has a color = rgba(33, 37, 41, 1', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageColor(WebElements[0], MESSAGE_TYPE.WARNING).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(73, 80, 87, 1)');
                                });
                        }
                    );
                });
                it('has a background color = rgba(252, 167, 0, 1)', () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageBackgroundColor(WebElements[0]).then(
                                function (messageColor) {
                                    expect(messageColor).toEqual('rgba(252, 167, 0, 1)');
                                });
                        }
                    );
                });
                it('has a text = ' + MESSAGES.WARNING, () => {
                    view.get_kgWebMessageShadowDivs().then(
                        function (WebElements: WebElement[]) {
                            view.get_kgWebMessageText(WebElements[0]).then(
                                function (messageText) {
                                    expect(messageText).toEqual(MESSAGES.WARNING);
                                });
                        }
                    );
                });
            });
        });

        describe(' after the wuf-web-message dismiss button is clicked', () => {
            it('the wuf-web-message element is on the page)', () => {
                expect(view.get_viewWufWebMessageElement()).toBeTruthy();
            });
            it('the wuf-web-message element has no shadow-root children', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (WebElements: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(WebElements[0]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (elements: WebElement[]) {
                                        expect(elements.length).toBe(0);
                                    }
                                );
                            }
                        );
                    }
                );
            });
        });
    });

    describe('When showing four messages: Error, Info, Success, Warning', () => {
        beforeEach(() => {
            browser.waitForAngularEnabled();
            view.get_errorMessageLink().click();
            view.get_infoMessageLink().click();
            view.get_successMessageLink().click();
            view.get_warningMessageLink().click();
        });
        it('there are four messages shown)', () => {
            view.get_kgWebMessageShadowDivs().then(
                function (kbWebMessages: WebElement[]) {
                    expect(kbWebMessages.length).toBe(4);
                }
            );
        });
        it('and they are: Error, Info, Success, Warning', () => {
            view.get_kgWebMessageShadowDivs().then(
                function (kbWebMessages: WebElement[]) {
                    expect(kbWebMessages.length).toBe(4);
                    expect(kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                    expect(kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-info');
                    expect(kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-success');
                    expect(kbWebMessages[3].getAttribute('class')).toEqual('message message-dismissible message-warning');
                }
            );
        });
        describe('and the Error message is deleted', () => {
            it('then three messages are shown: Info, Success, Warning', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (kbWebMessages: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(kbWebMessages[0]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (_kbWebMessages: WebElement[]) {
                                        expect(_kbWebMessages.length).toBe(3);
                                        expect(_kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-info');
                                        expect(_kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-success');
                                        expect(_kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-warning');
                                    }
                                );
                            });
                    }
                );
            });
        });
        describe('and the Warning message is deleted', () => {
            it('then three messages are shown: Error, Info, Success', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (kbWebMessages: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(kbWebMessages[3]).then(
                            function (status) {
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (_kbWebMessages: WebElement[]) {
                                        expect(_kbWebMessages.length).toBe(3);
                                        expect(_kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                        expect(_kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-info');
                                        expect(_kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-success');
                                    }
                                );
                            });
                    }
                );
            });
        });
        describe('and the Info message is deleted', () => {
            it('then three messages are shown: Error, Success, Warning', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (kbWebMessages: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(kbWebMessages[1]).then(
                            function (status) {
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (_kbWebMessages: WebElement[]) {
                                        expect(_kbWebMessages.length).toBe(3);
                                        expect(_kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                        expect(_kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-success');
                                        expect(_kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-warning');
                                    }
                                );
                            });
                    }
                );
            });
        });
        describe('and the Info and Success messages are deleted', () => {
            it('then two messages are shown,  Error, Warning', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (kbWebMessages: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(kbWebMessages[1]).then(
                            function (status) {
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (kbMessages_1: WebElement[]) {
                                        view.click_kgWebMessageElement_dismissButton(kbMessages_1[1]).then(function () {
                                            view.get_kgWebMessageShadowDivs().then(
                                                function (_kbWebMessages_2: WebElement[]) {
                                                    expect(_kbWebMessages_2.length).toBe(2);
                                                    expect(_kbWebMessages_2[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                                    expect(_kbWebMessages_2[1].getAttribute('class')).toEqual('message message-dismissible message-warning');
                                                }
                                            );
                                        });

                                    }
                                );
                            });
                    }
                );
            });
        });
    });

    describe('When showing four messages: Error, Error, Error, Error messages', () => {
        beforeEach(() => {
            browser.waitForAngularEnabled();
            view.get_errorMessageLink().click();
            view.get_errorMessageLink().click();
            view.get_errorMessageLink().click();
            view.get_errorMessageLink().click();
        });
        it('there are four messages shown: Error, Error, Error, Error)', () => {
            view.get_kgWebMessageShadowDivs().then(
                function (kbWebMessages: WebElement[]) {
                    expect(kbWebMessages.length).toBe(4);
                    expect(kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                    expect(kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-danger');
                    expect(kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-danger');
                    expect(kbWebMessages[3].getAttribute('class')).toEqual('message message-dismissible message-danger');
                }
            );
        });
        describe('and the first Error message is deleted', () => {
            it('then three messages are shown: Error, Error, Error)', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (kbWebMessages: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(kbWebMessages[0]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (_kbWebMessages: WebElement[]) {
                                        expect(_kbWebMessages.length).toBe(3);
                                        expect(_kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                        expect(_kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                        expect(_kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                    }
                                );
                            });
                    }
                );
            });
        });
        describe('and the second message is deleted', () => {
            it('then three messages are shown: Error, Error, Error)', () => {
                view.get_kgWebMessageShadowDivs().then(
                    function (kbWebMessages: WebElement[]) {
                        view.click_kgWebMessageElement_dismissButton(kbWebMessages[1]).then(
                            function (status) {
                                // browser.pause();
                                expect(status).toBe(true);
                                view.get_kgWebMessageShadowDivs().then(
                                    function (_kbWebMessages: WebElement[]) {
                                        expect(_kbWebMessages.length).toBe(3);
                                        expect(_kbWebMessages[0].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                        expect(_kbWebMessages[1].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                        expect(_kbWebMessages[2].getAttribute('class')).toEqual('message message-dismissible message-danger');
                                    }
                                );
                            });
                    }
                );
            });
        });
    });

    /* Make sure there is a nav item for this page and that it is active */
    describe('Nav item', function () {
        const navItem = nav.get_navItemById(navItemId);
        const navItem_active = nav.get_activeNavItems().get(0);

        it(`should have a nav-item for this page`, () => {
            expect(navItem).toBeTruthy();
            expect(nav.get_navItemText(navItemId)).toBe(navItemText);
            expect(nav.get_navItemAnchorById(navItemId).getAttribute('href')).toContain(pageRoute);
        });

        it(`should have only one active nav-item`, () => {
            expect(navItem_active).toBeTruthy();
            expect(nav.get_activeNavItems().count()).toBe(1);
        });

        it(`nav-item for this page should be the active nav-item`, () => {
            expect(navItem.getAttribute(`outerHTML`)).toEqual(navItem_active.getAttribute(`outerHTML`));
        });
    });

});
