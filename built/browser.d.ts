/// <reference types="node" />
import { By, WebDriver } from 'selenium-webdriver';
import { Collection } from './collection';
import { Configuration, Customized } from './configuration';
import { Element } from './element';
import { Assertable, Entity, Matchable } from './entity';
export declare class Browser extends Entity implements /*SearchContext, */ Assertable, Matchable {
    static configuredWith(): Customized<Browser>;
    static drivedBy(driver: WebDriver): Customized<Browser>;
    static chromeWith(): Customized<Browser>;
    static chrome(): Browser;
    constructor(configuration?: Partial<Configuration>);
    customizedWith(custom: Partial<Configuration>): Browser;
    readonly driver: WebDriver;
    toString(): string;
    element(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Element;
    all(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Collection;
    executeScript(script: string | Function, ...args: any[]): Promise<{}>;
    open(relativeOrAbsoluteUrl: string): Promise<Browser>;
    resizeWindow(width: number, height: number): Promise<Browser>;
    screenshot(): Promise<Buffer>;
    closeCurrentTab(): Promise<Browser>;
    quit(): Promise<void>;
    refresh(): Promise<void>;
    back(): Promise<void>;
    forward(): Promise<void>;
    goToNextTab(): Promise<Browser>;
    goToPreviousTab(): Promise<Browser>;
    goToTab(indexOrId: number | string): Promise<Browser>;
    switchToDefaultFrame(): Promise<Browser>;
    clearLocalStorage(): Promise<Browser>;
    clearSessionStorage(): Promise<Browser>;
    clearCookies(): Promise<Browser>;
    readonly alert: import("selenium-webdriver").AlertPromise;
}
