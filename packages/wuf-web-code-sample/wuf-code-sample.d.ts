/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

export declare class WufCodeSample extends HTMLElement {
    private defaultCopyLabel;
    private defaultCopyLabelError;
    private defaultCopyLabelDone;

    constructor();

    static readonly observedAttributes: string[];

    connectedCallback(): void;

    disconnectedCallback(): void;

    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any): void;

    private upgradeProperties();

    /**
     * Copy button label (optional)
     */
    label_copy: string;
    /**
     * Copy button label - Done (optional)
     */
    label_copy_done: string;
    /**
     * Copy button label - Error (optional)
     */
    label_copy_error: string;
    /**
     * Code type (optional). (eg.: html, js, css)
     * Options are the same as the available classes for `<code>` tag using highlight.js
     */
    type: string;
    /**
     * Code to render with highlighting
     */
    code: string;
    /**
     * Display a copy to clipboard button
     */
    showCopyButton: boolean;
    private readonly styles;
    private readonly template;

    private cleanIndentation(str);

    private entitize(str);

    copyToClipboard(): boolean;

    private resetCopyButton();

    private getCode();

    private highlight();

    private render();
}
