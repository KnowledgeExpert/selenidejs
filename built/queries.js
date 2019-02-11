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
const helpers_1 = require("./helpers");
/**
 * Raw queries on actual element's webelement
 * 'Raw' means - without any waiting...
 *
 * All are implemented through element.getWebElement()
 * e.g. element.getWebElement().getText over element.text()
 * because element.text() already has waiting built in.
 * this is needed, because these queries are used not only to build corresponding element methods
 * with waiting built in
 * but also for conditions...
 *
 * Hence, these functions are not supposed to be used in "perform/get" context:
 *   `element.click().then(query.element.text)`
 * this query may fail if element was absent after click for some milliseconds...
 * use the following alternative instead:
 *   `element.click().then(get.text)`
 *
 * Here, queries do not contain has* and is* queries, like hasText, or isVisible.
 * User can use has* and is* conditions instead. Example:
 *   `if (element.matches(has.text('foo'))) { ... }
 * We really don't need such has* or is* queries both here and built in the entity itself
 * (like element.isVisible), because their use case is very rare. The user will mainly use
 * steps (entity commands, like click) and assertions (entity should(condition)) in tests.
 * And SelenideJs is a tests tool, not something else.
 */
var query;
(function (query) {
    let element;
    (function (element_1) {
        element_1.text = helpers_1.lambda('text', async (element) => (await element.getWebElement()).getText());
        element_1.someText = helpers_1.lambda('some nonempty visible text', async (element) => {
            const text = await (await element.getWebElement()).getText();
            if (!text) {
                throw new Error('there is no visible nonempty text');
            }
            return text;
        });
        element_1.attribute = (name) => helpers_1.lambda(`attribute ${name}`, async (element) => (await element.getWebElement()).getAttribute(name));
        element_1.innerHtml = element_1.attribute('innerHTML');
        element_1.outerHtml = element_1.attribute('outerHTML');
        element_1.value = element_1.attribute('value');
    })(element = query.element || (query.element = {}));
    let collection;
    (function (collection_1) {
        // todo: do we need a count or number alias for size? or even count instead of size?
        collection_1.size = helpers_1.lambda('size', async (collection) => (await collection.getWebElements()).length);
        collection_1.texts = helpers_1.lambda('texts', async (collection) => {
            const webelements = await collection.getWebElements();
            return Promise.all(webelements.map(webElement => webElement.getText()));
        });
    })(collection = query.collection || (query.collection = {}));
    let browser;
    (function (browser_1) {
        browser_1.url = helpers_1.lambda('url', async (browser) => browser.driver.getCurrentUrl());
        browser_1.title = helpers_1.lambda('title', async (browser) => browser.driver.getTitle());
        browser_1.tabs = helpers_1.lambda('tabs (all window handles)', async (browser) => browser.driver.getAllWindowHandles());
        browser_1.tabsNumber = helpers_1.lambda('tabs number', async (browser) => (await browser.driver.getAllWindowHandles()).length);
        browser_1.pageSource = helpers_1.lambda('page source', async (browser) => browser.driver.getPageSource());
    })(browser = query.browser || (query.browser = {}));
})(query = exports.query || (exports.query = {}));
//# sourceMappingURL=queries.js.map