import { Query } from '../wait';
import { Element } from '../element';
import { Collection } from '../collection';
import { Browser } from '../browser';
export declare type ElementQuery<R> = Query<Element, R>;
export declare namespace query {
    namespace element {
        const isVisible: (element: Element) => Promise<boolean>;
        const isEnabled: (element: Element) => Promise<boolean>;
        function text(element: Element): Promise<string>;
        function hasText(text: string): (element: Element) => Promise<boolean>;
        const attribute: (name: string) => (element: Element) => Promise<string>;
    }
    namespace collection {
        function size(collection: Collection): Promise<number>;
        function texts(collection: Collection): Promise<string[]>;
    }
    namespace browser {
        function url(browser: Browser): Promise<string>;
        function tabsNumber(browser: Browser): Promise<number>;
    }
}
