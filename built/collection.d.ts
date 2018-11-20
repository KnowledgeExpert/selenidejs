import { WebElement } from 'selenium-webdriver';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
import { Locator } from './locators/locator';
export declare class Collection {
    private readonly driver;
    private readonly locator;
    private readonly wait;
    constructor(locator: Locator<Promise<WebElement[]>> | Locator<WebElement[]>, driver: Driver);
    should(condition: Condition<Collection>, timeout?: number): Promise<Collection>;
    shouldNot(condition: Condition<Collection>, timeout?: number): Promise<Collection>;
    is(condition: Condition<Collection>, timeout?: number): Promise<boolean>;
    isNot(condition: Condition<Collection>, timeout?: number): Promise<boolean>;
    get(index: number): Element;
    first(): Element;
    filter(condition: Condition<Element>): Collection;
    filterBy(condition: Condition<Element>): Collection;
    findBy(condition: Condition<Element>): Element;
    size(): Promise<number>;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
