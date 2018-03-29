import { By, WebElement } from 'selenium-webdriver';
import { Locator } from "./locator";
import { Element } from "../element";
export declare class ByWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly by;
    private readonly searchContext;
    constructor(by: By, searchContext?: Element);
    find(): Promise<WebElement>;
    toString(): string;
}
