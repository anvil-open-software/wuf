/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

// TODO: Move test file to TypeScript.
// import 'mocha';
// import { expect } from 'chai';
// import 'karma-fixture';
import '@webcomponents/webcomponentsjs/webcomponents-lite';
import {WufWebMessage} from '../src/wuf-web-message'; // Do not delete, it is required!!

describe('<wuf-web-message>', () => {
    let component;
    let fixturePath = 'wuf-web-message.fixture.html';
    const FIXTURES = {
        DEFAULT: 0,
        SLOT: 1,
        STYLE: 2,
        ATTRIBUTES: 3,
        PROPERTIES: 4,
        ERROR: 0,
        INFO: 1,
        SUCCESS: 2,
        WARNING: 3
    };
    const DEFAULTS = {
        BOOLEAN: true,
        NUMBER: 42,
        STRING: 'Pickle',
        ERROR_ID: 'error',
        INFO_ID: 'info',
        SUCCESS_ID: 'success',
        WARNING_ID: 'warning',
        ERROR_MESSAGE: 'Error message',
        INFO_MESSAGE: 'Info message',
        SUCCESS_MESSAGE: 'Success message',
        WARNING_MESSAGE: 'Warning message',
        ERROR_TYPE: 'error',
        INFO_TYPE: 'info',
        SUCCESS_TYPE: 'success',
        WARNING_TYPE: 'warning',
        OBJECT: {
            foo: 'bar',
        },
    };

    before(() => {
        fixture.setBase('test/fixture')
    });

    afterEach(() => {
        fixture.cleanup()
    });
    describe('component tag', () => {
        it(' is correct', () => {
            expect(true).equal(true);
        });
    });
    describe('#errorMessage', () => {
        let test_id = DEFAULTS.ERROR_ID;
        let test_type = DEFAULTS.ERROR_TYPE;
        let test_text = DEFAULTS.ERROR_MESSAGE;

        beforeEach(() => {
            component = fixture.load(fixturePath)[FIXTURES.ERROR];
            component.errorMessage = test_text;
        });

        describe('component tag', () => {
            describe('when defined', () => {

                it(' is correct', () => {
                    expect(component.tagName).equal('KG-WEB-MESSAGE');
                });

                it(' has correct id', () => {
                    expect(component.getAttribute('id')).equal(test_id);
                });

                it(' has correct errormessage', () => {
                    expect(component.getAttribute('errormessage')).equal(test_text);
                });

                it(' has correct type', () => {
                    expect(component.getAttribute('type')).equal('danger');
                });

                it(' has correct text', () => {
                    expect(component.getAttribute('text')).equal(test_text);
                });
            });
        });

        describe('children', () => {

            it(' are 2', () => {
                expect(component.shadowRoot.children.length).equal(2);
            });

            it(' first is styles', () => {
                expect(component.shadowRoot.children[0].tagName).equal('STYLE');
            });

            it(' second is div', () => {
                expect(component.shadowRoot.children[1].tagName).equal('DIV');
            });
        });

        describe('message', () => {
            // let message = component.shadowRoot.children[1];

            it(' has three classes', () => {
                expect(component.shadowRoot.children[1].classList.length).equal(3);
            });

            it(' has a message class', () => {
                expect(component.shadowRoot.children[1].classList.contains('message')).equal(true);
            });

            it(' has a message-dismissible class', () => {
                expect(component.shadowRoot.children[1].classList.contains('message-dismissible')).equal(true);
            });

            it(' has a message-error', () => {
                expect(component.shadowRoot.children[1].classList.contains('message-danger')).equal(true);
            });

            it(' has two children', () => {
                expect(component.shadowRoot.children[1].children.length).equal(2);
            });
            describe(' has a button and a div', () => {

                it(' first is button', () => {
                    expect(component.shadowRoot.children[1].children[0].tagName).equal('BUTTON');
                });

                describe(' and the button', () => {

                    it(' has two classes', () => {
                        expect(component.shadowRoot.children[1].children[0].classList.length).equal(2);
                    });

                    it(' has a message-close class', () => {
                        expect(component.shadowRoot.children[1].children[0].classList.contains('message-close')).equal(true);
                    });

                    it(' has a close class', () => {
                        expect(component.shadowRoot.children[1].children[0].classList.contains('close')).equal(true);
                    });

                    it(' a type attribute', () => {
                        expect(component.shadowRoot.children[1].children[0].getAttribute('type')).equal("button");
                    });

                    it(' an text equal to ×', () => {
                        expect(component.shadowRoot.children[1].children[0].innerHTML).to.include('×');
                    });
                });

                it(' second is div', () => {
                    expect(component.shadowRoot.children[1].children[1].tagName).equal('DIV');
                });

                describe(' and the div', () => {
                    it(' has the DEFAULTS.ERROR_MESSAGE', () => {
                        expect(component.shadowRoot.children[1].children[1].innerHTML).to.include(DEFAULTS.ERROR_MESSAGE);
                    });
                });
            });
        });
    });

    describe('#infoMessage', () => {
        let test_id = DEFAULTS.INFO_ID;
        let test_type = DEFAULTS.INFO_TYPE;
        let test_text = DEFAULTS.INFO_MESSAGE;

        beforeEach(() => {
            component = fixture.load(fixturePath)[FIXTURES.INFO];
            component.infoMessage = test_text;
        });

        describe('component tag', () => {
            describe('when defined', () => {

                it(' is correct', () => {
                    expect(component.tagName).equal('KG-WEB-MESSAGE');
                });

                it(' has correct id', () => {
                    expect(component.getAttribute('id')).equal(test_id);
                });

                it(' has correct infomessage', () => {
                    expect(component.getAttribute('infomessage')).equal(test_text);
                });

                it(' has correct type', () => {
                    expect(component.getAttribute('type')).equal(test_type);
                });

                it(' has correct text', () => {
                    expect(component.getAttribute('text')).equal(test_text);
                });
            });
        });

        // Note: it is not necessary to repeat the tests to validate that the correct HTML is build since the method that
        // assembles it simple replace values with parameters, without any logic
    });

    describe('#successMessage', () => {
        let test_id = DEFAULTS.SUCCESS_ID;
        let test_type = DEFAULTS.SUCCESS_TYPE;
        let test_text = DEFAULTS.SUCCESS_MESSAGE;

        beforeEach(() => {
            component = fixture.load(fixturePath)[FIXTURES.SUCCESS];
            component.successMessage = test_text;
        });

        describe('component tag', () => {
            describe('when defined', () => {

                it(' is correct', () => {
                    expect(component.tagName).equal('KG-WEB-MESSAGE');
                });

                it(' has correct id', () => {
                    expect(component.getAttribute('id')).equal(test_id);
                });

                it(' has correct type', () => {
                    expect(component.getAttribute('type')).equal(test_type);
                });

                it(' has correct text', () => {
                    expect(component.getAttribute('text')).equal(test_text);
                });
            });
        });

        // Note: it is not necessary to repeat the tests to validate that the correct HTML is build since the method that
        // assembles it simple replace values with parameters, without any logic
    });

    describe('#warningMessage', () => {
        let test_id = DEFAULTS.WARNING_ID;
        let test_type = DEFAULTS.WARNING_TYPE;
        let test_text = DEFAULTS.WARNING_MESSAGE;

        beforeEach(() => {
            component = fixture.load(fixturePath)[FIXTURES.WARNING];
            component.warningMessage = test_text;
        });

        describe('component tag', () => {
            describe('when defined', () => {

                it(' is correct', () => {
                    expect(component.tagName).equal('KG-WEB-MESSAGE');
                });

                it(' has correct id', () => {
                    expect(component.getAttribute('id')).equal(test_id);
                });

                it(' has correct type', () => {
                    expect(component.getAttribute('type')).equal(test_type);
                });

                it(' has correct text', () => {
                    expect(component.getAttribute('text')).equal(test_text);
                });
            });
        });
    });

    // Note: it is not necessary to repeat the tests to validate that the correct HTML is build since the method that
    // assembles it simple replace values with parameters, without any logic
});
