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
const utils_1 = require("./utils");
const predicates_1 = require("./utils/predicates");
/**
 * The list of predefined conditions for all type of entities:
 * - condition.element.*
 * - condition.collection.*
 * - condition.browser.*
 *
 * Can be used in the following way:
 * ```
 *     await browser.all('.google-result').should(condition.collection.have.size(10))
 * ```
 *
 * Yet there are more handy aliases in be.* and have.* namespaces:
 * ```
 *     await browser.all('.google-result').should(have.size(10))
 * ```
 *
 * All conditions (Condition<T>) are just predicate-like functions on entity of corresponding type (T), with:
 * - descriptive custom toString implementation
 * - just passing (returning void) in case when the "predicate" version would return true
 * - throwing Error in case when the "predicate" version would return false
 *
 * The following example shows how a condition can be implemented:
 * ```ts
 *     export function hasText(expected: string): ElementCondition {
 *         const description = `has text: ${expected}`
 *         const condition = (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         }
 *         condition.toString = () => description;
 *         return condition;
 *     }
 * ```
 * The code above can be simply refactored, by utilizing some function (let's call it lambda)
 * that will automatically "describe" a passed function with provided description:
 * ```ts
 *     export function hasText(expected: string): ElementCondition {
 *         return lambda(`has text: ${expected}`, (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         });
 *     }
 * ```
 * Or more concise by using arrow functions:
 * ```ts
 *     export const hasText = (expected: string): ElementCondition =>
 *         lambda(`has text: ${expected}`, (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         });
 * ```
 * We can refactor the code above even more, if notice,
 * that the actual condition reflects a simple rule:
 * - throw error if actual value (returned from some query on element like "getting its text")
 *   does not satisfy the predicate (like includes expected text)
 * If we abstract this "throw error if not predicate(actual)" into some function like throwIfNotActual,
 * The code will become very concise and declarative:
 * ```ts
 *     export const hasText = (expected: string): ElementCondition =>
 *         lambda(`has text: ${expected}`,
 *                throwIfNotActual(query.text, predicate.includes(expected)));
 * ```
 *
 * This is how predefined in selenidejs conditions are implemented below.
 *
 * Have fun;)
 */
