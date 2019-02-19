/// <reference types="node" />
import { Element } from '../../element';
import { Browser } from '../../browser';
export declare namespace perform {
    const click: (element: Element) => Promise<Element>;
    const clickByJs: (xOffset?: number, yOffset?: number) => (element: Element) => Promise<Element>;
    const doubleClick: (element: Element) => Promise<Element>;
    const contextClick: (element: Element) => Promise<Element>;
    const hover: (element: Element) => Promise<Element>;
    const scrollIntoView: (element: Element) => Promise<Element>;
    const sendKeys: (value: string | number) => (element: Element) => Promise<Element>;
    const setValue: (value: string | number) => (element: Element) => Promise<Element>;
    const setValueByJs: (value: string | number) => (element: Element) => Promise<Element>;
    const pressEnter: (element: Element) => Promise<Element>;
    const pressTab: (element: Element) => Promise<Element>;
    const pressEscape: (element: Element) => Promise<Element>;
    const open: (url: string) => (browser: Browser) => Promise<Browser>;
    const resizeWindow: (width: number, height: number) => (browser: Browser) => Promise<Browser>;
    const screenshot: (browser: Browser) => Promise<Buffer>;
    const closeCurrentTab: (browser: Browser) => Promise<Browser>;
    const quit: (browser: Browser) => Promise<void>;
    const nextTab: (browser: Browser) => Promise<Browser>;
    const previousTab: (browser: Browser) => Promise<Browser>;
    const switchToFrame: (frameElement: Element) => (browser: Browser) => Promise<Browser>;
    const switchToDefaultFrame: (browser: Browser) => Promise<Browser>;
    const clearCacheAndCookies: (browser: Browser) => Promise<Browser>;
    const executeScript: (script: string | Function, ...args: any[]) => (browser: Browser) => Promise<{}>;
}
