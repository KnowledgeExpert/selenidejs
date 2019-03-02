import { WebElement } from 'selenium-webdriver';
import { ElementCondition } from './conditions';
import { Configuration } from './configuration';
import { Element } from './element';
import { Locator } from './locators/locator';
import { Assertable, Entity, Matchable } from './entity';
export declare class Collection extends Entity implements Assertable, Matchable {
    private readonly locator;
    protected readonly configuration: Configuration;
    constructor(locator: Locator<Promise<WebElement[]>>, configuration: Configuration);
    with(customConfig: Partial<Configuration>): Collection;
    getAsCashedArray(): Promise<Element[]>;
    elementAt(index: number): Element;
    readonly first: Element;
    /**
     * Represents a new collection sliced from 'start' element index to 'end' element index exclusive.
     * @param start The inclusive "start" index of collection to be sliced.
     * @param end The exclusive "end" index of collection to be sliced
     */
    sliced(start: number, end: number): Collection;
    filteredBy(...conditions: ElementCondition[]): Collection;
    elementBy(...conditions: ElementCondition[]): Element;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
