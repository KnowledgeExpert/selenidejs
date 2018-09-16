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
import { Condition } from '../conditions/condition';
import { DriverCondition } from '../conditions/driverCondition';
import { be } from '../conditions/helpers/be';
import { FullpageScreenshot } from '../queries/fullpageScreenshot';
import { Utils } from '../utils';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Element } from './element';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { SearchContext } from './SearchContext';
import { Wait } from './wait';


export class Driver implements SearchContext {

    readonly configuration: Configuration;
    readonly wait: Wait<Driver>;

    constructor(customConfiguration: Configuration) {
        this.configuration = new Configuration(customConfiguration);
        this.wait = new Wait(this, this);
    }

    async get(url: string) {
        if (this.configuration.windowHeight && this.configuration.windowWidth) {
            await this.resizeWindow(this.configuration.windowWidth, this.configuration.windowHeight);
        }
        await this.configuration.webdriver.get(url);
    }

    async close() {
        await this.configuration.webdriver.close();
    }

    async quit() {
        await this.configuration.webdriver.quit();
    }

    async refresh() {
        await this.configuration.webdriver.navigate().refresh();
    }

    async acceptAlert() {
        await this.configuration.webdriver.switchTo().alert().accept();
    }

    async url(): Promise<string> {
        return this.configuration.webdriver.getCurrentUrl();
    }

    async title(): Promise<string> {
        return this.configuration.webdriver.getTitle();
    }

    async pageSource(): Promise<string> {
        return this.configuration.webdriver.getPageSource();
    }

    async screenshot(): Promise<Buffer> {
        return this.configuration.fullpageScreenshot
            ? new FullpageScreenshot().perform(this)
            : Buffer.from(await this.configuration.webdriver.takeScreenshot(), 'base64');
    }

    async resizeWindow(width: number, height: number) {
        await this.configuration.webdriver.manage().window().setSize(width, height);
    }

    actions(): ActionSequence {
        return this.configuration.webdriver.actions();
    }

    element(cssOrXpathOrBy: string | By): Element {
        const by = Utils.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementLocator(by, this);
        return new Element(locator, this);
    }

    all(cssOrXpathOrBy: string | By): Collection {
        const by = Utils.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementsLocator(by, this);
        return new Collection(locator, this);
    }

    async should(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return timeout
            ? this.wait.shouldMatch(condition, timeout)
            : this.wait.shouldMatch(condition);
    }

    async shouldNot(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return this.should(Condition.not(condition), timeout);
    }

    async is(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return timeout
            ? this.wait.isMatch(condition, timeout)
            : this.wait.isMatch(condition);
    }

    async isNot(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return this.is(Condition.not(condition), timeout);
    }

    /* tslint:disable:ban-types */
    async executeScript(script: string | Function, ...args: any[]) {
        return this.configuration.webdriver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */

    async getTabs() {
        return this.configuration.webdriver.getAllWindowHandles();
    }

    async nextTab() {
        const currentTab = await this.configuration.webdriver.getWindowHandle();
        const allTabs = await this.configuration.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.configuration.webdriver
            .switchTo()
            .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
    }

    async previousTab() {
        const currentTab = await this.configuration.webdriver.getWindowHandle();
        const allTabs = await this.configuration.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.configuration.webdriver
            .switchTo()
            .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }

    async switchToTab(tabId: string) {
        await this.configuration.webdriver.switchTo().window(tabId);
    }

    async switchToFrame(frameElement: Element) {
        await frameElement.should(be.visible);
        await this.configuration.webdriver.switchTo().frame(await frameElement.getWebElement());
    }

    async switchToDefaultFrame() {
        await this.configuration.webdriver.switchTo().defaultContent();
    }

    async clearCacheAndCookies() {
        await this.configuration.webdriver.executeScript('window.localStorage.clear();').catch(ignored => {
        });
        await this.configuration.webdriver.executeScript('window.sessionStorage.clear();').catch(ignored => {
        });
        await this.configuration.webdriver.manage().deleteAllCookies().catch(ignored => {
        });
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
