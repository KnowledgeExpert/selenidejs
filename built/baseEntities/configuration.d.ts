import { WebDriver } from 'selenium-webdriver';
import { OnFailureHook } from './hooks/onFailureHook';
export declare class Configuration {
    static readonly DEFAULT: Configuration;
    htmlPath: string;
    screenshotPath: string;
    timeout: number;
    hardTimeout: number;
    windowWidth: string;
    windowHeight: string;
    fullpageScreenshot: boolean;
    onFailureHooks: OnFailureHook[];
    webdriver: WebDriver;
    constructor(customConfiguration: Configuration);
}
