export declare class KgWebMessage extends HTMLElement {
    constructor();

    static readonly observedAttributes: string[];

    connectedCallback(): void;

    disconnectedCallback(): void;

    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any): void;

    /**
     * Getters and setters
     */
    errorMessage: string;
    infoMessage: string;
    successMessage: string;
    warningMessage: string;
    /**
     * Internal Logic
     */
    type: string;
    text: string;
    /**
     * Rendering Logic
     */
    private readonly styles;
    private readonly template;

    render(type: string, text: string): void;
}
