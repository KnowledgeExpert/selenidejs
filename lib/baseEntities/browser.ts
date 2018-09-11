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
import { DriverCondition } from '../conditions/driverCondition';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Driver } from './driver';
import { Element } from './element';


export namespace Browser {

    export let selenideDriver: Driver;
    export let config: Configuration;

    export function setDriver(driverOrConfiguration: Driver | Configuration) {
        selenideDriver = driverOrConfiguration instanceof Driver
            ? driverOrConfiguration as Driver
            : new Driver(driverOrConfiguration as Configuration);
        config = selenideDriver.config;
    }

    export async function get(url: string) {
        return selenideDriver.get(url);
    }

    export async function close() {
        return selenideDriver.close();
    }

    export async function quit() {
        return selenideDriver.quit();
    }

    export async function refresh() {
        return selenideDriver.refresh();
    }

    export async function acceptAlert() {
        return selenideDriver.acceptAlert();
    }

    export async function url(): Promise<string> {
        return selenideDriver.url();
    }

    export async function title(): Promise<string> {
        return selenideDriver.title();
    }

    export async function pageSource(): Promise<string> {
        return selenideDriver.pageSource();
    }

    export async function screenshot(): Promise<Buffer> {
        return selenideDriver.screenshot();
    }

    export async function resizeWindow(width: number, height: number) {
        return selenideDriver.resizeWindow(width, height);
    }

    export function actions(): ActionSequence {
        return selenideDriver.actions();
    }

    export function element(cssOrXpathOrBy: string | By): Element {
        if (!selenideDriver) setDriver({} as Configuration);
        return selenideDriver.element(cssOrXpathOrBy);
    }

    export function all(cssOrXpathOrBy: string | By): Collection {
        if (!selenideDriver) setDriver({} as Configuration);
        return selenideDriver.all(cssOrXpathOrBy);
    }

    export async function should(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return selenideDriver.should(condition, timeout);
    }

    export async function shouldNot(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return selenideDriver.shouldNot(condition, timeout);
    }

    export async function is(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return selenideDriver.is(condition, timeout);
    }

    export async function isNot(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return selenideDriver.isNot(condition, timeout);
    }

    /* tslint:disable:ban-types */
    export async function executeScript(script: string | Function, ...args: any[]) {
        return selenideDriver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */

    export async function getTabs() {
        return selenideDriver.getTabs();
    }

    export async function nextTab() {
        return selenideDriver.nextTab();
    }

    export async function previousTab() {
        return selenideDriver.previousTab();
    }

    export async function switchToTab(tabId: string) {
        return selenideDriver.switchToTab(tabId);
    }

    export async function switchToFrame(frameElement: Element) {
        return selenideDriver.switchToFrame(frameElement);
    }

    export async function switchToDefaultFrame() {
        return selenideDriver.switchToDefaultFrame();
    }

    export async function clearCacheAndCookies() {
        return selenideDriver.clearCacheAndCookies();
    }

}
