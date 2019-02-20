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

import { Builder, By, Capabilities, WebDriver, WebElement } from 'selenium-webdriver';
import { BrowserCondition } from './conditions';
import { Extensions } from './utils/extensions';
import { Collection } from './collection';
import { Configuration, Customized } from './configuration';
import { Element } from './element';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { SearchContext } from './searchContext';
import { Command, Condition, Query, Wait } from './wait';
import { ElementActionHooks } from './refactor/elementActionHooks';
import { Assertable, Entity, Matchable } from './entity';
import isAbsoluteUrl = Extensions.isAbsoluteUrl;

export class Browser extends Entity implements SearchContext, Assertable, Matchable {

    static configuredWith(): Customized<Browser> {
        return Customized.browser();
    }

    static drivedBy(driver: WebDriver): Customized<Browser> {
        return Browser.configuredWith().driver(driver);
    }

    static chromeWith(): Customized<Browser> {
        return Browser
            .drivedBy(new Builder().withCapabilities(Capabilities.chrome()).build());
    }

    static chrome(): Browser {
        return Browser.chromeWith().build();
    }

    // todo: make hooks for browser commands & asserts (for queries file a ticket) too

    readonly configuration: Configuration;

    constructor(configuration: Partial<Configuration> = {}) {
        super(configuration.timeout, configuration.onFailureHooks);
        this.configuration = new Configuration(configuration);
    }

    // todo: isn't it a bit confusing taking into account browser.element(With.id(...)) ?
    // example: browser.with({timeout: 5000}).element(With.id(...)).should(have.text('foo'));
    with(custom: Partial<Configuration>): Browser {
        return new Browser(new Configuration({ ...this.configuration, ...custom }));
    }

    get driver(): WebDriver {
        return this.configuration.driver;
    }

    toString() {
        return 'browser';
    }

    /* SearchContext */

    async findWebElement(by: By): Promise<WebElement> {
        return this.driver.findElement(by);
    }

    async findWebElements(by: By): Promise<WebElement[]> {
        return this.driver.findElements(by);
    }

    /* Elements */

    // todo: how to create element with specific timeout?
    element(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Element {
        const by = Extensions.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementLocator(by, this);
        const configuration = customized === undefined ?
            this.configuration :
            new Configuration({ ...this.configuration, ...customized });
        return new Element(locator, configuration);
    }

    all(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Collection {
        const by = Extensions.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementsLocator(by, this);
        const configuration = customized === undefined ?
            this.configuration :
            new Configuration({ ...this.configuration, ...customized });
        return new Collection(locator, configuration);
    }

    /* Commands */

    // todo: should we implement all following commands through calling perform method from above?

    /* tslint:disable:ban-types */
    async executeScript(script: string | Function, ...args: any[]) {
        return this.driver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */

    async open(relativeOrAbsoluteUrl: string): Promise<Browser> {
        if (this.configuration.windowHeight && this.configuration.windowWidth) {
            await this.resizeWindow(
                parseInt(this.configuration.windowWidth),
                parseInt(this.configuration.windowHeight)
            );
        }

        const absoluteUrl = isAbsoluteUrl(relativeOrAbsoluteUrl) ?
            relativeOrAbsoluteUrl :
            this.configuration.baseUrl + relativeOrAbsoluteUrl;

        await this.driver.get(absoluteUrl);
        return this;
    }

    async resizeWindow(width: number, height: number): Promise<Browser> {
        await this.driver.manage().window().setSize(width, height);
        return this;
    }

    async screenshot(): Promise<Buffer> {
        return this.configuration.fullPageScreenshot
            ? Buffer.from(await this.driver.takeScreenshot(), 'base64')  // todo: change to fullPageScreenshot(driver);
            : Buffer.from(await this.driver.takeScreenshot(), 'base64');
    }

    async closeCurrentTab(): Promise<Browser> {
        await this.driver.close();
        return this;
    }

    async quit() {
        await this.driver.quit();
    }

    async refresh() {
        await this.driver.navigate().refresh();
    }

    // todo: await browser.back ... is it ok? would not it be better with await browser.navigateBack()?
    // todo: also take into account this: browser. ... .then(perform.back) - does not it look weird?
    // todo: compare vs ... .then(perform.navigate.back) or ... .then(perform.navigateBack)
    // todo: or just await browser.navigate().back() ? same applies forward, but not refresh...
    // async back() {
    //     await this.driver.navigate().back();
    // }
    //
    // async forward() {
    //     await this.driver.navigate().forward();
    // }

    // todo: should it fail if there is no next tab? probably yes... same for other similar methods
    async nextTab(): Promise<Browser> {
        // todo: name does not tell that there will be a switch.... rename to switchToNextTab? or goTo...
        const currentTab = await this.driver.getWindowHandle();
        const allTabs = await this.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.driver
            .switchTo()
            .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
        return this;
    }

    async previousTab(): Promise<Browser> {
        const currentTab = await this.driver.getWindowHandle();
        const allTabs = await this.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await this.driver
            .switchTo()
            .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
        return this;
    }

    async switchToFrame(frameElement: Element): Promise<Browser> {
        await this.wait.command(async browser => {
            browser.driver.switchTo().frame(await frameElement.getWebElement());
        });
        return this;
    }

    async switchToDefaultFrame(): Promise<Browser> {
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

    async clearLocalStorage(): Promise<Browser> {
        await this.driver.executeScript('window.localStorage.clear();')
            .catch(ignored => {});
        return this;
    }

    async clearSessionStorage(): Promise<Browser> {
        await this.driver.executeScript('window.sessionStorage.clear();')
            .catch(ignored => {});
        return this;
    }

    async deleteCookies(): Promise<Browser> {
        await this.driver.manage().deleteAllCookies()
            .catch(ignored => {});
        return this;
    }
}
