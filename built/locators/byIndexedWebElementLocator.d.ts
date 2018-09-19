import { WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { Locator } from './locator';
export declare class ByIndexedWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly searchContext;
    private readonly index;
    constructor(index: number, searchContext: Collection);
    find(): Promise<WebElement>;
    toString(): string;
}
