/// <reference types="node" />
import { ActionSequence, By } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Configuration } from './configuration';
import { Driver } from './driver';
import { Element } from './element';
export declare namespace Browser {
    const driver: Driver;
    const configuration: Configuration;
    function open(url: string): Promise<any>;
    function close(): Promise<any>;
    function quit(): Promise<any>;
    function refresh(): Promise<any>;
    function acceptAlert(): Promise<any>;
    function url(): Promise<string>;
    function title(): Promise<string>;
    function pageSource(): Promise<string>;
    function screenshot(): Promise<Buffer>;
    function resizeWindow(width: number, height: number): Promise<any>;
    function actions(): ActionSequence;
    function element(cssOrXpathOrBy: string | By): Element;
    function all(cssOrXpathOrBy: string | By): Collection;
    function should(condition: Condition<Driver>, timeout?: number): Promise<Driver>;
    function shouldNot(condition: Condition<Driver>, timeout?: number): Promise<Driver>;
    function is(condition: Condition<Driver>, timeout?: number): Promise<boolean>;
    function isNot(condition: Condition<Driver>, timeout?: number): Promise<boolean>;
    function executeScript(script: string | Function, ...args: any[]): Promise<any>;
    function getTabs(): Promise<any>;
    function nextTab(): Promise<any>;
    function previousTab(): Promise<any>;
    function switchToTab(tabId: string): Promise<any>;
    function switchToFrame(frameElement: Element): Promise<any>;
    function switchToDefaultFrame(): Promise<any>;
    function clearCacheAndCookies(): Promise<any>;
}
