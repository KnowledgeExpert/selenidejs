import { WebDriver } from 'selenium-webdriver';
import { Browser } from './browser';
import { OnFailureHook } from './wait';
import { Collection } from './collection';
import { Element } from './element';
/**
 * A one place to configure everything.
 * There is no separate Browser, Element or Collection configurations.
 * All corresponding options live here, in Configuration.*
 * It was implemented like this to stay KISS and simplify implementation.
 * Enjoy;)
 */
export declare type OnEntityFailureHook = OnFailureHook<Browser | Element | Collection>;
export declare class Configuration {
    static with(): Customized<Configuration>;
    static withDriver(driver: WebDriver): Customized<Configuration>;
    readonly driver: WebDriver;
    readonly timeout: number;
    readonly baseUrl: string;
    readonly setValueByJs: boolean;
    readonly typeByJs: boolean;
    readonly windowWidth: string;
    readonly windowHeight: string;
    readonly fullPageScreenshot: boolean;
    constructor(init?: Partial<Configuration>);
}
export declare class Customized<T> {
    private readonly customizedType;
    static browser(): Customized<Browser>;
    static configuration(): Customized<Configuration>;
    private configuration;
    private constructor();
    build(): T;
    driver(webdriver: WebDriver): this;
    baseUrl(base: string): this;
    timeout(milliseconds: number): this;
    windowWidth(value: string): this;
    windowHeight(value: string): this;
    setValueByJs(value: boolean): this;
    typeByJs(value: boolean): this;
    fullPageScreenshot(turnedOn: boolean): this;
}
