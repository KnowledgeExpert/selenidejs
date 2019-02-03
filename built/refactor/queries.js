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
const utils_1 = require("../utils");
var lambda = utils_1.Utils.lambda;
const selenium_webdriver_1 = require("selenium-webdriver");
var query;
(function (query) {
    // it's kind of needed only for cases like:
    //     await browser.element('#new-todo').setValue('foo').then(pressEnter);
    // are there really a lot of such cases?
    // maybe we can decide on this later...
    // and leave this code here just for example
    let element;
    (function (element_1) {
        element_1.isVisible = lambda('is visible', async (element) => (await element.getWebElement()).isDisplayed());
        element_1.hasVisibleElement = (by) => lambda(`has visible element located by ${by}`, async (element) => element_1.isVisible(element.element(by)));
        element_1.isEnabled = lambda('is enabled', async (element) => (await element.getWebElement()).isEnabled());
        element_1.isPresent = lambda('is present', async (element) => !!(await element.getWebElement()));
        element_1.isFocused = lambda('is focused', async (element) => selenium_webdriver_1.WebElement.equals(await element.executeScript('return document.activeElement'), await element.getWebElement()));
        element_1.hasAttribute = (name) => lambda(`has attribute with name ${name}`, async (element) => !!(await element.attribute(name)));
        element_1.text = lambda('text', async (element) => (await element.getWebElement()).getText()); // todo: should we reuse element.text() or backwards?
        function hasText(text) {
            return async (element) => (await element.text()).includes(text);
        }
        element_1.hasText = hasText;
        element_1.attribute = (name) => (element) => element.attribute(name);
    })(element = query.element || (query.element = {}));
    let collection;
    (function (collection_1) {
        collection_1.size = lambda('size', async (collection) => (await collection.getWebElements()).length);
        collection_1.hasSize = (length) => lambda(`has size ${length}`, async (collection) => (await collection_1.size(collection)) === length);
        async function texts(collection) {
            const elements = await collection.getWebElements();
            return Promise.all(elements.map(webElement => webElement.getText()));
        }
        collection_1.texts = texts;
    })(collection = query.collection || (query.collection = {}));
    let browser;
    (function (browser_1) {
        async function url(browser) {
            return browser.driver.getCurrentUrl(); // todo: browser.driver?
        }
        browser_1.url = url;
        async function tabsNumber(browser) {
            return (await browser.driver.getAllWindowHandles()).length;
        }
        browser_1.tabsNumber = tabsNumber;
    })(browser = query.browser || (query.browser = {}));
})(query = exports.query || (exports.query = {}));
//# sourceMappingURL=queries.js.map