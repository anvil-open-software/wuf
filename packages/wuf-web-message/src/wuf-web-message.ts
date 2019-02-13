/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { html, render, TemplateResult } from 'lit-html';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';

// Import external assets.
// NOTE: 'require' in the following is made possible by @types/node
let css = require('./wuf-web-message.scss');

export class WufWebMessage extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        render(this.styles, this.shadowRoot);
    }

    static get observedAttributes(): string[] {
        return ['errorMessage', 'infoMessage', 'successMessage', 'warningMessage'];
    }

    connectedCallback() {
        this.render(null, null);
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any) {
        this.render(null, null);
    }

    /**
     * Getters and setters
     */

    get errorMessage(): string {
        return this.getAttribute('errorMessage');
    }

    set errorMessage(value: string) {
        // console.log('WufWebMessages::errorMessage');
        if (value) {
            this.setAttribute('errorMessage', value);
            // naturally the attribute should be set to error. Since it is used
            // to control the class and the class name is danger, we use danger!
            this.render('danger', value);
        }
        else {
            this.removeAttribute('errorMessage');
        }
    }

    get infoMessage(): string {
        return this.getAttribute('infoMessage');
    }

    set infoMessage(value: string) {
        // console.log('WufWebMessages::infoMessage');
        if (value) {
            this.setAttribute('infoMessage', value);
            this.render('info', value);
        }
        else {
            this.removeAttribute('infoMessage');
        }
    }

    get successMessage(): string {
        return this.getAttribute('successMessage');
    }

    set successMessage(value: string) {
        // console.log('WufWebMessages::successMessage');
        if (value) {
            this.setAttribute('successMessage', value);
            this.render('success', value);
        }
        else {
            this.removeAttribute('successMessage');
        }
    }

    get warningMessage(): string {
        return this.getAttribute('warningMessage');
    }

    set warningMessage(value: string) {
        // console.log('WufWebMessages::warningMessage');
        if (value) {
            this.setAttribute('warningMessage', value);
            this.render('warning', value);
        }
        else {
            this.removeAttribute('warningMessage');
        }
    }

    /**
     * Internal Logic
     */

    get type(): string {
        return this.getAttribute('type');
    }

    set type(value: string) {
        if (value) {
            this.setAttribute('type', value);
        } else {
            this.removeAttribute('type');
        }
    }

    get text(): string {
        return this.getAttribute('text');
    }

    set text(value: string) {
        if (value) {
            this.setAttribute('text', value);
        } else {
            this.removeAttribute('text');
        }
    }

    /**
     * Rendering Logic
     */

    private get styles(): TemplateResult {
        let externalCss: any = css;
        let rawStyle = `
			<style>
				${externalCss}
			</style>
		`;

        return html`${unsafeHTML(rawStyle)}`;
    }

    private get template(): TemplateResult {
        return html`
            <button class="message-close close" type="button">&times;</button>
            <div>${this.text}</div>
    `;
    }

    render(type: string, text: string) {
        // console.log('WufWebMessages::render');
        if (type === null) return;
        this.type = type;
        this.text = text;

        const myDiv = document.createElement('DIV');
        myDiv.classList.add('message');
        myDiv.classList.add('message-dismissible');
        myDiv.classList.add('message-' + this.type);
        myDiv.addEventListener('click', function () {
            this.remove();
        }, true);
        render(this.template, myDiv);
        this.shadowRoot.appendChild(myDiv);
    }
}

window.customElements.define('wuf-web-message', WufWebMessage);
