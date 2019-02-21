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
const queries_1 = require("../../queries");
/**
 * to be used in the following context:
 *   `element.click().then(get.text)`
 */
var get;
(function (get) {
    /* Element waiting queries */
    const waitingForEntity = (query) => async (element) => element.get(query);
    get.text = waitingForEntity(queries_1.query.text);
    get.someText = waitingForEntity(queries_1.query.someText);
    get.attribute = (name) => waitingForEntity(queries_1.query.attribute(name));
    get.innerHtml = waitingForEntity(queries_1.query.innerHtml);
    get.outerHtml = waitingForEntity(queries_1.query.outerHtml);
    get.value = waitingForEntity(queries_1.query.value);
    /* Collection waiting queries */
    const waitingForCollection = (query) => async (collection) => collection.get(query);
    get.size = waitingForCollection(queries_1.query.size);
    get.texts = waitingForCollection(queries_1.query.texts);
    /* Browser waiting queries */
    const waitingForBrowser = (query) => async (browser) => browser.get(query);
    get.url = waitingForBrowser(queries_1.query.url);
    get.title = waitingForBrowser(queries_1.query.title);
    get.tabs = waitingForBrowser(queries_1.query.tabs);
    get.tab = (index) => waitingForBrowser(queries_1.query.tab(index));
    get.currentTab = waitingForBrowser(queries_1.query.currentTab);
    get.tabsNumber = waitingForBrowser(queries_1.query.tabsNumber);
    get.pageSource = waitingForBrowser(queries_1.query.pageSource);
})(get = exports.get || (exports.get = {}));
//# sourceMappingURL=get.js.map