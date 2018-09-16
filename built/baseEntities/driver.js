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
Object.defineProperty(exports, "__esModule", { value: true });
const condition_1 = require("../conditions/condition");
const be_1 = require("../conditions/helpers/be");
const fullpageScreenshot_1 = require("../queries/fullpageScreenshot");
const utils_1 = require("../utils");
const collection_1 = require("./collection");
const configuration_1 = require("./configuration");
const element_1 = require("./element");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const wait_1 = require("./wait");
class Driver {
    constructor(customConfiguration) {
        this.configuration = new configuration_1.Configuration(customConfiguration);
        this.wait = new wait_1.Wait(this, this);
    }
    async get(url) {
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
    async url() {
        return this.configuration.webdriver.getCurrentUrl();
    }
    async title() {
        return this.configuration.webdriver.getTitle();
    }
    async pageSource() {
        return this.configuration.webdriver.getPageSource();
    }
    async screenshot() {
        return this.configuration.fullpageScreenshot
            ? new fullpageScreenshot_1.FullpageScreenshot().perform(this)
            : Buffer.from(await this.configuration.webdriver.takeScreenshot(), 'base64');
    }
    async resizeWindow(width, height) {
        await this.configuration.webdriver.manage().window().setSize(width, height);
    }
    actions() {
        return this.configuration.webdriver.actions();
    }
    element(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementLocator_1.ByWebElementLocator(by, this);
        return new element_1.Element(locator, this);
    }
    all(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, this);
        return new collection_1.Collection(locator, this);
    }
    async should(condition, timeout) {
        return timeout
            ? this.wait.shouldMatch(condition, timeout)
            : this.wait.shouldMatch(condition);
    }
    async shouldNot(condition, timeout) {
        return this.should(condition_1.Condition.not(condition), timeout);
    }
    async is(condition, timeout) {
        return timeout
            ? this.wait.isMatch(condition, timeout)
            : this.wait.isMatch(condition);
    }
    async isNot(condition, timeout) {
        return this.is(condition_1.Condition.not(condition), timeout);
    }
    /* tslint:disable:ban-types */
    async executeScript(script, ...args) {
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
    async switchToTab(tabId) {
        await this.configuration.webdriver.switchTo().window(tabId);
    }
    async switchToFrame(frameElement) {
        await frameElement.should(be_1.be.visible);
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
    async findElements(locator) {
        return this.configuration.webdriver.findElements(locator);
    }
    async findElement(locator) {
        return this.configuration.webdriver.findElement(locator);
    }
    toString() {
        return 'browser';
    }
}
exports.Driver = Driver;
//# sourceMappingURL=driver.js.map