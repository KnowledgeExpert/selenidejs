import { By, WebElement } from 'selenium-webdriver';
export interface SearchContext {
    findElement(by: By): Promise<WebElement>;
    findElements(by: By): Promise<WebElement[]>;
}
