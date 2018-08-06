import { By, WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
import { Element } from "../element";
import { Driver } from "../driver";
export declare class ByWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly by;
    private readonly searchContext;
    constructor(by: By, searchContext: Element | Driver);
    find(): Promise<WebElement[]>;
    toString(): string;
}
