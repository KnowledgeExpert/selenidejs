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
    private static readonly DEFAULT;
    afterElementActionHooks?: AfterElementActionHook[];
    beforeElementActionHooks?: BeforeElementActionHook[];
    clickByJs?: boolean;
    fullpageScreenshot?: boolean;
    htmlPath?: string;
    onCollectionFailureHooks?: OnCollectionFailureHook[];
    onElementFailureHooks?: OnElementFailureHook[];
    onFailureHooks?: OnFailureHook[];
    screenshotPath?: string;
    setValueByJs?: boolean;
    timeout?: number;
    webdriver?: WebDriver;
    windowHeight?: number;
    windowWidth?: number;
    constructor(customConfiguration?: any);
}
