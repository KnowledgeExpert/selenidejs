import { WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { Locator } from './locator';
export declare class ByIndexedWebElementLocator implements Locator<WebElement> {
    private readonly collection;
    private readonly index;
    constructor(index: number, collection: Collection);
    find(): Promise<WebElement>;
    toString(): string;
}
