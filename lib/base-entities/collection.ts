import {Locator} from './locators/locator';
import {ByIndexedWebElementLocator} from './locators/byIndexedWebElementLocator';
import {ByFilteredWebElementsLocator} from './locators/byFilteredWebElementsLocator';
import {By, WebElement} from 'selenium-webdriver';
import {Element} from "./element";
import {CollectionCondition} from "../conditions/collectionCondition";
import {ElementCondition} from "../conditions/elementCondition";
import {Wait} from "../wait";
import {ByWebElementsLocator} from "./locators/byWebElementsLocator";
import {With} from "../locators/with";
import {Condition} from "../conditions/condition";


export class Collection {

    private readonly locator: Locator<Promise<WebElement[]>>;

    constructor(locator: Locator<Promise<WebElement[]>>) {
        this.locator = locator;
    }

    async should(condition: CollectionCondition, timeout?: number): Promise<Collection> {
        return timeout ? await Wait.shouldMatch(this, condition, timeout) : await Wait.shouldMatch(this, condition);
    }

    async shouldNot(condition: CollectionCondition, timeout?: number): Promise<Collection> {
        return await this.should(Condition.not(condition), timeout);
    }

    async is(condition: CollectionCondition, timeout?: number): Promise<boolean> {
        return timeout ? await Wait.isMatch(this, condition, timeout) : await Wait.isMatch(this, condition);
    }

    async isNot(condition: CollectionCondition, timeout?: number): Promise<boolean> {
        return await this.is(Condition.not(condition), timeout);
    }

    get(index: number): Element {
        return new Element(new ByIndexedWebElementLocator(index, this));
    }

    first(): Element {
        return this.get(0);
    }

    filter(condition: ElementCondition): Collection {
        return new Collection(new ByFilteredWebElementsLocator(condition, this));
    }

    filterBy(condition: ElementCondition): Collection {
        return this.filter(condition);
    }

    findBy(condition: ElementCondition): Element {
        return new Collection(new ByFilteredWebElementsLocator(condition, this)).get(0);
    }

    async size(): Promise<number> {
        return (await this.getWebElements()).length;
    }

    async getWebElements(): Promise<WebElement[]> {
        return await this.locator.find();
    }

    toString() {
        return this.locator.toString();
    }

}

export function all(locator: string | By): Collection {
    return new Collection(new ByWebElementsLocator(typeof locator === "string"
        ? locator.includes("/") ? With.xpath(locator) : With.css(locator)
        : locator));
}