var condition;
(function (condition) {
    /**
     * like conditionFromAsyncQuery but with custom description
     * @param {string} description
     * @param {(entity: E) => Promise<boolean>} predicate
     * @returns {Condition<E>}
     */
    function throwIfNot(description, predicate) {
        return utils_1.lambda(description, async (entity) => {
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
    function conditionFromAsyncQuery(describedPredicate) {
        return utils_1.lambda(describedPredicate.toString(), async (entity) => {
            if (!await describedPredicate(entity)) {
                throw new conditionDoesNotMatchError_1.ConditionNotMatchedError();
            }
        });
    }
    let element;
    (function (element_1) {
        /*
         * todo: consider adding condition.element.isBlank


         */
        element_1.isVisible = throwIfNot('is visible', async (element) => (await element.getWebElement()).isDisplayed());
        element_1.isHidden = wait_1.Condition.not(element_1.isVisible, 'is hidden');
        element_1.hasVisibleElement = (by) => throwIfNot(`has visible element located by ${by}`, async (element) => (await element.element(by).getWebElement()).isDisplayed());
        element_1.hasAttribute = (name) => utils_1.lambda(`has attribute '${name}'`, throwIfNotActual(queries_1.query.attribute(name), predicates_1.predicate.isTruthy));
        element_1.isSelected = element_1.hasAttribute('elementIsSelected');
        element_1.isEnabled = throwIfNot('is enabled', async (element) => (await element.getWebElement()).isEnabled());
        element_1.isDisabled = wait_1.Condition.not(element_1.isEnabled, 'is disabled');
        element_1.isPresent = throwIfNot('is present', async (element) => !!(await element.getWebElement()));
        element_1.isAbsent = wait_1.Condition.not(element_1.isPresent, 'is absent');
        element_1.isFocused = throwIfNot('is focused', async (element) => selenium_webdriver_1.WebElement.equals(await element.executeScript('return document.activeElement'), await element.getWebElement()));
        element_1.hasText = (expected) => // todo: do we need string | number
         utils_1.lambda(`has text: ${expected}`, throwIfNotActual(queries_1.query.text, predicates_1.predicate.includes(expected)));
        element_1.hasExactText = (expected) => // todo: do we need string | number ?
         utils_1.lambda(`has exact text: ${expected}`, throwIfNotActual(queries_1.query.text, predicates_1.predicate.equals(expected)));
        element_1.hasAttributeWithValue = (name, value) => utils_1.lambda(`has attribute '${name}' with value '${value}'`, throwIfNotActual(queries_1.query.attribute(name), predicates_1.predicate.equals(value)));
        element_1.hasAttributeWithValueContaining = (name, partialValue) => utils_1.lambda(`has attribute '${name}' with value '${partialValue}'`, throwIfNotActual(queries_1.query.attribute(name), predicates_1.predicate.includes(partialValue)));
        element_1.hasCssClass = (cssClass) => utils_1.lambda(`has css class '${cssClass}'`, throwIfNotActual(queries_1.query.attribute('class'), predicates_1.predicate.includesWord(cssClass)));
        element_1.hasValue = (expected) => element_1.hasAttributeWithValue('value', expected);
        element_1.hasValueContaining = (expected) => element_1.hasAttributeWithValueContaining('value', expected);
        element_1.isBlank = wait_1.Condition.and(element_1.hasExactText(''), element_1.hasValue(''));
    })(element = condition.element || (condition.element = {}));
    let collection;
    (function (collection) {
        collection.hasSize = (expected) => utils_1.lambda(`has size ${expected}`, throwIfNotActual(queries_1.query.size, predicates_1.predicate.equals(expected)));
        collection.hasSizeMoreThan = (size) => utils_1.lambda(`has size more than ${size}`, throwIfNotActual(queries_1.query.size, predicates_1.predicate.isMoreThan(size)));
        collection.hasSizeLessThan = (size) => utils_1.lambda(`has size less than ${size}`, throwIfNotActual(queries_1.query.size, predicates_1.predicate.isLessThan(size)));
        // todo: should we filter collection for visibility before applying this condition?
        collection.hasTexts = (texts) => utils_1.lambda(`has texts ${texts}`, throwIfNotActual(queries_1.query.texts, predicates_1.predicate.equalsByContainsToArray(texts)));
        collection.hasExactTexts = (texts) => utils_1.lambda(`has exact texts ${texts}`, throwIfNotActual(queries_1.query.texts, predicates_1.predicate.equalsByContainsToArray(texts)));
    })(collection = condition.collection || (condition.collection = {}));
    let browser;
    (function (browser) {
        browser.hasUrlContaining = (partialUrl) => // todo: do we need string | number
         utils_1.lambda(`has url containing ${partialUrl}`, throwIfNotActual(queries_1.query.url, predicates_1.predicate.includes(partialUrl)));
        browser.hasUrl = (url) => utils_1.lambda(`has url ${url}`, throwIfNotActual(queries_1.query.url, predicates_1.predicate.equals(url)));
        browser.hasTabsNumber = (num) => utils_1.lambda(`has tabs number ${num}`, throwIfNotActual(queries_1.query.tabsNumber, predicates_1.predicate.equals(num)));
        browser.hasTabsNumberMoreThan = (num) => utils_1.lambda(`has tabs number more than ${num}`, throwIfNotActual(queries_1.query.tabsNumber, predicates_1.predicate.isMoreThan(num)));
        browser.hasTabsNumberLessThan = (num) => utils_1.lambda(`has tabs number less than ${num}`, throwIfNotActual(queries_1.query.tabsNumber, predicates_1.predicate.isLessThan(num)));
    })(browser = condition.browser || (condition.browser = {}));
})(condition = exports.condition || (exports.condition = {}));
//# sourceMappingURL=conditions.js.map