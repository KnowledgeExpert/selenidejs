import { WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { Locator } from './locator';
export declare class SlicedWebElementsLocator implements Locator<Promise<WebElement[]>> {
    private readonly start;
    private readonly end;
    private readonly collection;
    /**
     * Locates a slice in original collection webelements.
     * @param start The inclusive "start" index of webelements to be sliced.
     * @param end The exclusive "end" index of webelements to be sliced.
     * @param collection Original collection to be sliced.
     */
    constructor(start: number, end: number, collection: Collection);
    find(): Promise<WebElement[]>;
    toString(): string;
}
