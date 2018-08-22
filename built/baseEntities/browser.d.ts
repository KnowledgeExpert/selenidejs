/// <reference types="node" />
import { ActionSequence, By, WebDriver } from 'selenium-webdriver';
import { DriverCondition } from '../conditions/driverCondition';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Driver } from './driver';
import { Element } from './element';
export declare namespace Browser {
    let selenideDriver: Driver;
    let config: Configuration;
    function setDriver(driver: WebDriver | Driver, configuration?: Configuration): void;
    function get(url: string): Promise<void>;
    function close(): Promise<void>;
    function quit(): Promise<void>;
    function refresh(): Promise<void>;
    function acceptAlert(): Promise<void>;
    function url(): Promise<string>;
    function title(): Promise<string>;
    function pageSource(): Promise<string>;
    function screenshot(): Promise<Buffer>;
    function resizeWindow(width: number, height: number): Promise<void>;
    function actions(): ActionSequence;
    function element(cssOrXpathOrBy: string | By): Element;
    function all(cssOrXpathOrBy: string | By): Collection;
    function should(condition: DriverCondition, timeout?: number): Promise<Driver>;
    function shouldNot(condition: DriverCondition, timeout?: number): Promise<Driver>;
    function is(condition: DriverCondition, timeout?: number): Promise<boolean>;
    function isNot(condition: DriverCondition, timeout?: number): Promise<boolean>;
    function executeScript(script: string | Function, ...args: any[]): Promise<{}>;
    function getTabs(): Promise<string[]>;
    function nextTab(): Promise<void>;
    function previousTab(): Promise<void>;
    function switchToTab(tabId: string): Promise<void>;
    function switchToFrame(frameElement: Element): Promise<void>;
    function switchToDefaultFrame(): Promise<void>;
    function clearCacheAndCookies(): Promise<void>;
}
