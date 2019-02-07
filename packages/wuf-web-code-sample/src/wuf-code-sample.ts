/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

// Inspiration derived from: https://www.webcomponents.org/element/kcmr/code-sample

import { html, render, TemplateResult, Template } from 'lit-html';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';

// Import external assets.
// NOTE: 'require' in the following is made possible by @types/node
const css = require('./wuf-code-sample.scss');
const hljs = require('highlight.js');

export class WufCodeSample extends HTMLElement {

    private defaultCopyLabel = 'Copy';
    private defaultCopyLabelError = 'Error';
    private defaultCopyLabelDone = 'Done';

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes(): string[] {
        return ['code'];
    }

    connectedCallback() {
        // this.validate(() => {
        this.upgradeProperties();
        this.render();
        // });
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any) {
        this.render();
    }

    private upgradeProperties() {
        // Support lazy properties https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
        (<any>this).constructor['observedAttributes'].forEach((prop: string) => {
            if (this.hasOwnProperty(prop)) {
                const value = (<any>this)[prop];
                delete (<any>this)[prop];
                (<any>this)[prop] = value;
            }
        });
    }

    /**
     * Copy button label (optional)
     */
    get label_copy(): string {
        let label = this.hasAttribute('copy-label') ? this.getAttribute('copy-label') : this.defaultCopyLabel;

        return label;
    }

    set label_copy(value: string) {
        if (value) {
            this.setAttribute('copy-label', value);
        } else {
            this.removeAttribute('copy-label');
        }
    }

    /**
     * Copy button label - Done (optional)
     */
    get label_copy_done(): string {
        let label = this.hasAttribute('copy-label-done') ? this.getAttribute('copy-label-done') : this.defaultCopyLabelDone;

        return label;
    }

    set label_copy_done(value: string) {
        if (value) {
            this.setAttribute('copy-label-done', value);
        } else {
            this.removeAttribute('copy-label-done');
        }
    }

    /**
     * Copy button label - Error (optional)
     */
    get label_copy_error(): string {
        let label = this.hasAttribute('copy-label-error') ? this.getAttribute('copy-label-error') : this.defaultCopyLabelError;

        return label;
    }

    set label_copy_error(value: string) {
        if (value) {
            this.setAttribute('copy-label-error', value);
        } else {
            this.removeAttribute('copy-label-error');
        }
    }

    /**
     * Code type (optional). (eg.: html, js, css)
     * Options are the same as the available classes for `<code>` tag using highlight.js
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

    /**
     * Code to render with highlighting
     */
    get code(): string {
        return this.getAttribute('code');
    }

    set code(value: string) {
        if (value) {
            this.setAttribute('code', value);
        }
        else {
            this.removeAttribute('code');
        }
    }

    /**
     * Display a copy to clipboard button
     */
    get showCopyButton(): boolean {
        return this.hasAttribute('showCopyButton');
    }

    set showCopyButton(value: boolean) {
        if (value) {
            let value = 'true';
            this.setAttribute('showCopyButton', value);
        } else {
            this.removeAttribute('showCopyButton');
        }
    }

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
        let template = html`
			<div class="code-container-wrap">
				<pre>
					<code></code>
				</pre>
				<button id="code-copy-button" title="Copy to clipboard"></button>
			</div>
		`;

        return template;
    }

    private cleanIndentation(str: string) {
        let pattern: any = str.match(/\s*\n[\t\s]*/);
        return str.replace(new RegExp(pattern, 'g'), '\n');
    }

    private entitize(str: string) {
        return String(str)
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/=""/g, '')
        .replace(/=&gt;/g, '=>')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    copyToClipboard() {
        let tempNode = document.createElement('textarea');
        let result = false;
        let copyButton = this.shadowRoot.querySelector('button#code-copy-button');

        // Create a temporary textarea to use as a host
        document.body.appendChild(tempNode);
        tempNode.value = this.cleanIndentation(this.getCode());
        tempNode.select();

        // Copy
        try {
            result = document.execCommand('copy', false);
            if (copyButton) copyButton.textContent = this.label_copy_done;
        }
        catch (err) {
            // Copy command is not available
            console.error(err);
            if (copyButton) copyButton.textContent = this.label_copy_error;
        }

        // Remove temp node
        tempNode.remove();

        // Return the original copy button label after 1 second.
        setTimeout(this.resetCopyButton.bind(this), 1000);
        return result;
    }

    private resetCopyButton() {
        let copyButton = this.shadowRoot.querySelector('button#code-copy-button');

        if (!copyButton) return;

        copyButton.textContent = this.label_copy;

        copyButton.addEventListener('click', () => {
            this.copyToClipboard();
        });
    }

    private getCode(): string {
        const codeStr: string = (this.code) ? this.code : this.innerHTML;

        return codeStr;
    }

    private highlight() {

        // Remove the copy to clipboard button if it isn't needed
        const copyButton = this.shadowRoot.querySelector('button#code-copy-button');

        if (!this.showCopyButton && copyButton) {
            if (copyButton) copyButton.parentNode.removeChild(copyButton);
        }

        // User passed in code via attribute or as innerHTML.  If both, attribute wins.
        const codeStr: string = this.getCode();
        const cleanedCodeStr = this.entitize(this.cleanIndentation(codeStr));
        const codeTag = this.shadowRoot.querySelector('pre code');

        // Add a type classname for highlight.js
        if (this.type) {
            codeTag.classList.add(this.type);
        }

        // Apply the code to the <code> tag
        codeTag.innerHTML = cleanedCodeStr;

        // Now highlight the code
        hljs.highlightBlock(codeTag);
    }

    private render() {
        render(html`${this.styles}${this.template}`, this.shadowRoot);
        this.resetCopyButton();
        setTimeout(() => {
            this.highlight();
        }, 1);
    }
}

window.customElements.define('wuf-code-sample', WufCodeSample);
