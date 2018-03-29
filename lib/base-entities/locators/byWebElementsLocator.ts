import {browser} from 'protractor';
import {By, WebElement} from 'selenium-webdriver';
import {Element} from '../element';
import {Locator} from './locator';


export class ByWebElementsLocator implements Locator<Promise<WebElement[]>> {

    private readonly by: By;
    private readonly searchContext: Element;

    constructor(by: By, searchContext?: Element) {
        this.by = by;
        this.searchContext = searchContext;
    }

    public async find(): Promise<WebElement[]> {
        // return this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await (element.all(this.by)).getWebElements();
        return this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await browser.findElements(this.by);
    }

    public toString(): string {
        return `${this.searchContext ? this.searchContext.toString() : "browser"}.all(${this.by})`;
    }

}
