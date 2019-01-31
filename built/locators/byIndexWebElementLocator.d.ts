import { WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { Locator } from './locator';
export declare class ByIndexWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly index;
    private readonly collection;
    constructor(index: number, collection: Collection);
    find(): Promise<WebElement>;
    toString(): string;
}
