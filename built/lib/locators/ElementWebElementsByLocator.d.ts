import { By, WebElement } from 'selenium-webdriver';
import { Locator } from './locator';
import { Element } from '../element';
export declare class ElementWebElementsByLocator implements Locator<Promise<WebElement[]>> {
    private readonly by;
    private readonly element;
    constructor(by: By, element: Element);
    find(): Promise<WebElement[]>;
    toString(): string;
}
