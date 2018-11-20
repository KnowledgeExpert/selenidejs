/// <reference types="node" />
import { ActionSequence, By, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
export declare namespace Browser {
    const driver: Driver;
    const configuration: import("./configuration").Configuration;
    function open(url: string): Promise<Driver>;
    function close(): Promise<Driver>;
    function quit(): Promise<Driver>;
    function refresh(): Promise<Driver>;
    function acceptAlert(): Promise<Driver>;
    function url(): Promise<string>;
    function title(): Promise<string>;
    function pageSource(): Promise<string>;
    function screenshot(): Promise<Buffer>;
    function resizeWindow(width: number, height: number): Promise<Driver>;
    function actions(): ActionSequence;
    function element(cssOrXpathOrBy: string | By): Element;
    function all(cssOrXpathOrBy: string | By): Collection;
    function wrapElement(webelement: WebElement): Element;
    function wrapAll(webelements: WebElement[]): Collection;
    function should(condition: Condition<Driver>, timeout?: number): Promise<Driver>;
    function shouldNot(condition: Condition<Driver>, timeout?: number): Promise<Driver>;
    function is(condition: Condition<Driver>, timeout?: number): Promise<boolean>;
    function isNot(condition: Condition<Driver>, timeout?: number): Promise<boolean>;
    function executeScript(script: string | Function, ...args: any[]): Promise<any>;
    function getTabs(): Promise<any>;
    function nextTab(): Promise<Driver>;
    function previousTab(): Promise<Driver>;
    function switchToTab(tabId: string): Promise<Driver>;
    function switchToFrame(frameElement: Element): Promise<Driver>;
    function switchToDefaultFrame(): Promise<Driver>;
    function clearCacheAndCookies(): Promise<Driver>;
}
