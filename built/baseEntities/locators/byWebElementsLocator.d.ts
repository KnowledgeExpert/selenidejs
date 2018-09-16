import { By, WebElement } from 'selenium-webdriver';
import { SearchContext } from '../SearchContext';
import { Locator } from './locator';
export declare class ByWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly by;
    private readonly context;
    constructor(by: By, searchContext: SearchContext);
    find(): Promise<WebElement[]>;
    toString(): string;
}
