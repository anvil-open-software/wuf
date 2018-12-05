/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { browser, element, by } from 'protractor';


export class I18nComponentView {

    get_viewTitle = function () {
        return element(by.css('app-root h1')).getText();
    };

    get_language() {
        return element(by.css('#language')).getText();
    }

    get_culture() {
        return element(by.css('#culture')).getText();
    }

    get_cardinality_paragraphText() {
        return element(by.css('p#example_cardinality')).getText();
    }

    get_gender_paragraphText() {
        return element(by.css('p#example_gender')).getText();
    }

    get_pluralization_paragraphText() {
        return element(by.css('p#example_pluralization')).getText();
    }
}
