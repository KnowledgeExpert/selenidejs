import {WebElement} from 'selenium-webdriver';
import {Locator} from './locator';
import {Collection} from '../collection';


export class ByIndexedWebElementLocator implements Locator<Promise<WebElement>> {

    private readonly searchContext: Collection;
    private readonly index: number;

    constructor(index: number, searchContext: Collection) {
        this.searchContext = searchContext;
        this.index = index;
    }

    async find(): Promise<WebElement> {
        const elements = await this.searchContext.getWebElements();
        if (elements.length < this.index) {
            throw new Error(`Cannot get ${this.index} element from webelements collection with length ${elements.length}`);
        }
        return elements[this.index];
        // return (await this.searchContext.getWebElements())[this.index]
    }

    toString(): string {
        return `${this.searchContext.toString()}.get(${this.index})`;
    }

}