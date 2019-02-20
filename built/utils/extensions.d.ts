import { By } from 'selenium-webdriver';
import { Browser } from '../browser';
export declare namespace Extensions {
    function savePageSource(browser: Browser, filePath: string): Promise<string>;
    function saveScreenshot(browser: Browser, filePath: string): Promise<string>;
    function toBy(cssOrXpathOrBy: string | By): By;
    function isAbsoluteUrl(relativeOrAbsoluteUrl: string): boolean;
}
