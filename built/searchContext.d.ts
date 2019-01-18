import { By, WebElement } from 'selenium-webdriver';
export interface SearchContext {
    findWebElement(by: By): Promise<WebElement>;
    findWebElements(by: By): Promise<WebElement[]>;
}
