import { Element } from '../../element';
import { By } from 'selenium-webdriver';
import { Collection } from '../../collection';
import { Browser } from '../../browser';
export declare namespace find {
    const element: (cssOrXpathOrBy: string | By) => (context: Browser | Element) => Element;
    const all: (cssOrXpathOrBy: string | By) => (context: Browser | Element) => Collection;
    const parent: (element: Element) => Element;
    const followingSibling: (element: Element) => Element;
    const elementAt: (index: number) => (collection: Collection) => Element;
    const first: (collection: Collection) => Element;
    const sliced: (start: number, end: number) => (collection: Collection) => Collection;
    const elementBy: (condition: import("../../wait").Query<Element, void>) => (collection: Collection) => Element;
    const filteredBy: (condition: import("../../wait").Query<Element, void>) => (collection: Collection) => Collection;
    const alert: (browser: Browser) => import("selenium-webdriver").AlertPromise;
}
