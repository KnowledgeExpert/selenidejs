import { By, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
export declare namespace ElementsBuilder {
    function element(cssOrXpathOrBy: string | By): (context: Element | Driver) => Element;
    const parent: (element: Element) => Element;
    function followingSibling(predicate?: string): (element: Element) => Element;
    function all(cssOrXpathOrBy: string | By): (context: Element | Driver) => Collection;
    function filtered(condition: Condition<Element>): (collection: Collection) => Collection;
    function nth(index: number): (collection: Collection) => Element;
    function find(condition: Condition<Element>): (collection: Collection) => Element;
    function wrapElement(webelement: WebElement): (driver: Driver) => Element;
    function wrapAll(webelements: WebElement[]): (driver: Driver) => Collection;
}
