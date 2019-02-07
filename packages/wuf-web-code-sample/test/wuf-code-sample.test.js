/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

// TODO: Move test file to TypeScript.
// import 'mocha';
// import { expect } from 'chai';
// import 'karma-fixture';
import '@webcomponents/webcomponentsjs/webcomponents-lite';

import {WufCodeSample} from '../src/wuf-code-sample';

describe('<wuf-code-sample>', () => {
    let component;
    let fixturePath = 'wuf-code-sample.fixture.html';
    const FIXTURES = {
        DEFAULT: 0,
        SLOT: 1,
        STYLE: 2,
        ATTRIBUTES: 3,
        PROPERTIES: 4,
    };
    const DEFAULTS = {
        BOOLEAN: true,
        NUMBER: 42,
        STRING: 'Pickle',
        OBJECT: {
            foo: 'bar',
        },
    }

    before(() => {
        fixture.setBase('test/fixture')
    });

    afterEach(() => {
        fixture.cleanup()
    });

    describe('slot', () => {
        beforeEach(() => {
            component = fixture.load(fixturePath)[FIXTURES.DEFAULT]
        });

        it('does not exist', () => {
            // Firefox has different output so testing for inclusion instead of exact match.
            const slot = component.shadowRoot.querySelector('slot');
            expect(slot).to.be.null;
            // expect(slot.assignedNodes()[0].wholeText).to.include(DEFAULTS.STRING);
            // TODO: Switch to simpler test when Firefox is no longer polyfilled.
            // expect(component.innerText).equal('Cat');
        });
    });

    // describe('--wuf-code-sample-background-color', () => {
    // 	describe('with default', () => {
    // 		beforeEach(() => {
    // 			component = fixture.load(fixturePath)[FIXTURES.SLOT];
    // 		});
    //
    // 		it('is set', () => {
    // 			expect(getComputedStyle(component.shadowRoot.querySelector('.content')).backgroundColor).equal('rgb(250, 250, 250)');
    // 		});
    // 	});
    //
    // 	describe('with outside value', () => {
    // 		beforeEach(() => {
    // 			component = fixture.load(fixturePath)[FIXTURES.STYLE].querySelector('wuf-code-sample');
    // 		});
    //
    // 		it('is set blue', () => {
    // 			expect(getComputedStyle(component.shadowRoot.querySelector('.content')).backgroundColor).equal('rgb(0, 0, 255)');
    // 		});
    // 	});
    // });

    // describe('#name', () => {
    // 	beforeEach(() => {
    // 		component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
    // 	});
    //
    // 	describe('as property', () => {
    // 		describe('when defined', () => {
    // 			beforeEach(() => {
    // 				component.name = DEFAULTS.STRING;
    // 			});
    //
    // 			it('is gettable', () => {
    // 				expect(component.name).equal(DEFAULTS.STRING);
    // 			});
    //
    // 			it('is reflected to attribute', () => {
    // 				expect(component.getAttribute('name')).equal(DEFAULTS.STRING);
    // 			});
    //
    // 			it('is rendered in shadowRoot', () => {
    // 				expect(component.shadowRoot.querySelector('.content').innerText).to.include(`name: ${DEFAULTS.STRING}`);
    // 			});
    // 		});
    //
    // 		describe('when undefined', () => {
    // 			beforeEach(() => {
    // 				component.name = null;
    // 			});
    //
    // 			it('is gettable', () => {
    // 				expect(component.name).equal(null);
    // 			});
    //
    // 			it('is not reflected to attribute', () => {
    // 				expect(component.hasAttribute('name')).to.be.false;
    // 			});
    //
    // 			it('is not rendered in shadowRoot', () => {
    // 				expect(component.shadowRoot.querySelector('.content').innerText).to.include(`name: N/A`);
    // 			});
    // 		});
    // 	});
    //
    // 	describe('as attribute', () => {
    // 		describe('when defined', () => {
    // 			beforeEach(() => {
    // 				component.setAttribute('name', DEFAULTS.STRING);
    // 			});
    //
    // 			it('is gettable', () => {
    // 				expect(component.name).equal(DEFAULTS.STRING);
    // 			});
    //
    // 			it('is reflected to attribute', () => {
    // 				expect(component.getAttribute('name')).equal(DEFAULTS.STRING);
    // 			});
    //
    // 			it('is rendered in shadowRoot', () => {
    // 				expect(component.shadowRoot.querySelector('.content').innerText).to.include(`name: ${DEFAULTS.STRING}`);
    // 			});
    // 		});
    //
    // 		describe('when undefined', () => {
    // 			beforeEach(() => {
    // 				component.removeAttribute('name');
    // 			});
    //
    // 			it('is gettable', () => {
    // 				expect(component.name).equal(null);
    // 			});
    //
    // 			it('is not reflected to attribute', () => {
    // 				expect(component.hasAttribute('name')).to.be.false;
    // 			});
    //
    // 			it('is not rendered in shadowRoot', () => {
    // 				expect(component.shadowRoot.querySelector('.content').innerText).to.include(`name: N/A`);
    // 			});
    // 		});
    // 	});
    // });

});
