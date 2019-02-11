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
const wait_1 = require("./wait");
const selenium_webdriver_1 = require("selenium-webdriver");
const queries_1 = require("./queries");
const conditionDoesNotMatchError_1 = require("./errors/conditionDoesNotMatchError");
const helpers_1 = require("./helpers");
const predicates_1 = require("./helpers/predicates");
var condition;
(function (condition) {
    function conditionFromAsyncQuery(describedPredicate) {
        return helpers_1.lambda(describedPredicate.toString(), async (entity) => {
            if (!await describedPredicate(entity)) {
                throw new conditionDoesNotMatchError_1.ConditionNotMatchedError();
            }
        });
    }
    /**
     * like conditionFromAsyncQuery but with custom description
     * @param {string} description
     * @param {(entity: E) => Promise<boolean>} predicate
     * @returns {Condition<E>}
     */
    function throwIfNot(description, predicate) {
        return helpers_1.lambda(description, async (entity) => {
            if (!await predicate(entity)) {
                throw new conditionDoesNotMatchError_1.ConditionNotMatchedError();
            }
        });
    }
    /**
     * Transforms an entity query compared through predicate - to Condition
     * Example: throwIfNotActual(query.text, predicate.equals(text))
     */
    function throwIfNotActual(query, predicate) {
        return async (entity) => {
            const actual = await query(entity);
            if (!predicate(actual)) {
                throw new Error(`actual ${query}: ${actual}`);
            }
        };
    }
    let element;
    (function (element_1) {
        element_1.isVisible = throwIfNot('is visible', async (element) => (await element.getWebElement()).isDisplayed());
        element_1.isHidden = wait_1.Condition.not(element_1.isVisible, 'is hidden');
        element_1.hasVisibleElement = (by) => throwIfNot(`has visible element located by ${by}`, async (element) => (await element.element(by).getWebElement()).isDisplayed());
        element_1.hasAttribute = (name) => helpers_1.lambda(`has attribute '${name}'`, throwIfNotActual(queries_1.query.attribute(name), predicates_1.predicate.isTruthy));
        element_1.isSelected = element_1.hasAttribute('elementIsSelected');
        element_1.isEnabled = throwIfNot('is enabled', async (element) => (await element.getWebElement()).isEnabled());
        element_1.isDisabled = wait_1.Condition.not(element_1.isEnabled, 'is disabled');
        element_1.isPresent = throwIfNot('is present', async (element) => !!(await element.getWebElement()));
        element_1.isAbsent = wait_1.Condition.not(element_1.isPresent, 'is absent');
        element_1.isFocused = throwIfNot('is focused', async (element) => selenium_webdriver_1.WebElement.equals(await element.executeScript('return document.activeElement'), await element.getWebElement()));
        element_1.hasText = (expected) => // todo: do we need string | number
         helpers_1.lambda(`has text: ${expected}`, throwIfNotActual(queries_1.query.text, predicates_1.predicate.includes(expected)));
        element_1.hasExactText = (expected) => // todo: do we need string | number ?
         helpers_1.lambda(`has exact text: ${expected}`, throwIfNotActual(queries_1.query.text, predicates_1.predicate.equals(expected)));
        element_1.hasAttributeWithValue = (name, value) => helpers_1.lambda(`has attribute '${name}' with value '${value}'`, throwIfNotActual(queries_1.query.attribute(name), predicates_1.predicate.equals(value)));
        element_1.hasAttributeWithValueContaining = (name, partialValue) => helpers_1.lambda(`has attribute '${name}' with value '${partialValue}'`, throwIfNotActual(queries_1.query.attribute(name), predicates_1.predicate.includes(partialValue)));
        element_1.hasCssClass = (cssClass) => helpers_1.lambda(`has css class '${cssClass}'`, throwIfNotActual(queries_1.query.attribute('class'), predicates_1.predicate.includesWord(cssClass)));
    })(element = condition.element || (condition.element = {}));
    let collection;
    (function (collection) {
        collection.hasSize = (expected) => helpers_1.lambda(`has size ${expected}`, throwIfNotActual(queries_1.query.size, predicates_1.predicate.equals(expected)));
        collection.hasSizeMoreThan = (size) => helpers_1.lambda(`has size more than ${size}`, throwIfNotActual(queries_1.query.size, predicates_1.predicate.isMoreThan(size)));
        collection.hasSizeLessThan = (size) => helpers_1.lambda(`has size less than ${size}`, throwIfNotActual(queries_1.query.size, predicates_1.predicate.isLessThan(size)));
        // todo: should we filter collection for visibility before applying this condition?
        collection.hasTexts = (texts) => helpers_1.lambda(`has texts ${texts}`, throwIfNotActual(queries_1.query.texts, predicates_1.predicate.equalsByContainsToArray(texts)));
        collection.hasExactTexts = (texts) => helpers_1.lambda(`has exact texts ${texts}`, throwIfNotActual(queries_1.query.texts, predicates_1.predicate.equalsByContainsToArray(texts)));
    })(collection = condition.collection || (condition.collection = {}));
    let browser;
    (function (browser) {
        browser.hasUrlContaining = (partialUrl) => // todo: do we need string | number
         helpers_1.lambda(`has url containing ${partialUrl}`, throwIfNotActual(queries_1.query.url, predicates_1.predicate.includes(partialUrl)));
        browser.hasUrl = (url) => helpers_1.lambda(`has url ${url}`, throwIfNotActual(queries_1.query.url, predicates_1.predicate.equals(url)));
        browser.hasTabsNumber = (num) => helpers_1.lambda(`has tabs number ${num}`, throwIfNotActual(queries_1.query.tabsNumber, predicates_1.predicate.equals(num)));
        browser.hasTabsNumberMoreThan = (num) => helpers_1.lambda(`has tabs number more than ${num}`, throwIfNotActual(queries_1.query.tabsNumber, predicates_1.predicate.isMoreThan(num)));
        browser.hasTabsNumberLessThan = (num) => helpers_1.lambda(`has tabs number less than ${num}`, throwIfNotActual(queries_1.query.tabsNumber, predicates_1.predicate.isLessThan(num)));
    })(browser = condition.browser || (condition.browser = {}));
})(condition = exports.condition || (exports.condition = {}));
//# sourceMappingURL=conditions.js.map