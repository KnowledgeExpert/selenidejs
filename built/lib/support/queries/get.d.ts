import { Element } from '../../element';
import { Collection } from '../../collection';
import { Browser } from '../../browser';
/**
 * to be used in the following context:
 *   `element.click().then(get.text)`
 */
export declare namespace get {
    const text: (element: Element) => Promise<string>;
    const someText: (element: Element) => Promise<string>;
    const attribute: (name: string) => (element: Element) => Promise<string>;
    const innerHtml: (element: Element) => Promise<string>;
    const outerHtml: (element: Element) => Promise<string>;
    const value: (element: Element) => Promise<string>;
    const size: (collection: Collection) => Promise<number>;
    const texts: (collection: Collection) => Promise<string[]>;
    const url: (browser: Browser) => Promise<string>;
    const title: (browser: Browser) => Promise<string>;
    const tabs: (browser: Browser) => Promise<string[]>;
    const tab: (index: number) => (browser: Browser) => Promise<string>;
    const currentTab: (browser: Browser) => Promise<string>;
    const tabsNumber: (browser: Browser) => Promise<number>;
    const pageSource: (browser: Browser) => Promise<string>;
}
