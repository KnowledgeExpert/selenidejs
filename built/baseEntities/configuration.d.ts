import { WebDriver } from 'selenium-webdriver';
import { Driver } from './driver';
import { AfterElementActionHook } from './hooks/afterElementActionHook';
import { BeforeElementActionHook } from './hooks/beforeElementActionHook';
import { OnCollectionFailureHook } from './hooks/onCollectionFailureHook';
import { OnElementFailureHook } from './hooks/onElementFailureHook';
import { OnFailureHook } from './hooks/onFailureHook';
export declare class Configuration {
    static readonly DEFAULT_HTML_PATH: string;
    static readonly DEFAULT_SCREENSHOT_PATH: string;
    static readonly DEFAULT_ON_FAILURE_HOOKS: ((error: Error, driver: Driver) => Promise<void>)[];
    static readonly DEFAULT: Configuration;
    htmlPath?: string;
    screenshotPath?: string;
    timeout?: number;
    windowWidth?: number;
    windowHeight?: number;
    fullpageScreenshot?: boolean;
    onFailureHooks?: OnFailureHook[];
    onElementFailureHooks?: OnElementFailureHook[];
    onCollectionFailureHooks?: OnCollectionFailureHook[];
    beforeElementActionHooks?: BeforeElementActionHook[];
    afterElementActionHooks?: AfterElementActionHook[];
    webdriver?: WebDriver;
    constructor(customConfiguration: any);
}
