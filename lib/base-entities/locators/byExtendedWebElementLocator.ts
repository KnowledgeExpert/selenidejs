import {browser} from 'protractor';
import {By, WebElement} from 'selenium-webdriver';
import {Locator} from './locator';
import {Element} from '../element';
import {With} from '../../locators/with';


export class ByExtendedWebElementLocator implements Locator<Promise<WebElement>> {

    private readonly extendedSelector: string;
    private cachedBy: By;
    private readonly searchContext: Element;

    constructor(extendedSelector: string, searchContext?: Element) {
        this.extendedSelector = extendedSelector;
        this.searchContext = searchContext;
    }

    async find(): Promise<WebElement> {

        const context = this.searchContext ? (await this.searchContext.getWebElement()) : browser;
        if (this.cachedBy) {
            return (await (context as any).findElements(this.cachedBy))[0];
        }

        let webelement;
        webelement = await this.returnFirst(context, With.id(this.extendedSelector));
        if (webelement) return webelement;

        webelement = await this.returnFirst(context, With.name(this.extendedSelector));
        if (webelement) return webelement;

        webelement = await this.returnFirst(context, With.className(this.extendedSelector));
        if (webelement) return webelement;

        webelement = await this.returnFirst(context, With.exactText(this.extendedSelector));
        if (webelement) return webelement;

        throw new Error(`No elements found using ${this.toString()}`);
    }

    private async returnFirst(context, by: By): Promise<WebElement> {
        const webelements = await (context as any).findElements(by);
        if (webelements.length !== 0) {
            this.cachedBy = by;
        }
        return webelements[0];
    }

    toString(): string {
        return `${this.searchContext ? this.searchContext.toString() : 'browser'}.find(${this.cachedBy ? this.cachedBy : `extended selector: '${this.extendedSelector}'`})`;
    }

}