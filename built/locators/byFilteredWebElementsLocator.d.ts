import { WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { Condition } from '../condition';
import { Element } from '../element';
import { Locator } from './locator';
export declare class ByFilteredWebElementsLocator implements Locator<WebElement[]> {
    private readonly elementCondition;
    private readonly collection;
    constructor(condition: Condition<Element>, collection: Collection);
    find(): Promise<WebElement[]>;
    toString(): string;
}
