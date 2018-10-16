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
const utils_1 = require("./utils");
class Configuration {
    constructor(customConfiguration) {
        Object.assign(this, Configuration.DEFAULT);
        Object.assign(this, customConfiguration);
    }
}
Configuration.DEFAULT_HTML_PATH = path.resolve('./htmls');
Configuration.DEFAULT_SCREENSHOT_PATH = path.resolve('./screenshots');
Configuration.DEFAULT_ON_FAILURE_HOOKS = [
    async (error, driver) => {
        if (driver.configuration.screenshotPath) {
            const screenshotPath = await utils_1.Utils.saveScreenshot(driver, driver.configuration.screenshotPath);
            error.message = `${error.message}\nSaved screenshot: ${screenshotPath}`;
        }
    },
    async (error, driver) => {
        if (driver.configuration.htmlPath) {
            const htmlPath = await utils_1.Utils.savePageSource(driver, driver.configuration.htmlPath);
            error.message = `${error.message}\nSaved html: ${htmlPath}`;
        }
    }
];
Configuration.DEFAULT = {
    afterElementActionHooks: [],
    beforeElementActionHooks: [],
    clickByJs: false,
    fullpageScreenshot: false,
    htmlPath: Configuration.DEFAULT_HTML_PATH,
    onCollectionFailureHooks: [],
    onElementFailureHooks: [],
    onFailureHooks: Configuration.DEFAULT_ON_FAILURE_HOOKS,
    screenshotPath: Configuration.DEFAULT_SCREENSHOT_PATH,
    setValueByJs: false,
    timeout: 4000,
    webdriver: null,
    windowHeight: 480,
    windowWidth: 640
};
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map