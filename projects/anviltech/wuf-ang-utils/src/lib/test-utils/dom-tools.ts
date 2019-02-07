/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Exported DOM accessor utility functions
 */
export const _dom = {
    hasStyle,
    getDistributedNodes,
    getShadowRoot,
    getText,
    getStyle,
    childNodes,
    childNodesAsList,
    hasClass,
    hasShadowRoot,
    isCommentNode,
    isElementNode,
    isPresent,
    isShadowRoot,
    tagName
};

// ******************************************************************************************
// These functions are cloned from
//  *  @angular/platform-browser/src/browser/GenericBrowserDomAdapter
// and are to be used ONLY internally in custom-matchers.ts and Unit Tests
// ******************************************************************************************

function getStyle(element: any, stylename: string): string {
    return element.style[stylename];
}

function hasStyle(element: any, styleName: string, styleValue: string = null): boolean {
    const value = this.getStyle(element, styleName) || '';
    return styleValue ? value == styleValue : value.length > 0;
}

function getDistributedNodes(el: HTMLElement): Node[] {
    return (<any>el).getDistributedNodes();
}

function getShadowRoot(el: HTMLElement): DocumentFragment {
    return (<any>el).shadowRoot;
}

function getText(el: Node): string {
    return el.textContent;
}

function childNodesAsList(el: Node): any[] {
    const childNodes = el.childNodes;
    const res = new Array(childNodes.length);
    for (let i = 0; i < childNodes.length; i++) {
        res[i] = childNodes[i];
    }
    return res;
}

function hasClass(element: any, className: string): boolean {
    return element.classList.contains(className);
}

function childNodes(el: any): Node[] {
    return el.childNodes;
}

function hasShadowRoot(node: any): boolean {
    return isPresent(node.shadowRoot) && node instanceof HTMLElement;
}

function isCommentNode(node: Node): boolean {
    return node.nodeType === Node.COMMENT_NODE;
}

function isElementNode(node: Node): boolean {
    return node.nodeType === Node.ELEMENT_NODE;
}

function isShadowRoot(node: any): boolean {
    return node instanceof DocumentFragment;
}

function isPresent(obj: any): boolean {
    return obj != null;
}

function tagName(element: any): string {
    return element.tagName;
}
