import { By, WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
import { Browser } from '../browser';
export declare class BrowserWebElementByLocator implements Locator<Promise<WebElement>> {
    private readonly by;
    private readonly browser;
    constructor(by: By, browser: Browser);
    find(): Promise<WebElement>;
    toString(): string;
}
