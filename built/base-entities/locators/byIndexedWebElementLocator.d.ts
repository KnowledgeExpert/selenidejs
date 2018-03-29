import { WebElement } from 'selenium-webdriver';
import { Locator } from "./locator";
import { Collection } from "../collection";
export declare class ByIndexedWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly searchContext;
    private readonly index;
    constructor(index: number, searchContext: Collection);
    find(): Promise<WebElement>;
    toString(): string;
}
