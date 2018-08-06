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

import {Element} from "./element";
import {ActionSequence, By, WebDriver} from "selenium-webdriver";
import {Driver} from "./driver";
import {Configuration} from "./config/configuration";
import {Collection} from "./collection";
import {DriverCondition} from "../conditions/driverCondition";


export namespace Browser {

    export let selenideDriver: Driver;
    export let config: Configuration;

    export function setDriver(driver: WebDriver | Driver, configuration?: Configuration) {
        selenideDriver = driver['should']
            ? driver as Driver
            : new Driver(driver as WebDriver, configuration);
        config = selenideDriver.config;
    }

    export async function get(url: string) {
        return await selenideDriver.get(url);
    }

    export async function close() {
        return await selenideDriver.close();
    }

    export async function quit() {
        return await selenideDriver.quit();
    }

    export async function url(): Promise<string> {
        return await selenideDriver.url();
    }

    export async function title(): Promise<string> {
        return await selenideDriver.title();
    }

    export async function pageSource(): Promise<string> {
        return await selenideDriver.pageSource();
    }

    export async function screenshot(): Promise<Buffer> {
        return await selenideDriver.screenshot();
    }

    export async function resizeWindow(width: number, height: number) {
        return await selenideDriver.resizeWindow(width, height);
    }

    export function actions(): ActionSequence {
        return selenideDriver.actions();
    }

    export function element(cssOrXpathOrBy: string | By): Element {
        return selenideDriver.element(cssOrXpathOrBy);
    }

    export function all(cssOrXpathOrBy: string | By): Collection {
        return selenideDriver.all(cssOrXpathOrBy);
    }

    export async function should(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return await selenideDriver.should(condition, timeout);
    }

    export async function shouldNot(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return await selenideDriver.shouldNot(condition, timeout);
    }

    export async function is(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return await selenideDriver.is(condition, timeout);
    }

    export async function isNot(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return await selenideDriver.isNot(condition, timeout);
    }

    export async function executeScript(script: string | Function, ...args: any[]) {
        return await selenideDriver.executeScript(script, args);
    }

    export async function nextTab() {
        return await selenideDriver.nextTab();
    }

    export async function previousTab() {
        return await selenideDriver.previousTab();
    }

    export async function switchToFrame(frameElement: Element) {
        return await selenideDriver.switchToFrame(frameElement);
    }

    export async function switchToDefaultFrame() {
        return await selenideDriver.switchToDefaultFrame();
    }

    export async function clearCacheAndCookies() {
        return await selenideDriver.clearCacheAndCookies();
    }

}
