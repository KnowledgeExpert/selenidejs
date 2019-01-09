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
// todo: should we break it down into separate configurations - for element, browser, collection?
class Configuration {
    /*
     * so we can create browser = new Browser() with no driver... might there be some weird behaviors?
     */
    constructor(init) {
        // todo: consider adding configuration builder, for something like:
        /*
         * browser = new Browser(Configuration.with().driver(driver).timeout(5000).build())
         * or
         * browser = new Browser(Configuration.withDriver(driver).timeout(5000).build())
         * since without driver, configuration is useless...
         * maybe even this should be the only way to do it...
         * then driver - can be made readonly...
         */
        // todo: should we make them readonly?
        this.timeout = 4000;
        this.windowWidth = '';
        this.windowHeight = '';
        this.htmlPath = path.resolve('./htmls');
        this.screenshotPath = path.resolve('./screenshots');
        this.fullPageScreenshot = true;
        this.onFailureHooks = [
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
        this.driver = null; // todo: driver is not set by default... is it ok?
        Object.assign(this, init);
    }
}
Configuration.shared = new Configuration();
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map