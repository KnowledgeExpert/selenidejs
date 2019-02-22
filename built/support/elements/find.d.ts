import { Element } from '../../element';
import { By } from 'selenium-webdriver';
import { Collection } from '../../collection';
import { Browser } from '../../browser';
export declare namespace find {
    const element: (cssOrXpathOrBy: string | By) => (context: Element | Browser) => Element;
    const all: (cssOrXpathOrBy: string | By) => (context: Element | Browser) => Collection;
    const parent: (element: Element) => Element;
    const followingSibling: (predicate?: string) => (element: Element) => Element;
    const visibleElement: (cssOrXpathOrBy: string | By) => (element: Element) => Element;
    const elementAt: (index: number) => (collection: Collection) => Element;
    const first: (collection: Collection) => Element;
    const elementBy: (condition: import("../../wait").Query<Element, void>) => (collection: Collection) => Element;
    const filteredBy: (condition: import("../../wait").Query<Element, void>) => (collection: Collection) => Collection;
    const alert: (browser: Browser) => import("selenium-webdriver").AlertPromise;
}
