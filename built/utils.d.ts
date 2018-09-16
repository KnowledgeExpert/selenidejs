import { By } from 'selenium-webdriver';
import { Driver } from './baseEntities/driver';
export declare namespace Utils {
    function savePageSource(selenideDriver: Driver, filePath: string): Promise<string>;
    function saveScreenshot(selenideDriver: Driver, filePath: string): Promise<string>;
    function toBy(cssOrXpathOrBy: string | By): By;
}
