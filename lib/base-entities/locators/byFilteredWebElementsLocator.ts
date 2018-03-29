import {Collection} from '../collection';
import {WebElement} from 'selenium-webdriver';
import {Locator} from './locator';
import {ElementCondition} from "../../conditions/elementCondition";


export class ByFilteredWebElementsLocator implements Locator<Promise<WebElement[]>> {

    private readonly elementCondition: ElementCondition;
    private readonly searchContext: Collection;

    constructor(condition: ElementCondition, searchContext: Collection) {
        this.elementCondition = condition;
        this.searchContext = searchContext;
    }

    public async find(): Promise<WebElement[]> {
        const webElements = await this.searchContext.getWebElements();

        const result: WebElement[] = [];
        // todo swap to promise filter
        for (let i = 0; i < webElements.length; i++) {
            try {
                await this.elementCondition.matches(this.searchContext.get(i));
                result.push(webElements[i]);
            } catch (ignored) {
            }
        }
        return result;
    }

    public toString(): string {
        return `${this.searchContext.toString()}.filteredBy(${this.elementCondition.toString()})`;
    }

}