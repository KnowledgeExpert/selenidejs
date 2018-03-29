import { By, WebElement } from 'selenium-webdriver';
import { Element } from '../element';
import { Locator } from './locator';
export declare class ByWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly by;
    private readonly searchContext;
    constructor(by: By, searchContext?: Element);
    find(): Promise<WebElement[]>;
    toString(): string;
}
