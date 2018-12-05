/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser, element, by } from 'protractor';


export class MessageComponentView {

    get_viewTitle() {
        return element(by.css('app-root h1')).getText();
    }

    get_infoMessageLink() {
        return element(by.id('infoMessageLink'));
    }

    get_infoMessage() {
        return element(by.css('.message-info'));
    }

    get_infoMessageClose() {
        return element(by.css('.message-info .message-close'));
    }

    get_infoMessageText() {
        return this.get_infoMessage().getText();
    }

    get_successMessageLink() {
        return element(by.id('successMessageLink'));
    }

    get_successMessage() {
        return element(by.css('.message-success'));
    }

    get_successMessageClose() {
        return element(by.css('.message-success .message-close'));
    }

    get_successMessageText() {
        return this.get_successMessage().getText();
    }

    get_warningMessageLink() {
        return element(by.id('warningMessageLink'));
    }

    get_warningMessage() {
        return element(by.css('div.message.message-dismissible.message-warning'));
    }

    get_warningMessageText() {
        return this.get_warningMessage().getText();
    }

    get_warningMessageClose() {
        return element(by.css('.message-warning .message-close'));
    }

    get_errorMessageLink() {
        return element(by.id('errorMessageLink'));
    }

    get_errorMessage() {
        return element(by.css('.message-danger'));
    }

    get_errorMessageText() {
        return this.get_errorMessage().getText();
    }

    get_errorMessageClose() {
        return element(by.css('.message-danger .message-close'));
    }

}
