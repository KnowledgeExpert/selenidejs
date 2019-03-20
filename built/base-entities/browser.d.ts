/// <reference types="node" />
import { ProtractorBrowser, WebDriver } from 'protractor';
import { Element } from './element';
import { BrowserCondition } from '..';
import { ActionSequence, By, Navigation } from 'selenium-webdriver';
import { Collection } from './collection';
export declare namespace Browser {
    function params(dotSeparatedPath?: string): any;
    function get(url: string): Promise<void>;
    function refresh(): Promise<void>;
    function navigate(): Navigation;
    function driver(): WebDriver;
    function title(): Promise<string>;
    function pageSource(): Promise<string>;
    function screenshot(): Promise<string>;
    function fullpageScreenshot(): Promise<Buffer>;
    function resizeWindow(width: number, height: number): Promise<void>;
    function element(cssOrXpathOrBy: string | By): Element;
    function all(cssOrXpathOrBy: string | By): Collection;
    function should(condition: BrowserCondition, timeout?: number): Promise<ProtractorBrowser>;
    function shouldNot(condition: BrowserCondition, timeout?: number): Promise<ProtractorBrowser>;
    function is(condition: BrowserCondition, timeout?: number): Promise<boolean>;
    function isNot(condition: BrowserCondition, timeout?: number): Promise<boolean>;
    function matching(condition: BrowserCondition, timeout?: number): Promise<boolean>;
    function matchingNot(condition: BrowserCondition, timeout?: number): Promise<boolean>;
    function executeScript(script: string | Function, ...args: any[]): Promise<{}>;
    function actions(): ActionSequence;
    function nextTab(): Promise<void>;
    function previosTab(): Promise<void>;
    function switchToFrame(frameElement: Element): Promise<void>;
    function switchToDefaultFrame(): Promise<void>;
    function clearCacheAndCookies(): Promise<void>;
}
