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
import { Utils } from './helpers/utils';
import { Collection } from './collection';
import { Configuration, Customized } from './configuration';
import { Element } from './element';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { SearchContext } from './searchContext';
import { Command, Condition, Query, Wait } from './wait';
import { ElementActionHooks } from './refactor/elementActionHooks';
import { Assertable } from './entity';

export class Browser implements SearchContext, Assertable<Browser> {

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

    private readonly wait: Wait<Browser>;

    constructor(configuration: Partial<Configuration> = {}) {
        this.configuration = new Configuration(configuration);
        this.wait = new Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
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

    element(cssOrXpathOrBy: string | By): Element {
        const by = Utils.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementLocator(by, this);
        return new Element(locator, this.configuration);
    }

    all(cssOrXpathOrBy: string | By): Collection {
        const by = Utils.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementsLocator(by, this);
        return new Collection(locator, this.configuration);
    }

    /* With conditions */ // todo: extract interface? provide base abstract class implementation with generics?

    async should(condition: BrowserCondition, timeout: number = this.configuration.timeout): Promise<Browser> {
        this.wait.until(condition, timeout);
        return this;
    }

    async shouldNot(condition: BrowserCondition, timeout?: number): Promise<Browser> {
        this.should(Condition.not(condition), timeout);
        return this;
    }

    async waitUntil(condition: BrowserCondition, timeout: number = this.configuration.timeout): Promise<boolean> {
        return this.wait.until(condition, timeout);
    }

    async waitUntilNot(condition: BrowserCondition, timeout: number = this.configuration.timeout): Promise<boolean> {
        return this.wait.until(Condition.not(condition), timeout);
    }

    async matches(condition: BrowserCondition): Promise<boolean> {
        return Condition.asPredicate(condition)(this);
    }

    async matchesNot(condition: BrowserCondition): Promise<boolean> {
        return this.matches(Condition.not(condition));
    }

    /* Commands */

    @ElementActionHooks
    async perform(command: Command<Browser>, timeout: number = this.configuration.timeout): Promise<Browser> {
        await this.wait.command(command, timeout);
        return this;
    }

    // todo: should we implement all following commands through calling perform method from above?

    /* tslint:disable:ban-types */
    async executeScript(script: string | Function, ...args: any[]) {
        return this.driver.executeScript(script, ...args);
    }
    /* tslint:enable:ban-types */

    async open(url: string) {
        if (this.configuration.windowHeight && this.configuration.windowWidth) {
            await this.resizeWindow(
                parseInt(this.configuration.windowWidth),
                parseInt(this.configuration.windowHeight)
            );
        }
        await this.driver.get(url);
    }

    async resizeWindow(width: number, height: number) {
        await this.driver.manage().window().setSize(width, height);
    }

    async screenshot(): Promise<Buffer> {
        return this.configuration.fullPageScreenshot
            ? Buffer.from(await this.driver.takeScreenshot(), 'base64')  // todo: change to fullPageScreenshot(driver);
            : Buffer.from(await this.driver.takeScreenshot(), 'base64');
    }

    async closeCurrentTab() {
        await this.driver.close();
    }

    async quit() {
        await this.driver.quit();
    }

    // todo: should it fail if there is no next tab? probably yes... same for other similar methods
    async nextTab() { // todo: name does not tell that there will be a switch.... rename to switchToNextTab? or goTo...
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

    async switchToFrame(frameElement: Element) {
        await this.wait.command(async browser => {
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

    async get<R>(query: Query<Browser, R>, timeout: number = this.configuration.timeout): Promise<R> {
        return this.wait.query(query, timeout);
    }
}
