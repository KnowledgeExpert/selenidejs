import { By } from 'selenium-webdriver';
import { Browser } from './browser';
export declare namespace Utils {
    function savePageSource(selenideDriver: Browser, filePath: string): Promise<string>;
    function saveScreenshot(selenideDriver: Browser, filePath: string): Promise<string>;
    function toBy(cssOrXpathOrBy: string | By): By;
    function lambda(toString: string, fn: any): any;
}
