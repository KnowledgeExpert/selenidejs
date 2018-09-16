import { WebElement } from 'selenium-webdriver';
import { ElementCondition } from '../../conditions/elementCondition';
import { Collection } from '../collection';
import { Locator } from './locator';
export declare class ByFilteredWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly elementCondition;
    private readonly collection;
    constructor(condition: ElementCondition, collection: Collection);
    find(): Promise<WebElement[]>;
    toString(): string;
}
