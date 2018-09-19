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
import { Condition } from './conditions/condition';
import { DriverCondition } from './conditions/driverCondition';
import { be } from './conditions/helpers/be';
import { Configuration } from './configuration';
import { Element } from './element';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { FullpageScreenshot } from './queries/fullpageScreenshot';
import { Utils } from './utils';
import { Wait } from './wait';


export class Driver {

    readonly config: Configuration;
    readonly wait: Wait<Driver>;

    constructor(config = {} as Configuration) {
        this.config = new Configuration(config);
        this.wait = new Wait(this, this.config);
    }

    async get(url: string) {
        if (this.config.windowHeight && this.config.windowWidth) {
            await this.resizeWindow(parseInt(this.config.windowHeight), parseInt(this.config.windowWidth));
        }
        await this.config.webdriver.get(url);
    }

    async close() {
        await this.config.webdriver.close();
    }

    async quit() {
        await this.config.webdriver.quit();
    }

    async refresh() {
        await this.config.webdriver.navigate().refresh();
    }

    async acceptAlert() {
        await this.config.webdriver.switchTo().alert().accept();
    }

    async url(): Promise<string> {
        return this.config.webdriver.getCurrentUrl();
    }

    async title(): Promise<string> {
        return this.config.webdriver.getTitle();
    }

    async pageSource(): Promise<string> {
        return this.config.webdriver.getPageSource();
    }

    async screenshot(): Promise<Buffer> {
        return this.config.fullpageScreenshot
            ? new FullpageScreenshot().perform(this)
            : Buffer.from(await this.config.webdriver.takeScreenshot(), 'base64');
    }

    async resizeWindow(width: number, height: number) {
        await this.config.webdriver.manage().window().setSize(width, height);
    }

    actions(): ActionSequence {
        return this.config.webdriver.actions();
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
        return this.config.webdriver.executeScript(script, ...args);
    }

    /* tslint:enable:ban-types */

    async getTabs() {
        return this.config.webdriver.getAllWindowHandles();
    }

    async nextTab() {
        const currentTab = await this.config.webdriver.getWindowHandle();
        const allTabs = await this.config.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.config.webdriver
            .switchTo()
            .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
    }

    async previousTab() {
        const currentTab = await this.config.webdriver.getWindowHandle();
        const allTabs = await this.config.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.config.webdriver
            .switchTo()
            .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }

    async switchToTab(tabId: string) {
        await this.config.webdriver.switchTo().window(tabId);
    }

    async switchToFrame(frameElement: Element) {
        await frameElement.should(be.visible);
        await this.config.webdriver.switchTo().frame(await frameElement.getWebElement());
    }

    async switchToDefaultFrame() {
        await this.config.webdriver.switchTo().defaultContent();
    }

    async clearCacheAndCookies() {
        await this.config.webdriver.executeScript('window.localStorage.clear();').catch(ignored => {
        });
        await this.config.webdriver.executeScript('window.sessionStorage.clear();').catch(ignored => {
        });
        await this.config.webdriver.manage().deleteAllCookies().catch(ignored => {
        });
    }

    toString() {
        return 'browser';
    }

}
