import { Query } from '../wait';
import { Element } from '../element';
import { Collection } from '../collection';
import { Browser } from '../browser';
import { By } from 'selenium-webdriver';
export declare type ElementQuery<R> = Query<Element, R>;
export declare namespace query {
    namespace element {
        const isVisible: (element: Element) => Promise<boolean>;
        const hasVisibleElement: (by: By) => (element: Element) => Promise<boolean>;
        const isEnabled: (element: Element) => Promise<boolean>;
        const isPresent: (element: Element) => Promise<boolean>;
        const isFocused: (element: Element) => Promise<boolean>;
        const hasAttribute: (name: string) => (element: Element) => Promise<boolean>;
        const text: (element: Element) => Promise<string>;
        function hasText(text: string): (element: Element) => Promise<boolean>;
        const attribute: (name: string) => (element: Element) => Promise<string>;
    }
    namespace collection {
        const size: (collection: Collection) => Promise<number>;
        const hasSize: (length: number) => (collection: Collection) => Promise<boolean>;
        function texts(collection: Collection): Promise<string[]>;
    }
    namespace browser {
        function url(browser: Browser): Promise<string>;
        function tabsNumber(browser: Browser): Promise<number>;
    }
}
