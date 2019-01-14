import { By } from 'selenium-webdriver';
import { Browser } from './browser';
import { Element } from './element';
export declare namespace Utils {
    function savePageSource(selenideDriver: Browser, filePath: string): Promise<string>;
    function saveScreenshot(selenideDriver: Browser, filePath: string): Promise<string>;
    function isDriver(entity: Browser | Element): boolean;
    function toBy(cssOrXpathOrBy: string | By): By;
    function lambda(toString: string, fn: any): any;
}
