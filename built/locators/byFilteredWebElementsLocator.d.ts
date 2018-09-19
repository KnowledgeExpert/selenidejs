import { WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { ElementCondition } from '../conditions/elementCondition';
import { Locator } from './locator';
export declare class ByFilteredWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly elementCondition;
    private readonly searchContext;
    constructor(condition: ElementCondition, searchContext: Collection);
    find(): Promise<WebElement[]>;
    toString(): string;
}
