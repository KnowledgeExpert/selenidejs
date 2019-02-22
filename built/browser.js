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
var isAbsoluteUrl = extensions_1.Extensions.isAbsoluteUrl;
const queries_1 = require("./queries");
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
        super(new configuration_1.Configuration(configuration));
    }
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
    async open(relativeOrAbsoluteUrl) {
        if (this.configuration.windowHeight && this.configuration.windowWidth) {
            await this.resizeWindow(parseInt(this.configuration.windowWidth), parseInt(this.configuration.windowHeight));
        }
        const absoluteUrl = isAbsoluteUrl(relativeOrAbsoluteUrl) ?
            relativeOrAbsoluteUrl :
            this.configuration.baseUrl + relativeOrAbsoluteUrl;
        await this.driver.get(absoluteUrl);
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
    async refresh() {
        await this.driver.navigate().refresh();
    }
    async back() {
        await this.driver.navigate().back();
    }
    async forward() {
        await this.driver.navigate().forward();
    }
    async goToNextTab() {
        await this.driver
            .switchTo()
            .window(await queries_1.query.nextTab(this));
        return this;
    }
    async goToPreviousTab() {
        await this.driver
            .switchTo()
            .window(await queries_1.query.previousTab(this));
        return this;
    }
    async goToTab(indexOrId) {
        if (typeof indexOrId === 'number') {
            await this.driver
                .switchTo()
                .window(await (queries_1.query.tab(indexOrId)(this)));
        }
        else {
            await this.driver
                .switchTo()
                .window(indexOrId);
        }
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
    // todo: cache is not the same as LocalAndSessionStorage; so we have to be verbose in name; but do we need it then?
    /*    async clearLocalAndSessionStorageAndCookies(): Promise<Browser> {
            await this.driver.executeScript('window.localStorage.clear();')
                .catch(ignored => {});
            await this.driver.executeScript('window.sessionStorage.clear();')
                .catch(ignored => {});
            await this.driver.manage().deleteAllCookies()
                .catch(ignored => {});
            return this;
        }*/
    async clearLocalStorage() {
        await this.driver.executeScript('window.localStorage.clear();')
            .catch(ignored => { });
        return this;
    }
    async clearSessionStorage() {
        await this.driver.executeScript('window.sessionStorage.clear();')
            .catch(ignored => { });
        return this;
    }
    async deleteCookies() {
        await this.driver.manage().deleteAllCookies()
            .catch(ignored => { });
        return this;
    }
    async deleteCookie(name) {
        await this.driver.manage().deleteCookie(name);
        return this;
    }
}
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map