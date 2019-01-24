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

import * as path from 'path';
import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { OnFailureHook } from './refactor/onFailureHook';
import { Browser } from './browser';


// todo: should we break it down into separate configurations - for element, browser, collection?

export class Configuration {

    static with(): Customized<Configuration> {
        return Customized.configuration();
    }

    static withDriver(driver: WebDriver): Customized<Configuration> {
        return Configuration.with().driver(driver);
    }

    // todo: should we make them readonly? can we? with this object.assign technique...
    readonly driver: WebDriver               = null;
    readonly timeout: number                 = 4000;
    readonly windowWidth: string             = '';  // todo: why not as number?
    readonly windowHeight: string            = '';  // todo: why not as number?
    readonly htmlPath: string                = path.resolve('./htmls');
    readonly screenshotPath: string          = path.resolve('./screenshots');  // todo: why not screenshotsPath?
    readonly fullPageScreenshot: boolean     = true;
    readonly onFailureHooks: OnFailureHook[] = [
        /*
        async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
            const driver = Utils.getDriver(entity);
            if (driver.config.screenshotPath) {
                const screenshotPath = await Utils.saveScreenshot(driver, Browser.config.screenshotPath);
                lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
            }
        },
        async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
            const driver = Utils.getDriver(entity);
            if (driver.config.htmlPath) {
                const htmlPath = await Utils.savePageSource(driver, Browser.config.htmlPath);
                lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
            }
        }
        */
    ];

    constructor(init?: Partial<Configuration>) {
        Object.assign(this, init);
        if (this.driver === null) {
            this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
        }
    }
}

// todo: rename to Customizing?
/* compare:
 *   Customizing.browser().driver(driver).timeout(1000).build()
 *    Customized.browser().driver(driver).timeout(1000).build()
 */
export class Customized<T> {  // todo: add generic? Customized<T> ... constructor(...T...) ... build():T
    static browser(): Customized<Browser> {
        return new Customized(Browser);
    }

    static configuration(): Customized<Configuration> {
        return new Customized(Configuration);
    }

    private configuration: Partial<Configuration>;

    // todo: limit customizedType values to Browser | Configuration
    private constructor(private readonly customizedType) {
        this.customizedType = customizedType;
        this.configuration = {};
    }

    build(): T {
        return new this.customizedType(this.configuration);
    }

    driver(webdriver: WebDriver) {
        this.configuration = {...this.configuration, driver: webdriver};
        return this;
    }

    timeout(milliseconds: number) {
        this.configuration = {...this.configuration, timeout: milliseconds};
        return this;
    }

    windowWidth(value: string) {
        this.configuration = {...this.configuration, windowWidth: value};
        return this;
    }

    windowHeight(value: string) {
        this.configuration = {...this.configuration, windowHeight: value};
        return this;
    }

    htmlPath(path: string) {
        this.configuration = {...this.configuration, htmlPath: path};
        return this;
    }

    screenshotPath(path: string) {
        this.configuration = {...this.configuration, screenshotPath: path};
        return this;
    }

    fullPageScreenshot(turnedOn: boolean) {
        this.configuration = {...this.configuration, fullPageScreenshot: turnedOn};
        return this;
    }

    onFailureHooks(hooks: OnFailureHook[]) {
        this.configuration = {...this.configuration, onFailureHooks: hooks};
        return this;
    }
}
