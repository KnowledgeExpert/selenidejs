import {browser} from "protractor";
import {By, WebElement} from 'selenium-webdriver';
import {Locator} from "./locator";
import {Element} from "../element";


export class ByWebElementLocator implements Locator<Promise<WebElement>> {

    private readonly by: By;
    private readonly searchContext: Element;

    constructor(by: By, searchContext?: Element) {
        this.by = by;
        this.searchContext = searchContext;
    }

    async find(): Promise<WebElement> {
        const elements = this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await browser.findElements(this.by);
        if (elements.length == 0) {
            throw new Error(`No elements found using ${this.toString()}`);
        }
        return elements[0];

        // return this.searchContext ? await (await this.searchContext.getWebElement()).findElement(this.by) : await element(this.by).getWebElement();
    }

    toString(): string {
        return `${this.searchContext ? this.searchContext.toString() : "browser"}.find(${this.by})`;
    }

}