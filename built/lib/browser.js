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
const fullpageScreenshot_1 = require("./refactor/fullpageScreenshot");
const utils_1 = require("./utils");
const collection_1 = require("./collection");
const configuration_1 = require("./configuration");
const element_1 = require("./element");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const wait_1 = require("./wait");
// todo: align here and everywhere names...
// query thing should be a getter if no params and noun as a name, action should be verb and method
class Browser {
    constructor(configuration = configuration_1.Configuration.shared) {
        this.configuration = configuration;
        this.wait = new wait_1.Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
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
    /* With conditions */ // todo: extract interface? provide base abstract class implementation?
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
        return wait_1.Condition.toBoolean(condition).call(this);
    }
    async matchesNot(condition) {
        return this.matches(wait_1.Condition.not(condition));
    }
    /* Queries */
    // todo: do we need syntax: await browser.query(customQuery); ?
    // instead of making user write await customBrowserQuery(browser);
    async url() {
        return this.driver.getCurrentUrl();
    }
    async title() {
        return this.driver.getTitle();
    }
    async pageSource() {
        return this.driver.getPageSource();
    }
    async screenshot() {
        return this.configuration.fullPageScreenshot
            ? new fullpageScreenshot_1.FullpageScreenshot().perform(this)
            : Buffer.from(await this.driver.takeScreenshot(), 'base64');
    }
    /* tslint:disable:ban-types */
    async executeScript(script, ...args) {
        return this.driver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */
    // todo: do we need it as getter? for that we had to workaround with this.getAllWindowHandles...:(
    get tabs() {
        return this.getAllWindowHandles();
    }
    get tabsNumber() {
        return this.tabs.then(it => it.length);
    }
    /* Commands */
    // todo: do we need syntax: await browser.perform(load('http://google.com'), close, quit);
    // or for such a case:
    // await browser.perform(customCommand); ?
    // instead of making user write await customBrowserCommand(browser);
    // todo: should we rename it to open ? or load? (open in new tab, load in current tab)...
    async get(url) {
        if (this.configuration.windowHeight && this.configuration.windowWidth) {
            await this.resizeWindow(parseInt(this.configuration.windowWidth), parseInt(this.configuration.windowHeight));
        }
        await this.driver.get(url);
    }
    async resizeWindow(width, height) {
        await this.driver.manage().window().setSize(width, height);
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
    /* private helpers */
    async getAllWindowHandles() {
        return this.driver.getAllWindowHandles();
    }
}
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map