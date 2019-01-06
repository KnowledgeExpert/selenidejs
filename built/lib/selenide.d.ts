/// <reference types="node" />
import { ActionSequence, By, WebDriver } from 'selenium-webdriver';
import { BrowserCondition } from './conditions';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Browser } from './browser';
import { Element } from './element';
export declare namespace Selenide {
    let browser: Browser;
    let configuration: Configuration;
    function setDriver(driver: WebDriver, configuration?: Configuration): void;
    function get(url: string): Promise<void>;
    function close(): Promise<void>;
    function quit(): Promise<void>;
    function url(): Promise<string>;
    function title(): Promise<string>;
    function pageSource(): Promise<string>;
    function screenshot(): Promise<Buffer>;
    function resizeWindow(width: number, height: number): Promise<void>;
    function actions(): ActionSequence;
    function element(cssOrXpathOrBy: string | By): Element;
    function all(cssOrXpathOrBy: string | By): Collection;
    function should(condition: BrowserCondition, timeout?: number): Promise<Browser>;
    function shouldNot(condition: BrowserCondition, timeout?: number): Promise<Browser>;
    function executeScript(script: string | Function, ...args: any[]): Promise<{}>;
    function nextTab(): Promise<void>;
    function previousTab(): Promise<void>;
    function switchToFrame(frameElement: Element): Promise<void>;
    function switchToDefaultFrame(): Promise<void>;
    function clearCacheAndCookies(): Promise<void>;
}
