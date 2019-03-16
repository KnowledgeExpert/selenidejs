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
import { Extensions } from './utils/extensions';
import { Collection } from './collection';
import { Configuration, Customized } from './configuration';
import { Element } from './element';
import { Assertable, Entity, Matchable } from './entity';
import isAbsoluteUrl = Extensions.isAbsoluteUrl;
import { query } from './queries';
import { BrowserWebElementByLocator } from './locators/BrowserWebElementByLocator';
import { BrowserWebElementsByLocator } from './locators/BrowserWebElementsByLocator';

export class Browser extends Entity implements Assertable, Matchable {

    static configuredWith(): Customized<Browser> {
        return Customized.browser();
    }

    static chromeWith(): Customized<Browser> {
        return Browser
            .configuredWith().driver(new Builder().withCapabilities(Capabilities.chrome()).build());
    }

    static chrome(): Browser {
        return Browser.chromeWith().build();
    }

    constructor(configuration: Partial<Configuration> = {}) {
        super(new Configuration(configuration));
    }

    with(customConfig: Partial<Configuration>): Browser {
        return new Browser(new Configuration({ ...this.configuration, ...customConfig }));
    }

    get driver(): WebDriver {
        return this.configuration.driver;
    }

    toString() {
        return 'browser';
    }

    /* Elements */

    element(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Element {
        const by = Extensions.toBy(cssOrXpathOrBy);
        const locator = new BrowserWebElementByLocator(by, this);
        const configuration = customized === undefined ?
            this.configuration :
            new Configuration({ ...this.configuration, ...customized });
        return new Element(locator, configuration);
    }

    all(cssOrXpathOrBy: string | By, customized?: Partial<Configuration>): Collection {
        const by = Extensions.toBy(cssOrXpathOrBy);
        const locator = new BrowserWebElementsByLocator(by, this);
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

    async back() {
        await this.driver.navigate().back();
    }

    async forward() {
        await this.driver.navigate().forward();
    }

    async goToNextTab(): Promise<Browser> {
        await this.driver
            .switchTo()
            .window(await query.nextTab(this));
        return this;
    }

    async goToPreviousTab(): Promise<Browser> {
        await this.driver
            .switchTo()
            .window(await query.previousTab(this));
        return this;
    }

    async goToTab(indexOrId: number | string): Promise<Browser> {
        if (typeof indexOrId === 'number') {
            await this.driver
                .switchTo()
                .window(await (query.tab(indexOrId)(this)));
        } else {
            await this.driver
                .switchTo()
                .window(indexOrId);
        }
        return this;
    }

/*    async switchToFrame(frameElement: Element): Promise<Browser> {
        await this.wait.command(async browser => {
            browser.driver.switchTo().frame(await frameElement.getWebElement());
        });
        return this;
    }*/

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

    async clearCookies(): Promise<Browser> {
        await this.driver.manage().deleteAllCookies()
            .catch(ignored => {});
        return this;
    }

/*
    async deleteCookie(name: string): Promise<Browser> {
        await this.driver.manage().deleteCookie(name);
        return this;
    }*/

    get alert() {
        return this.driver.switchTo().alert();
    }

    // todo: there are lot more methods in switchTo().alert() should not we just expose switchTo or alert?
/*    async acceptAlert(): Promise<Browser> {
        await this.driver.switchTo().alert().accept();
        return this;
    }

    async dismissAlert(): Promise<Browser> {
        await this.driver.switchTo().alert().dismiss();
        return this;
    }*/
}
