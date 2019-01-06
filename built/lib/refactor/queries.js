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
var query;
(function (query) {
    // it's kind of needed only for cases like:
    //     await browser.element('#new-todo').setValue('foo').then(pressEnter);
    // are there really a lot of such cases?
    // maybe we can decide on this later...
    // and leave this code here just for example
    let element;
    (function (element_1) {
        function isVisible(element) {
            return element.getWebElement().then(it => it.isDisplayed());
        }
        element_1.isVisible = isVisible;
        async function text(element) {
            return (await element.getWebElement()).getText();
        }
        element_1.text = text;
        function hasText(text) {
            return async (element) => (await (await element.getWebElement()).getText()).includes(text);
        }
        element_1.hasText = hasText;
        element_1.attribute = (name) => (element) => element.attribute(name);
    })(element = query.element || (query.element = {}));
    let collection;
    (function (collection_1) {
        async function size(collection) {
            return (await collection.getWebElements()).length;
        }
        collection_1.size = size;
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