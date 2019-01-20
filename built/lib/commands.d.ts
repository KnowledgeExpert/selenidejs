import { Element } from './element';
export declare namespace command {
    namespace element {
        const executeScript: (scriptOnThisWebElement: string, ...additionalArgs: any[]) => (element: Element) => Promise<{}>;
        const click: () => (element: Element) => Promise<Element>;
        const clickByJs: (xOffset?: number, yOffset?: number) => (element: Element) => Promise<Element>;
        const doubleClick: () => (element: Element) => Promise<Element>;
        const contextClick: () => (element: Element) => Promise<Element>;
        const hover: () => (element: Element) => Promise<Element>;
        const scrollIntoView: () => (element: Element) => Promise<Element>;
        const sendKeys: (value: string | number) => (element: Element) => Promise<Element>;
        const setValue: (value: string | number) => (element: Element) => Promise<Element>;
        const setValueByJs: (value: string | number) => (element: Element) => Promise<Element>;
        const pressEnter: () => (element: Element) => Promise<Element>;
        const pressTab: () => (element: Element) => Promise<Element>;
        const pressEscape: () => (element: Element) => Promise<Element>;
    }
}
