import { WebElement } from 'selenium-webdriver';
import { CollectionCondition, ElementCondition } from './conditions';
import { Configuration } from './configuration';
import { Element } from './element';
import { Locator } from './locators/locator';
import { Query } from './wait';
import { Assertable } from './entity';
export declare class Collection implements Assertable<Collection> {
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
    elementAt(index: number): Element;
    first(): Element;
    filteredBy(condition: ElementCondition): Collection;
    elementBy(condition: ElementCondition): Element;
    get<R>(query: Query<Collection, R>, timeout?: number): Promise<R>;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
