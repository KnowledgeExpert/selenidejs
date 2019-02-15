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
const utils_1 = require("./utils");
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
 *   `element.click().then(query.text)`
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
    /* Element queries */
    query.text = utils_1.lambda('text', async (element) => (await element.getWebElement()).getText());
    query.someText = utils_1.lambda('some nonempty visible text', async (element) => {
        const text = await (await element.getWebElement()).getText();
        if (!text) {
            throw new Error('there is no visible nonempty text');
        }
        return text;
    });
    query.attribute = (name) => utils_1.lambda(`attribute ${name}`, async (element) => (await element.getWebElement()).getAttribute(name));
    query.innerHtml = query.attribute('innerHTML');
    query.outerHtml = query.attribute('outerHTML');
    query.value = query.attribute('value');
    /* Collection queries */
    // todo: do we need a count or number alias for size? or even count instead of size?
    query.size = utils_1.lambda('size', async (collection) => (await collection.getWebElements()).length);
    query.texts = utils_1.lambda('texts', async (collection) => {
        const webelements = await collection.getWebElements();
        return Promise.all(webelements.map(webElement => webElement.getText()));
    });
    /* Browser queries */
    query.url = utils_1.lambda('url', async (browser) => browser.driver.getCurrentUrl());
    query.title = utils_1.lambda('title', async (browser) => browser.driver.getTitle());
    query.tabs = utils_1.lambda('tabs (all window handles)', async (browser) => browser.driver.getAllWindowHandles());
    query.tabsNumber = utils_1.lambda('tabs number', async (browser) => (await browser.driver.getAllWindowHandles()).length);
    query.pageSource = utils_1.lambda('page source', async (browser) => browser.driver.getPageSource());
})(query = exports.query || (exports.query = {}));
//# sourceMappingURL=queries.js.map