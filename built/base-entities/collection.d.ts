import { Locator } from './locators/locator';
import { By, WebElement } from 'selenium-webdriver';
import { Element } from "./element";
import { CollectionCondition } from "../conditions/collectionCondition";
import { ElementCondition } from "../conditions/elementCondition";
export declare class Collection {
    private readonly locator;
    constructor(locator: Locator<Promise<WebElement[]>>);
    should(condition: CollectionCondition, timeout?: number): Promise<Collection>;
    shouldNot(condition: CollectionCondition): Promise<Collection>;
    is(condition: CollectionCondition, timeout?: number): Promise<boolean>;
    isNot(condition: CollectionCondition): Promise<boolean>;
    get(index: number): Element;
    first(): Element;
    filter(condition: ElementCondition): Collection;
    filterBy(condition: ElementCondition): Collection;
    findBy(condition: ElementCondition): Element;
    size(): Promise<number>;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
export declare function all(locator: string | By): Collection;
