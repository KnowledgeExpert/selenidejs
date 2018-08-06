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

import { ActionSequence, By, WebDriver } from "selenium-webdriver";
import { ByWebElementLocator } from "./locators/byWebElementLocator";
import { ByWebElementsLocator } from "./locators/byWebElementsLocator";
import { With } from "../locators/with";
import { be } from "../conditions/helpers/be";
import { Element } from "./element";
import { Configuration } from "./config/configuration";
import { Wait } from "./wait";
import { Condition } from "../conditions/condition";
import { DriverCondition } from "../conditions/driverCondition";
import { Collection } from "./collection";
import { FullpageScreenshot } from "../queries/fullpageScreenshot";


export class Driver {

    public readonly config: Configuration;
    public readonly webdriver: WebDriver;
    readonly wait: Wait<Driver>;

    constructor(webdriver: WebDriver, config = {} as Configuration) {
        this.config = new Configuration(config);
        this.webdriver = webdriver;
        this.wait = new Wait(this, this.config);
    }

    async get(url: string) {
        if (this.config.windowHeight && this.config.windowWidth) {
            await this.resizeWindow(parseInt(this.config.windowHeight), parseInt(this.config.windowWidth));
        }
        await this.webdriver.get(url);
    }

    async close() {
        await this.webdriver.close();
    }

    async quit() {
        await this.webdriver.quit();
    }

    async url(): Promise<string> {
        return await this.webdriver.getCurrentUrl();
    }

    async title(): Promise<string> {
        return await this.webdriver.getTitle();
    }

    async pageSource(): Promise<string> {
        return await this.webdriver.getPageSource();
    }

    async screenshot(): Promise<Buffer> {
        return this.config.fullpageScreenshot
            ? await new FullpageScreenshot().perform(this)
            : new Buffer(await this.webdriver.takeScreenshot(), 'base64');
    }

    async resizeWindow(width: number, height: number) {
        await this.webdriver.manage().window().setSize(width, height);
    }

    actions(): ActionSequence {
        return this.webdriver.actions();
    }

    element(cssOrXpathOrBy: string | By): Element {
        const by = (typeof cssOrXpathOrBy === 'string')
            ? cssOrXpathOrBy.includes('/') ? With.xpath(cssOrXpathOrBy) : With.css(cssOrXpathOrBy)
            : cssOrXpathOrBy;
        const locator = new ByWebElementLocator(by, this);
        return new Element(locator, this);
    }

    all(cssOrXpathOrBy: string | By): Collection {
        const by = (typeof cssOrXpathOrBy === 'string')
            ? cssOrXpathOrBy.includes('/') ? With.xpath(cssOrXpathOrBy) : With.css(cssOrXpathOrBy)
            : cssOrXpathOrBy;
        const locator = new ByWebElementsLocator(by, this);
        return new Collection(locator, this);
    }

    async should(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return timeout
            ? await this.wait.shouldMatch(condition, timeout)
            : await this.wait.shouldMatch(condition);
    }

    async shouldNot(condition: DriverCondition, timeout?: number): Promise<Driver> {
        return await this.should(Condition.not(condition), timeout);
    }

    async is(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return timeout
            ? await this.wait.isMatch(condition, timeout)
            : await this.wait.isMatch(condition);
    }

    async isNot(condition: DriverCondition, timeout?: number): Promise<boolean> {
        return await this.is(Condition.not(condition), timeout);
    }

    async executeScript(script: string | Function, ...args: any[]) {
        return await this.webdriver.executeScript(script, args);
    }

    async nextTab() {
        const currentTab = await this.webdriver.getWindowHandle();
        const allTabs = await this.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.webdriver.switchTo().window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1])
    }

    async previousTab() {
        const currentTab = await this.webdriver.getWindowHandle();
        const allTabs = await this.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.webdriver.switchTo().window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }

    async switchToFrame(frameElement: Element) {
        await frameElement.should(be.visible);
        await this.webdriver.switchTo().frame(await frameElement.getWebElement());
    }

    async switchToDefaultFrame() {
        await this.webdriver.switchTo().defaultContent();
    }

    async clearCacheAndCookies() {
        await this.webdriver.executeScript('window.localStorage.clear();').catch(ignored => {
        });
        await this.webdriver.executeScript('window.sessionStorage.clear();').catch(ignored => {
        });
        await this.webdriver.manage().deleteAllCookies().catch(ignored => {
        });
    }

    toString() {
        return 'browser';
    }

}