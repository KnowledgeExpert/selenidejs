"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = require("./base-entities/browser");
const fs = require("fs");
const path = require("path");
var Utils;
(function (Utils) {
    const DEFAULT_SCREENSHOT_PATH = path.resolve('./screenshots');
    const DEFAULT_HTML_PATH = path.resolve('./htmls');
    async function savePageSource(filePath = getSelenidejsParam(`htmlPath`) ? getSelenidejsParam(`htmlPath`) : DEFAULT_HTML_PATH) {
        const pageTitle = await browser_1.Browser.title();
        const dateTime = new Date().toLocaleString().replace(/ /g, `_`);
        const fileName = `${pageTitle}_${dateTime}.html`;
        const completeFilePath = `${filePath}/${fileName}`;
        const pageSource = await browser_1.Browser.pageSource();
        buildFilePath(filePath);
        fs.writeFileSync(completeFilePath, pageSource);
        return completeFilePath;
    }
    Utils.savePageSource = savePageSource;
    async function saveScreenshot(filePath = getSelenidejsParam(`screenshotPath`) ? getSelenidejsParam(`screenshotPath`) : DEFAULT_SCREENSHOT_PATH) {
        const pageTitle = await browser_1.Browser.title();
        const dateTime = new Date().toLocaleString().replace(/ /g, `_`);
        const fileName = `${pageTitle}_${dateTime}.png`;
        const completeFilePath = `${filePath}/${fileName}`;
        const screenshot = await browser_1.Browser.screenshot();
        buildFilePath(filePath);
        fs.writeFileSync(completeFilePath, new Buffer(screenshot, 'base64'));
        return completeFilePath;
    }
    Utils.saveScreenshot = saveScreenshot;
    function buildFilePath(path) {
        const parts = path.split('/').filter(item => item.length !== 0);
        const isFilePresentInPath = !!parts[parts.length - 1].match(/\.[a-zA-Z]+$/g);
        let lastFolder = `/${parts[0]}`;
        for (let i = 1; i < parts.length - (isFilePresentInPath ? 1 : 0); i++) {
            lastFolder = lastFolder + '/' + parts[i];
            if (!(fs.existsSync(lastFolder))) {
                fs.mkdirSync(lastFolder);
            }
        }
    }
    Utils.buildFilePath = buildFilePath;
    function getSelenidejsParam(dotSeparatedPath) {
        return getValueFromPath(browser_1.Browser.params(), `selenidejs.${dotSeparatedPath}`);
    }
    Utils.getSelenidejsParam = getSelenidejsParam;
    function getValueFromPath(obj, objPath) {
        if (obj === undefined)
            return undefined;
        if (obj === null)
            return null;
        const parts = objPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).join('.'));
    }
    Utils.getValueFromPath = getValueFromPath;
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=utils.js.map