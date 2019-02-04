import { Query } from '../wait';
import { Element } from '../element';
import { Collection } from '../collection';
import { Browser } from '../browser';
import { By } from 'selenium-webdriver';
export declare type ElementQuery<R> = Query<Element, R>;
/**
 * raw queries on actual element's webelement
 * raw means - without any waiting...
 *
 * all are implemented through element.getWebElement()
 * e.g. element.getWebElement().getText over element.text()
 * because element.text() already has waiting built in.
 * this is needed, because these queries are used not only to build corresponding element methods
 * with waiting built in
 * but also for conditions...
 *
 * hence, these functions are not supposed to be used in "perform/get" context:
 *   `element.click().then(query.element.text)`
 * this query may fail if element was absent after click for some milliseconds...
 * use the following alternative instead:
 *   `element.click().then(get.text)`
 */
export declare namespace query {
    namespace element {
        const isVisible: (element: Element) => Promise<boolean>;
        const hasVisibleElement: (by: By) => (element: Element) => Promise<boolean>;
        const isEnabled: (element: Element) => Promise<boolean>;
        const isPresent: (element: Element) => Promise<boolean>;
        const isFocused: (element: Element) => Promise<boolean>;
        const text: (element: Element) => Promise<string>;
        const hasText: (text: string) => (element: Element) => Promise<boolean>;
        const attribute: (name: string) => (element: Element) => Promise<string>;
        const hasAttribute: (name: string) => (element: Element) => Promise<boolean>;
        const innerHtml: (element: Element) => Promise<string>;
        const outerHtml: (element: Element) => Promise<string>;
        const value: (element: Element) => Promise<string>;
    }
    namespace collection {
        const size: (collection: Collection) => Promise<number>;
        const hasSize: (length: number) => (collection: Collection) => Promise<boolean>;
        const texts: (collection: Collection) => Promise<string[]>;
    }
    namespace browser {
        const url: (browser: Browser) => Promise<string>;
        const tabsNumber: (browser: Browser) => Promise<number>;
    }
}
