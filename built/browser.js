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
const selenium_webdriver_1 = require("selenium-webdriver");
const extensions_1 = require("./utils/extensions");
const collection_1 = require("./collection");
const configuration_1 = require("./configuration");
const element_1 = require("./element");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const entity_1 = require("./entity");
class Browser extends entity_1.Entity {
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
    constructor(configuration = {}) {
        super(configuration.timeout, configuration.onFailureHooks);
        this.configuration = new configuration_1.Configuration(configuration);
    }
    // todo: isn't it a bit confusing taking into account browser.element(With.id(...)) ?
    // example: browser.with({timeout: 5000}).element(With.id(...)).should(have.text('foo'));
    with(custom) {
        return new Browser(new configuration_1.Configuration(Object.assign({}, this.configuration, custom)));
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
    // todo: how to create element with specific timeout?
    element(cssOrXpathOrBy, customized) {
        const by = extensions_1.Extensions.toBy(cssOrXpathOrBy);
        const locator = new byWebElementLocator_1.ByWebElementLocator(by, this);
        const configuration = customized === undefined ?
            this.configuration :
            new configuration_1.Configuration(Object.assign({}, this.configuration, customized));
        return new element_1.Element(locator, configuration);
    }
    all(cssOrXpathOrBy, customized) {
        const by = extensions_1.Extensions.toBy(cssOrXpathOrBy);
        const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, this);
        const configuration = customized === undefined ?
            this.configuration :
            new configuration_1.Configuration(Object.assign({}, this.configuration, customized));
        return new collection_1.Collection(locator, configuration);
    }
    /* Commands */
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
        return this;
    }
    async resizeWindow(width, height) {
        await this.driver.manage().window().setSize(width, height);
        return this;
    }
    async screenshot() {
        return this.configuration.fullPageScreenshot
            ? Buffer.from(await this.driver.takeScreenshot(), 'base64') // todo: change to fullPageScreenshot(driver);
            : Buffer.from(await this.driver.takeScreenshot(), 'base64');
    }
    async closeCurrentTab() {
        await this.driver.close();
        return this;
    }
    async quit() {
        await this.driver.quit();
    }
    // todo: should it fail if there is no next tab? probably yes... same for other similar methods
    async nextTab() {
        // todo: name does not tell that there will be a switch.... rename to switchToNextTab? or goTo...
        const currentTab = await this.driver.getWindowHandle();
        const allTabs = await this.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.driver
            .switchTo()
            .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
        return this;
    }
    async previousTab() {
        const currentTab = await this.driver.getWindowHandle();
        const allTabs = await this.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.driver
            .switchTo()
            .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
        return this;
    }
    async switchToFrame(frameElement) {
        await this.wait.command(async (browser) => {
            browser.driver.switchTo().frame(await frameElement.getWebElement());
        });
        return this;
    }
    async switchToDefaultFrame() {
        await this.driver.switchTo().defaultContent();
        return this;
    }
    async clearCacheAndCookies() {
        await this.driver.executeScript('window.localStorage.clear();').catch(ignored => {
        });
        await this.driver.executeScript('window.sessionStorage.clear();').catch(ignored => {
        });
        await this.driver.manage().deleteAllCookies().catch(ignored => {
        });
        return this;
    }
}
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map