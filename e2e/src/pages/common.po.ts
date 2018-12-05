import { by, element, browser } from 'protractor';


export class Utils {
    /**
     * Wait for an element to be present on the page (i.e., so we know the page is fully loaded).
     * @param {string} selector - CSS selector for target element.
     * @param {number} waitFor - number (in seconds) to wait.  Default is 5 seconds.
     */
    waitForElement(selector: string, waitFor?: number) {
        let timeout = waitFor * 1000 || 60 * 1000;

        let i = 0;
        let _retryOnErr = function (err?: any) {
            console.log(' <<< warning: wait retrying iteration: ' + i + ' >>> ');
            browser.sleep(1000);
            return false;
        };

        browser.wait(function () {
            i++;
            let elem = element(by.css(selector));

            return elem.isPresent().then(function (present) {
                if (present) {
                    return true;
                } else {
                    return _retryOnErr();
                }
            }, _retryOnErr);
        }, timeout, 'Error waiting for element present: ')
        .then(function (waitRetValue) {
                return waitRetValue; // usually just `true`
            }, function (err) {
                throw err + ' after ' + i + ' iterations.';
            }
        );
    }

}
