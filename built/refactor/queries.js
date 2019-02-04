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
/**
 * raw queries on actual element's webelement
 * raw means - without any waiting...
 *
 * all are implemented through element.getWebElement()
 * e.g. element.getWebElement().getText over element.text()
 * because element.text() already has waiting built in.
 * this is needed, because these queries are used not only to build corresponding element methods
 * with waiting built in
 * but also for conditions...
 *
 * hence, these functions are not supposed to be used in "perform/get" context:
 *   `element.click().then(query.element.text)`
 * this query may fail if element was absent after click for some milliseconds...
 * use the following alternative instead:
 *   `element.click().then(get.text)`
 */
var query;
(function (query) {
    let element;
    (function (element_1) {
        element_1.isVisible = lambda('is visible', async (element) => (await element.getWebElement()).isDisplayed());
        element_1.hasVisibleElement = (by) => lambda(`has visible element located by ${by}`, async (element) => element_1.isVisible(element.element(by)));
        element_1.isEnabled = lambda('is enabled', async (element) => (await element.getWebElement()).isEnabled());
        element_1.isPresent = lambda('is present', async (element) => !!(await element.getWebElement()));
        element_1.isFocused = lambda('is focused', async (element) => selenium_webdriver_1.WebElement.equals(await element.executeScript('return document.activeElement'), await element.getWebElement()));
        element_1.text = lambda('text', async (element) => (await element.getWebElement()).getText());
        element_1.hasText = (text) => lambda(`has text ${text}`, async (element) => (await query.element.text(element)).includes(text));
        element_1.attribute = (name) => lambda(`attribute ${name}`, async (element) => (await element.getWebElement()).getAttribute(name));
        element_1.hasAttribute = (name) => lambda(`has attribute with name ${name}`, async (element) => !!(await query.element.attribute(name)(element)));
        element_1.innerHtml = element_1.attribute('innerHTML');
        element_1.outerHtml = element_1.attribute('outerHTML');
        element_1.value = element_1.attribute('value');
    })(element = query.element || (query.element = {}));
    let collection;
    (function (collection_1) {
        collection_1.size = lambda('size', async (collection) => (await collection.getWebElements()).length);
        collection_1.hasSize = (length) => lambda(`has size ${length}`, async (collection) => (await collection_1.size(collection)) === length);
        collection_1.texts = lambda('texts', async (collection) => {
            const webelements = await collection.getWebElements();
            return Promise.all(webelements.map(webElement => webElement.getText()));
        });
    })(collection = query.collection || (query.collection = {}));
    let browser;
    (function (browser_1) {
        browser_1.url = lambda('url', async (browser) => browser.driver.getCurrentUrl());
        browser_1.tabsNumber = lambda('tabs number', async (browser) => (await browser.driver.getAllWindowHandles()).length);
    })(browser = query.browser || (query.browser = {}));
})(query = exports.query || (exports.query = {}));
//# sourceMappingURL=queries.js.map