import { WebElement } from 'selenium-webdriver';
import { ElementCondition } from '../conditions';
import { Collection } from '../collection';
import { Locator } from './locator';
export declare class FilteredByConditionWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly condition;
    private readonly collection;
    constructor(condition: ElementCondition, collection: Collection);
    find(): Promise<WebElement[]>;
    toString(): string;
}
