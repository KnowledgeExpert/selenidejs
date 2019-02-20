/// <reference types="node" />
import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Configuration, Customized } from './configuration';
import { Element } from './element';
import { SearchContext } from './searchContext';
import { Assertable, Entity, Matchable } from './entity';
export declare class Browser extends Entity implements SearchContext, Assertable, Matchable {
    static configuredWith(): Customized<Browser>;
    static drivedBy(driver: WebDriver): Customized<Browser>;
    static chromeWith(): Customized<Browser>;
    static chrome(): Browser;
    readonly configuration: Configuration;
    constructor(configuration?: Partial<Configuration>);
    with(custom: Partial<Configuration>): Browser;
    readonly driver: WebDriver;
    toString(): string;
    findWebElement(by: By): Promise<WebElement>;
    findWebElements(by: By): Promise<WebElement[]>;
    element(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Element;
    all(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Collection;
    executeScript(script: string | Function, ...args: any[]): Promise<{}>;
    open(relativeOrAbsoluteUrl: string): Promise<Browser>;
    resizeWindow(width: number, height: number): Promise<Browser>;
    screenshot(): Promise<Buffer>;
    closeCurrentTab(): Promise<Browser>;
    quit(): Promise<void>;
    refresh(): Promise<void>;
    nextTab(): Promise<Browser>;
    previousTab(): Promise<Browser>;
    switchToFrame(frameElement: Element): Promise<Browser>;
    switchToDefaultFrame(): Promise<Browser>;
    clearLocalStorage(): Promise<Browser>;
    clearSessionStorage(): Promise<Browser>;
    deleteCookies(): Promise<Browser>;
}
