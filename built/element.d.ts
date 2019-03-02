import { By, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Locator } from './locators/locator';
import { Assertable, Entity, Matchable } from './entity';
export declare class Element extends Entity implements Assertable, Matchable {
    private readonly locator;
    protected readonly configuration: Configuration;
    constructor(locator: Locator<Promise<WebElement>>, configuration: Configuration);
    toString(): string;
    getWebElement(): Promise<WebElement>;
    with(customConfig: Partial<Configuration>): Element;
    element(cssOrXpathOrBy: string | By): Element;
    readonly parent: Element;
    readonly followingSibling: Element;
    all(cssOrXpathOrBy: string | By): Collection;
    executeScript(scriptOnThisWebElement: string | Function, ...additionalArgs: any[]): Promise<{}>;
    click(): Promise<this>;
    clear(): Promise<this>;
    setValue(value: string | number): Promise<this>;
    type(keys: string | number): Promise<this>;
    doubleClick(): Promise<this>;
    hover(): Promise<this>;
    contextClick(): Promise<this>;
    pressEnter(): Promise<this>;
    pressEscape(): Promise<this>;
    pressTab(): Promise<this>;
}
