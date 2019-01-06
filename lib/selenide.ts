// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ActionSequence, By, WebDriver } from 'selenium-webdriver';
import { BrowserCondition } from './conditions';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Browser } from './browser';
import { Element } from './element';


export namespace Selenide {

    export let browser: Browser;
    export let configuration: Configuration;

    export function setDriver(driver: WebDriver, configuration: Configuration = Configuration.shared) {
        Selenide.configuration = configuration;  // todo
        Selenide.configuration.driver = driver;
        Selenide.browser = new Browser(configuration);
    }

    export async function get(url: string) {
        return browser.get(url);
    }

    export async function close() {
        return browser.closeCurrentTab();
    }

    export async function quit() {
        return browser.quit();
    }

    export async function url(): Promise<string> {
        return browser.url();
    }

    export async function title(): Promise<string> {
        return browser.title();
    }

    export async function pageSource(): Promise<string> {
        return browser.pageSource();
    }

    export async function screenshot(): Promise<Buffer> {
        return browser.screenshot();
    }

    export async function resizeWindow(width: number, height: number) {
        return browser.resizeWindow(width, height);
    }

    export function actions(): ActionSequence {
        return browser.driver.actions();
    }

    export function element(cssOrXpathOrBy: string | By): Element {
        return browser.element(cssOrXpathOrBy);
    }

    export function all(cssOrXpathOrBy: string | By): Collection {
        return browser.all(cssOrXpathOrBy);
    }

    export async function should(condition: BrowserCondition, timeout?: number): Promise<Browser> {
        return browser.should(condition, timeout);
    }

    export async function shouldNot(condition: BrowserCondition, timeout?: number): Promise<Browser> {
        return browser.shouldNot(condition, timeout);
    }

    // export async function is(condition: DriverCondition, timeout?: number): Promise<boolean> {
    //     return browser.matches(condition, timeout);
    // }
    //
    // export async function isNot(condition: DriverCondition, timeout?: number): Promise<boolean> {
    //     return browser.matchesNot(condition, timeout);
    // }

    /* tslint:disable:ban-types */
    export async function executeScript(script: string | Function, ...args: any[]) {
        return browser.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */

    export async function nextTab() {
        return browser.nextTab();
    }

    export async function previousTab() {
        return browser.previousTab();
    }

    export async function switchToFrame(frameElement: Element) {
        return browser.switchToFrame(frameElement);
    }

    export async function switchToDefaultFrame() {
        return browser.switchToDefaultFrame();
    }

    export async function clearCacheAndCookies() {
        return browser.clearCacheAndCookies();
    }

}
