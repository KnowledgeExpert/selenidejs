"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const utils_1 = require("./helpers/utils");
const collection_1 = require("./collection");
const configuration_1 = require("./configuration");
const element_1 = require("./element");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const wait_1 = require("./wait");
const elementActionHooks_1 = require("./refactor/elementActionHooks");
class Browser {
    constructor(configuration = {}) {
        this.configuration = new configuration_1.Configuration(configuration);
        this.wait = new wait_1.Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
    }
    static configuredWith() {
        return configuration_1.Customized.browser();
    }
    static drivedBy(driver) {
        return Browser.configuredWith().driver(driver);
    }
    static chromeWith() {
        return Browser
            .drivedBy(new selenium_webdriver_1.Builder().withCapabilities(selenium_webdriver_1.Capabilities.chrome()).build());
    }
    static chrome() {
        return Browser.chromeWith().build();
    }
    get driver() {
        return this.configuration.driver;
    }
    toString() {
        return 'browser';
    }
    /* SearchContext */
    async findWebElement(by) {
        return this.driver.findElement(by);
    }
    async findWebElements(by) {
        return this.driver.findElements(by);
    }
    /* Elements */
    element(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementLocator_1.ByWebElementLocator(by, this);
        return new element_1.Element(locator, this.configuration);
    }
    all(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, this);
        return new collection_1.Collection(locator, this.configuration);
    }
    /* With conditions */ // todo: extract interface? provide base abstract class implementation with generics?
    async should(condition, timeout = this.configuration.timeout) {
        this.wait.until(condition, timeout);
        return this;
    }
    async shouldNot(condition, timeout) {
        this.should(wait_1.Condition.not(condition), timeout);
        return this;
    }
    async waitUntil(condition, timeout = this.configuration.timeout) {
        return this.wait.until(condition, timeout);
    }
    async waitUntilNot(condition, timeout = this.configuration.timeout) {
        return this.wait.until(wait_1.Condition.not(condition), timeout);
    }
    async matches(condition) {
        return wait_1.Condition.asPredicate(condition)(this);
    }
    async matchesNot(condition) {
        return this.matches(wait_1.Condition.not(condition));
    }
    /* Commands */
    async perform(command, timeout = this.configuration.timeout) {
        await this.wait.command(command, timeout);
        return this;
    }
    // todo: should we implement all following commands through calling perform method from above?
    /* tslint:disable:ban-types */
    async executeScript(script, ...args) {
        return this.driver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */
    async open(url) {
        if (this.configuration.windowHeight && this.configuration.windowWidth) {
            await this.resizeWindow(parseInt(this.configuration.windowWidth), parseInt(this.configuration.windowHeight));
        }
        await this.driver.get(url);
    }
    async resizeWindow(width, height) {
        await this.driver.manage().window().setSize(width, height);
    }
    async screenshot() {
        return this.configuration.fullPageScreenshot
            ? Buffer.from(await this.driver.takeScreenshot(), 'base64') // todo: change to fullPageScreenshot(driver);
            : Buffer.from(await this.driver.takeScreenshot(), 'base64');
    }
    async closeCurrentTab() {
        await this.driver.close();
    }
    async quit() {
        await this.driver.quit();
    }
    // todo: should it fail if there is no next tab? probably yes... same for other similar methods
    async nextTab() {
        const currentTab = await this.driver.getWindowHandle();
        const allTabs = await this.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.driver
            .switchTo()
            .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
    }
    async previousTab() {
        const currentTab = await this.driver.getWindowHandle();
        const allTabs = await this.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.driver
            .switchTo()
            .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }
    async switchToFrame(frameElement) {
        await this.wait.command(async (browser) => {
            browser.driver.switchTo().frame(await frameElement.getWebElement());
        });
    }
    async switchToDefaultFrame() {
        await this.driver.switchTo().defaultContent();
    }
    async clearCacheAndCookies() {
        await this.driver.executeScript('window.localStorage.clear();').catch(ignored => {
        });
        await this.driver.executeScript('window.sessionStorage.clear();').catch(ignored => {
        });
        await this.driver.manage().deleteAllCookies().catch(ignored => {
        });
    }
    /* Queries */
    async get(query, timeout = this.configuration.timeout) {
        return this.wait.query(query, timeout);
    }
}
__decorate([
    elementActionHooks_1.ElementActionHooks
], Browser.prototype, "perform", null);
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map