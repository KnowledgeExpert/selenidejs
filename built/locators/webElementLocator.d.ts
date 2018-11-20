import { WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
export declare class WebElementLocator implements Locator<WebElement> {
    private readonly webelement;
    constructor(webelement: WebElement);
    find(): WebElement;
    toString(): string;
}
