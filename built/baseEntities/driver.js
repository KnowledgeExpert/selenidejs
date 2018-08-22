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
    constructor(webdriver, config = {}) {
        this.config = new configuration_1.Configuration(config);
        this.webdriver = webdriver;
        this.wait = new wait_1.Wait(this, this.config);
    }
    async get(url) {
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
    async refresh() {
        await this.webdriver.navigate().refresh();
    }
    async url() {
        return this.webdriver.getCurrentUrl();
    }
    async title() {
        return this.webdriver.getTitle();
    }
    async pageSource() {
        return this.webdriver.getPageSource();
    }
    async screenshot() {
        return this.config.fullpageScreenshot
            ? new fullpageScreenshot_1.FullpageScreenshot().perform(this)
            : Buffer.from(await this.webdriver.takeScreenshot(), 'base64');
    }
    async resizeWindow(width, height) {
        await this.webdriver.manage().window().setSize(width, height);
    }
    actions() {
        return this.webdriver.actions();
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
        return this.webdriver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */
    async getTabs() {
        return this.webdriver.getAllWindowHandles();
    }
    async nextTab() {
        const currentTab = await this.webdriver.getWindowHandle();
        const allTabs = await this.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.webdriver
            .switchTo()
            .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
    }
    async previousTab() {
        const currentTab = await this.webdriver.getWindowHandle();
        const allTabs = await this.webdriver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.webdriver
            .switchTo()
            .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }
    async switchToTab(tabId) {
        await this.webdriver.switchTo().window(tabId);
    }
    async switchToFrame(frameElement) {
        await frameElement.should(be_1.be.visible);
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
exports.Driver = Driver;
//# sourceMappingURL=driver.js.map