import { Collection } from '../collection';
import { WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
import { ElementCondition } from '../../conditions/elementCondition';
export declare class ByFilteredWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly elementCondition;
    private readonly searchContext;
    constructor(condition: ElementCondition, searchContext: Collection);
    find(): Promise<WebElement[]>;
    toString(): string;
}
