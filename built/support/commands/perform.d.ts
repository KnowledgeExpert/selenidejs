/// <reference types="node" />
import { Element } from '../../element';
import { Browser } from '../../browser';
export declare namespace perform {
    const click: (element: Element) => Promise<Element>;
    const doubleClick: (element: Element) => Promise<Element>;
    const contextClick: (element: Element) => Promise<Element>;
    const hover: (element: Element) => Promise<Element>;
    const type: (keys: string | number) => (element: Element) => Promise<Element>;
    const setValue: (value: string | number) => (element: Element) => Promise<Element>;
    const pressEnter: (element: Element) => Promise<Element>;
    const pressTab: (element: Element) => Promise<Element>;
    const pressEscape: (element: Element) => Promise<Element>;
    namespace js {
        const click: (element: Element) => Promise<Element>;
        const clickWithOffset: (xOffset: number, yOffset: number) => (element: Element) => Promise<Element>;
        const setValue: (value: string | number) => (element: Element) => Promise<Element>;
        const type: (keys: string | number) => (element: Element) => Promise<Element>;
        const scrollIntoView: (element: Element) => Promise<Element>;
    }
    const open: (url: string) => (browser: Browser) => Promise<Browser>;
    const resizeWindow: (width: number, height: number) => (browser: Browser) => Promise<Browser>;
    const screenshot: (browser: Browser) => Promise<Buffer>;
    const closeCurrentTab: (browser: Browser) => Promise<Browser>;
    const quit: (browser: Browser) => Promise<void>;
    const back: (browser: Browser) => Promise<void>;
    const forward: (browser: Browser) => Promise<void>;
    const refresh: (browser: Browser) => Promise<void>;
    const goToNextTab: (browser: Browser) => Promise<Browser>;
    const goToPreviousTab: (browser: Browser) => Promise<Browser>;
    const goToTab: (indexOrId: string | number) => (browser: Browser) => Promise<Browser>;
    const switchToFrame: (frameElement: Element) => (browser: Browser) => Promise<Browser>;
    const switchToDefaultFrame: (browser: Browser) => Promise<Browser>;
    const clearLocalStorage: (browser: Browser) => Promise<Browser>;
    const clearSessionStorage: (browser: Browser) => Promise<Browser>;
    const clearCookies: (browser: Browser) => Promise<Browser>;
    const executeScript: (script: string | Function, ...args: any[]) => (browser: Browser) => Promise<{}>;
}
