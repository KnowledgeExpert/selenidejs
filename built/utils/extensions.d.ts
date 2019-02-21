import { By, WebDriver } from 'selenium-webdriver';
export declare namespace Extensions {
    function savePageSource(driver: WebDriver, filePath: string): Promise<string>;
    function saveScreenshot(driver: WebDriver, filePath: string): Promise<string>;
    function toBy(cssOrXpathOrBy: string | By): By;
    function isAbsoluteUrl(relativeOrAbsoluteUrl: string): boolean;
}
