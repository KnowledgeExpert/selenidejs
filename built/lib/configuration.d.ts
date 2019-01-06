import { WebDriver } from 'selenium-webdriver';
import { OnFailureHook } from './refactor/onFailureHook';
export declare class Configuration {
    static shared: Configuration;
    timeout: number;
    windowWidth: string;
    windowHeight: string;
    htmlPath: string;
    screenshotPath: string;
    fullPageScreenshot: boolean;
    onFailureHooks: OnFailureHook[];
    driver: WebDriver;
    constructor(init?: Partial<Configuration>);
}
