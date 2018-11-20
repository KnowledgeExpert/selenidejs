import { WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
export declare class WebElementsLocator implements Locator<WebElement[]> {
    private readonly webelements;
    constructor(webelements: WebElement[]);
    find(): WebElement[];
    toString(): string;
}
