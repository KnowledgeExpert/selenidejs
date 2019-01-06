import { WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
export declare class CashedWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly cash;
    private readonly description;
    constructor(cash: WebElement, description: string);
    find(): Promise<WebElement>;
    toString(): string;
}
