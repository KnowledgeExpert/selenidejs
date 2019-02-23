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
    customizedWith(custom: Partial<Configuration>): Collection;
    getAsCashedArray(): Promise<Element[]>;
    elementAt(index: number): Element;
    first(): Element;
    filteredBy(...conditions: ElementCondition[]): Collection;
    elementBy(...conditions: ElementCondition[]): Element;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
