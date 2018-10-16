import { By, WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
import { SearchContext } from './searchContext';
export declare class ByWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly by;
    private readonly context;
    constructor(by: By, searchContext: SearchContext);
    find(): Promise<WebElement[]>;
    toString(): string;
}
