import { WebDriver } from 'selenium-webdriver';
import { OnFailureHook } from './refactor/onFailureHook';
import { Browser } from './browser';
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
    readonly htmlPath: string;
    readonly screenshotPath: string;
    readonly fullPageScreenshot: boolean;
    readonly onFailureHooks: OnFailureHook[];
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
    htmlPath(path: string): this;
    screenshotPath(path: string): this;
    fullPageScreenshot(turnedOn: boolean): this;
    onFailureHooks(hooks: OnFailureHook[]): this;
}
