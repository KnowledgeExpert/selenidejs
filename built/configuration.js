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
const path = require("path");
const selenium_webdriver_1 = require("selenium-webdriver");
const browser_1 = require("./browser");
class Configuration {
    // todo: should we bother and make it immutable?
    /*    readonly onFailureHooks: OnEntityFailureHook[] = [
            async (failure: Error, entity: Browser | Element | Collection): Promise<void | Error> => {
                const configuration = (entity as Entity).configuration;
                const driver = configuration.driver;
                const screenshotPath = await saveScreenshot(driver, configuration.screenshotPath);
                const htmlPath = await savePageSource(driver, configuration.htmlPath);
                // todo: handle failure
                return failure;
            }, // todo: how to make it be passed only in entity wait when Entity is Element?
            async (failure: Error, entity: Element): Promise<void | Error> => {
                // ...
            },
            async (failure: Error, entity: Collection): Promise<void | Error> => {
                // ...
            }
        ];*/
    constructor(init) {
        this.driver = null;
        this.timeout = 4000; // todo: seems like explicit types are not needed somewhere...
        this.baseUrl = '';
        this.setValueByJs = false;
        this.typeByJs = false;
        this.windowWidth = ''; // todo: why not as number?
        this.windowHeight = ''; // todo: why not as number?
        this.htmlPath = path.resolve('./htmls');
        this.screenshotPath = path.resolve('./screenshots'); // todo: why not screenshotsPath?
        this.fullPageScreenshot = true;
        Object.assign(this, init);
        if (this.driver === null) {
            this.driver = new selenium_webdriver_1.Builder().withCapabilities(selenium_webdriver_1.Capabilities.chrome()).build();
        }
    }
    static with() {
        return Customized.configuration();
    }
    static withDriver(driver) {
        return Configuration.with().driver(driver);
    }
}
exports.Configuration = Configuration;
// todo: rename to Customizing?
/* compare:
 *   Customizing.browser().driver(driver).timeout(1000).build()
 *    Customized.browser().driver(driver).timeout(1000).build()
 */
class Customized {
    // todo: limit customizedType values to Browser | Configuration
    constructor(customizedType) {
        this.customizedType = customizedType;
        this.customizedType = customizedType;
        this.configuration = {};
    }
    static browser() {
        return new Customized(browser_1.Browser);
    }
    static configuration() {
        return new Customized(Configuration);
    }
    build() {
        return new this.customizedType(this.configuration);
    }
    driver(webdriver) {
        this.configuration = Object.assign({}, this.configuration, { driver: webdriver });
        return this;
    }
    baseUrl(base) {
        this.configuration = Object.assign({}, this.configuration, { baseUrl: base });
        return this;
    }
    timeout(milliseconds) {
        this.configuration = Object.assign({}, this.configuration, { timeout: milliseconds });
        return this;
    }
    windowWidth(value) {
        this.configuration = Object.assign({}, this.configuration, { windowWidth: value });
        return this;
    }
    windowHeight(value) {
        this.configuration = Object.assign({}, this.configuration, { windowHeight: value });
        return this;
    }
    setValueByJs(value) {
        this.configuration = Object.assign({}, this.configuration, { setValueByJs: value });
        return this;
    }
    typeByJs(value) {
        this.configuration = Object.assign({}, this.configuration, { typeByJs: value });
        return this;
    }
    htmlPath(path) {
        this.configuration = Object.assign({}, this.configuration, { htmlPath: path });
        return this;
    }
    screenshotPath(path) {
        this.configuration = Object.assign({}, this.configuration, { screenshotPath: path });
        return this;
    }
    fullPageScreenshot(turnedOn) {
        this.configuration = Object.assign({}, this.configuration, { fullPageScreenshot: turnedOn });
        return this;
    }
}
exports.Customized = Customized;
//# sourceMappingURL=configuration.js.map