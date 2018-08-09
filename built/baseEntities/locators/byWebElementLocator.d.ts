import { By, WebElement } from 'selenium-webdriver';
import { Driver } from '../driver';
import { Element } from '../element';
import { Locator } from './locator';
export declare class ByWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly by;
    private readonly searchContext;
    constructor(by: By, searchContext: Element | Driver);
    find(): Promise<WebElement>;
    toString(): string;
}
