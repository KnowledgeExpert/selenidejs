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
const utils_1 = require("../../utils");
const browser_1 = require("../browser");
class Configuration {
    constructor(customConfiguration) {
        this.windowWidth = customConfiguration.windowWidth
            ? customConfiguration.windowWidth
            : Configuration.DEFAULT.windowWidth;
        this.windowHeight = customConfiguration.windowWidth
            ? customConfiguration.windowWidth
            : Configuration.DEFAULT.windowWidth;
        this.hardTimeout = customConfiguration.hardTimeout
            ? customConfiguration.hardTimeout
            : Configuration.DEFAULT.hardTimeout;
        this.timeout = customConfiguration.timeout
            ? customConfiguration.timeout
            : Configuration.DEFAULT.timeout;
        this.fullpageScreenshot = customConfiguration.fullpageScreenshot
            ? customConfiguration.fullpageScreenshot
            : Configuration.DEFAULT.fullpageScreenshot;
        this.screenshotPath = customConfiguration.screenshotPath
            ? customConfiguration.screenshotPath
            : Configuration.DEFAULT.screenshotPath;
        this.htmlPath = customConfiguration.htmlPath
            ? customConfiguration.htmlPath
            : Configuration.DEFAULT.htmlPath;
        this.onFailureHooks = customConfiguration.onFailureHooks
            ? [...Configuration.DEFAULT.onFailureHooks, ...customConfiguration.onFailureHooks]
            : Configuration.DEFAULT.onFailureHooks;
    }
}
Configuration.DEFAULT = {
    fullpageScreenshot: true,
    hardTimeout: 4000,
    htmlPath: path.resolve('./htmls'),
    onFailureHooks: [
        async (lastError, entity, condition) => {
            const driver = utils_1.Utils.getDriver(entity);
            if (driver.config.screenshotPath) {
                const screenshotPath = await utils_1.Utils.saveScreenshot(driver, browser_1.Browser.config.screenshotPath);
                lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
            }
        },
        async (lastError, entity, condition) => {
            const driver = utils_1.Utils.getDriver(entity);
            if (driver.config.htmlPath) {
                const htmlPath = await utils_1.Utils.savePageSource(driver, browser_1.Browser.config.htmlPath);
                lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
            }
        }
    ],
    screenshotPath: path.resolve('./screenshots'),
    timeout: 4000,
    windowHeight: '',
    windowWidth: ''
};
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map