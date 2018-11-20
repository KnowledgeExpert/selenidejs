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

import { ActionSequence, By, WebElement } from 'selenium-webdriver';
import { Actions } from './actions';
import { Collection } from './collection';
import { Condition } from './condition';
import { Configuration } from './configuration';
import { Element } from './element';
import { ElementsBuilder } from './elementsBuilder';
import { HookExecutor } from './hooks/hookExecutor';
import { SearchContext } from './locators/searchContext';
import { Wait } from './wait';


export class Driver implements SearchContext {

    readonly configuration: Configuration;
    readonly wait: Wait<Driver>;

    constructor(customConfiguration?: Configuration) {
        this.configuration = new Configuration(customConfiguration);
        const hookExecutor = new HookExecutor<Driver>(this, this);
        this.wait = new Wait<Driver>(this, this.configuration, hookExecutor);
    }

    async open(url: string) {
        return Actions.open(url)(this);
    }

    async resizeWindow(width = this.configuration.windowWidth, height = this.configuration.windowHeight) {
        return Actions.resizeWindow(width, height)(this);
    }

    async close() {
        return Actions.close(this);
    }

    async quit() {
        return Actions.quit(this);
    }

    async refresh() {
        return Actions.refresh(this);
    }

    async acceptAlert() {
        return Actions.acceptAlert(this);
    }

    async url(): Promise<string> {
        return Actions.url(this);
    }

    async title(): Promise<string> {
        return Actions.title(this);
    }

    async pageSource(): Promise<string> {
        return Actions.pageSource(this);
    }

    /* tslint:disable:ban-types */
    async executeScript(script: string | Function, ...args: any[]) {
        return Actions.executeScript(script, ...args)(this);
    }
    /* tslint:enable:ban-types */

    async getTabs() {
        return Actions.tabs(this);
    }

    async nextTab() {
        return Actions.nextTab(this);
    }

    async previousTab() {
        return Actions.previousTab(this);
    }

    async switchToTab(tabId: string) {
        return Actions.switchToTab(tabId)(this);
    }

    async switchToFrame(frameElement: Element) {
        return Actions.switchToFrame(frameElement)(this);
    }

    async switchToDefaultFrame() {
        return Actions.switchToDefaultFrame(this);
    }

    async clearCacheAndCookies() {
        return Actions.clearCacheAndCookies(this);
    }

    async screenshot(): Promise<Buffer> {
        return Actions.screenshot(this);
    }

    actions(): ActionSequence {
        return this.configuration.webdriver.actions();
    }

    element(cssOrXpathOrBy: string | By): Element {
        return ElementsBuilder.element(cssOrXpathOrBy)(this);
    }

    all(cssOrXpathOrBy: string | By): Collection {
        return ElementsBuilder.all(cssOrXpathOrBy)(this);
    }

    wrapElement(webelement: WebElement): Element {
        return ElementsBuilder.wrapElement(webelement)(this);
    }

    wrapAll(webelements: WebElement[]): Collection {
        return ElementsBuilder.wrapAll(webelements)(this);
    }

    async should(condition: Condition<Driver>, timeout?: number): Promise<Driver> {
        return this.wait.shouldMatch(condition, timeout);
    }

    async shouldNot(condition: Condition<Driver>, timeout?: number): Promise<Driver> {
        return this.should(Condition.not(condition), timeout);
    }

    async is(condition: Condition<Driver>, timeout?: number): Promise<boolean> {
        return this.wait.isMatch(condition, timeout);
    }

    async isNot(condition: Condition<Driver>, timeout?: number): Promise<boolean> {
        return this.is(Condition.not(condition), timeout);
    }

    async findElements(locator: By): Promise<WebElement[]> {
        return this.configuration.webdriver.findElements(locator);
    }

    async findElement(locator: By): Promise<WebElement> {
        return this.configuration.webdriver.findElement(locator);
    }

    toString() {
        return 'browser';
    }

}
