import { By } from 'selenium-webdriver';
export declare namespace Utils {
    function savePageSource(filePath?: any): Promise<string>;
    function saveScreenshot(filePath?: any): Promise<string>;
    function buildFilePath(path: string): void;
    function getSelenidejsParam(dotSeparatedPath: string): any;
    function getValueFromPath(obj: any, objPath: string): any;
    function toBy(cssOrXpathOrBy: string | By): By;
}
