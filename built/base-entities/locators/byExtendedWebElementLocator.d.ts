import { WebElement } from 'selenium-webdriver';
import { Locator } from "./locator";
import { Element } from "../element";
export declare class ByExtendedWebElementLocator implements Locator<Promise<WebElement>> {
    private readonly extendedSelector;
    private cachedBy;
    private readonly searchContext;
    constructor(extendedSelector: string, searchContext?: Element);
    find(): Promise<WebElement>;
    private returnFirst(context, by);
    toString(): string;
}
