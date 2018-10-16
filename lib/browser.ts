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

import { ActionSequence, By } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Configuration } from './configuration';
import { Driver } from './driver';
import { Element } from './element';


export namespace Browser {

    export let driver = new Driver({});
    export let configuration = driver.configuration;

    export function setDriver(customConfiguration: Configuration) {
        driver = new Driver(customConfiguration);
        configuration = driver.configuration;
    }

    export async function open(url: string) {
        return driver.open(url);
    }

    export async function close() {
        return driver.close();
    }

    export async function quit() {
        return driver.quit();
    }

    export async function refresh() {
        return driver.refresh();
    }

    export async function acceptAlert() {
        return driver.acceptAlert();
    }

    export async function url(): Promise<string> {
        return driver.url();
    }

    export async function title(): Promise<string> {
        return driver.title();
    }

    export async function pageSource(): Promise<string> {
        return driver.pageSource();
    }

    export async function screenshot(): Promise<Buffer> {
        return driver.screenshot();
    }

    export async function resizeWindow(width: number, height: number) {
        return driver.resizeWindow(width, height);
    }

    export function actions(): ActionSequence {
        return driver.actions();
    }

    export function element(cssOrXpathOrBy: string | By): Element {
        return driver.element(cssOrXpathOrBy);
    }

    export function all(cssOrXpathOrBy: string | By): Collection {
        return driver.all(cssOrXpathOrBy);
    }

    export async function should(condition: Condition<Driver>, timeout?: number): Promise<Driver> {
        return driver.should(condition, timeout);
    }

    export async function shouldNot(condition: Condition<Driver>, timeout?: number): Promise<Driver> {
        return driver.shouldNot(condition, timeout);
    }

    export async function is(condition: Condition<Driver>, timeout?: number): Promise<boolean> {
        return driver.is(condition, timeout);
    }

    export async function isNot(condition: Condition<Driver>, timeout?: number): Promise<boolean> {
        return driver.isNot(condition, timeout);
    }

    /* tslint:disable:ban-types */
    export async function executeScript(script: string | Function, ...args: any[]) {
        return driver.executeScript(script, ...args);
    }

    /* tslint:enable:ban-types */

    export async function getTabs() {
        return driver.getTabs();
    }

    export async function nextTab() {
        return driver.nextTab();
    }

    export async function previousTab() {
        return driver.previousTab();
    }

    export async function switchToTab(tabId: string) {
        return driver.switchToTab(tabId);
    }

    export async function switchToFrame(frameElement: Element) {
        return driver.switchToFrame(frameElement);
    }

    export async function switchToDefaultFrame() {
        return driver.switchToDefaultFrame();
    }

    export async function clearCacheAndCookies() {
        return driver.clearCacheAndCookies();
    }

}
