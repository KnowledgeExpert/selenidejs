import { By } from 'selenium-webdriver';
import { Collection } from './collection';
import { Driver } from './driver';
import { Element } from './element';
export declare namespace Utils {
    function savePageSource(selenideDriver: Driver, filePath: string): Promise<string>;
    function saveScreenshot(selenideDriver: Driver, filePath: string): Promise<string>;
    function toBy(cssOrXpathOrBy: string | By): By;
    function getDriver(entity: Element | Collection): Driver;
}
