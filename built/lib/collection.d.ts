import { WebElement } from 'selenium-webdriver';
import { CollectionCondition } from './conditions';
import { ElementCondition } from './conditions';
import { Configuration } from './configuration';
import { Element } from './element';
import { Locator } from './locators/locator';
export declare class Collection {
    private readonly locator;
    private readonly configuration;
    private readonly wait;
    constructor(locator: Locator<Promise<WebElement[]>>, configuration: Configuration);
    getAsCashedArray(): Promise<Element[]>;
    should(condition: CollectionCondition, timeout?: number): Promise<Collection>;
    shouldNot(condition: CollectionCondition, timeout?: number): Promise<Collection>;
    waitUntil(condition: CollectionCondition, timeout?: number): Promise<boolean>;
    waitUntilNot(condition: CollectionCondition, timeout?: number): Promise<boolean>;
    matches(condition: CollectionCondition): Promise<boolean>;
    matchesNot(condition: CollectionCondition): Promise<boolean>;
    get(index: number): Element;
    first(): Element;
    filterBy(condition: ElementCondition): Collection;
    findBy(condition: ElementCondition): Element;
    size(): Promise<number>;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
