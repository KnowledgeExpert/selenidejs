import { WebDriver } from 'selenium-webdriver';
import { OnFailureHook } from './refactor/onFailureHook';
export declare class Configuration {
    static with(): Customized;
    static withDriver(driver: WebDriver): Customized;
    readonly driver: WebDriver;
    readonly timeout: number;
    readonly windowWidth: string;
    readonly windowHeight: string;
    readonly htmlPath: string;
    readonly screenshotPath: string;
    readonly fullPageScreenshot: boolean;
    readonly onFailureHooks: OnFailureHook[];
    constructor(init?: Partial<Configuration>);
}
export declare class Customized {
    private readonly customizedType;
    static browser(): Customized;
    static configuration(): Customized;
    private configuration;
    private constructor();
    build(): any;
    driver(webdriver: WebDriver): this;
    timeout(milliseconds: number): this;
    windowWidth(value: string): this;
    windowHeight(value: string): this;
    htmlPath(path: string): this;
    screenshotPath(path: string): this;
    fullPageScreenshot(turnedOn: boolean): this;
    onFailureHooks(hooks: OnFailureHook[]): this;
}
