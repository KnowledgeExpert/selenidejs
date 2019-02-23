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
const fs = require("fs-extra");
const by_1 = require("../support/selectors/by");
var Extensions;
(function (Extensions) {
    // todo: Why not to move it Browser
    async function savePageSource(driver, filePath) {
        const pageTitle = await driver.getTitle();
        const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
        const fileName = `${pageTitle}_${dateTime}.html`;
        const completeFilePath = `${filePath}/${fileName}`;
        const pageSource = await driver.getPageSource();
        fs.outputFileSync(completeFilePath, pageSource);
        return completeFilePath;
    }
    Extensions.savePageSource = savePageSource;
    async function saveScreenshot(driver, filePath) {
        const pageTitle = await driver.getTitle();
        const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
        const fileName = `${pageTitle}_${dateTime}.png`;
        const completeFilePath = `${filePath}/${fileName}`;
        const screenshot = Buffer.from(await driver.takeScreenshot(), 'base64');
        fs.outputFileSync(completeFilePath, screenshot);
        return completeFilePath;
    }
    Extensions.saveScreenshot = saveScreenshot;
    function toBy(cssOrXpathOrBy) {
        return (typeof cssOrXpathOrBy === 'string')
            ? cssOrXpathOrBy.includes('/') ? by_1.by.xpath(cssOrXpathOrBy) : by_1.by.css(cssOrXpathOrBy)
            : cssOrXpathOrBy;
    }
    Extensions.toBy = toBy;
    function isAbsoluteUrl(relativeOrAbsoluteUrl) {
        return relativeOrAbsoluteUrl.toLowerCase().startsWith('http:') ||
            relativeOrAbsoluteUrl.toLowerCase().startsWith('https:') ||
            relativeOrAbsoluteUrl.toLowerCase().startsWith('file:') ||
            relativeOrAbsoluteUrl.toLowerCase().startsWith('about:') ||
            relativeOrAbsoluteUrl.toLowerCase().startsWith('data:');
    }
    Extensions.isAbsoluteUrl = isAbsoluteUrl;
})(Extensions = exports.Extensions || (exports.Extensions = {}));
//# sourceMappingURL=extensions.js.map