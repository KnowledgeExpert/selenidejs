import { WebElement } from 'selenium-webdriver';
import { CollectionCondition } from '../conditions/collectionCondition';
import { ElementCondition } from '../conditions/elementCondition';
import { Driver } from './driver';
import { Element } from './element';
import { Locator } from './locators/locator';
export declare class Collection {
    readonly driver: Driver;
    private readonly locator;
    private readonly wait;
    constructor(locator: Locator<Promise<WebElement[]>>, driver: Driver);
    should(condition: CollectionCondition, timeout?: number): Promise<Collection>;
    shouldNot(condition: CollectionCondition, timeout?: number): Promise<Collection>;
    is(condition: CollectionCondition, timeout?: number): Promise<boolean>;
    isNot(condition: CollectionCondition, timeout?: number): Promise<boolean>;
    get(index: number): Element;
    first(): Element;
    filter(condition: ElementCondition): Collection;
    filterBy(condition: ElementCondition): Collection;
    findBy(condition: ElementCondition): Element;
    size(): Promise<number>;
    count(): Promise<number>;
    getWebElements(): Promise<WebElement[]>;
    toString(): string;
}
