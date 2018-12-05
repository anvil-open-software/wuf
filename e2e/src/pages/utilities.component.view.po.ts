import { browser, element, by, protractor, WebElement } from 'protractor';


export class UtilsComponentView {
    capitalizeParagraphs = element.all(by.css('div#capitalize-pipe-examples p'));
    capitalizeSpans = element.all(by.css('div#capitalize-pipe-examples p span'));

    get_viewTitle() {
        return element(by.css('app-root h1')).getText();
    }

    get_component_paragraphs() {
        return this.capitalizeParagraphs;
    }

    get_component_spans() {
        return this.capitalizeSpans;
    }

    /**
     * Returns the shadow-root of the element passed as the argument
     * @param el
     * @returns {any}
     */
    get_Element_ShadowRoot(webEl: WebElement): any {
        const deferred = protractor.promise.defer();
        browser.executeScript('return arguments[0].shadowRoot', webEl).then(
            function (elShadowRoot) {
                deferred.fulfill(elShadowRoot);
            }
        );
        return deferred.promise;
    }
}
