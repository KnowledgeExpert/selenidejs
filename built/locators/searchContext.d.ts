import { By, WebElement } from 'selenium-webdriver';
export interface SearchContext {
    findElement(locator: By): Promise<WebElement>;
    findElements(locator: By): Promise<WebElement[]>;
}
