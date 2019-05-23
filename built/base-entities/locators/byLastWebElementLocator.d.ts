import { WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
import { Collection } from '../collection';
export declare class ByLastWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly searchContext;
    constructor(searchContext: Collection);
    find(): Promise<WebElement>;
    toString(): string;
}
