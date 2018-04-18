/// <reference types="node" />
import { ProtractorBrowser } from "protractor";
import { Element } from "./element";
import { BrowserCondition } from "..";
import { By } from "selenium-webdriver";
import { Collection } from "./collection";
export declare namespace Browser {
    const params: any;
    function get(url: string): Promise<void>;
    function viewportScreenshot(): Promise<string>;
    function fullpageScreenshot(): Promise<Buffer>;
    function resizeWindow(width: number, height: number): Promise<void>;
    function element(locator: string | By): Element;
    function all(locator: string | By): Collection;
    function should(condition: BrowserCondition, timeout?: number): Promise<ProtractorBrowser>;
    function shouldNot(condition: BrowserCondition, timeout?: number): Promise<ProtractorBrowser>;
    function is(condition: BrowserCondition, timeout?: number): Promise<boolean>;
    function isNot(condition: BrowserCondition, timeout?: number): Promise<boolean>;
    function nextTab(): Promise<void>;
    function previosTab(): Promise<void>;
    function switchToFrame(frameElement: Element): Promise<void>;
    function switchToDefaultFrame(): Promise<void>;
    function clearCacheAndCookies(): Promise<void>;
}
