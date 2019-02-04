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
const queries_1 = require("./refactor/queries");
const utils_1 = require("./utils");
var lambda = utils_1.Utils.lambda;
const conditionDoesNotMatchError_1 = require("./errors/conditionDoesNotMatchError");
var Conditions;
(function (Conditions) {
    function conditionFromAsyncQuery(aPredicate) {
        return lambda(aPredicate.toString(), async (entity) => {
            if (!await aPredicate(entity)) {
                throw new conditionDoesNotMatchError_1.ConditionNotMatchedError();
            }
        });
    }
    /**
     * Transforms an entity query compared through predicate - to Condition
     * Example: throwIfNotActual(query.element.text, predicate.equals(text))
     */
    function throwIfNotActual(query, predicate) {
        return async (entity) => {
            const actual = await query(entity);
            if (!predicate(actual)) {
                throw new Error(`actual ${query}: ${actual}`);
            }
        };
    }
    // todo: move somewhere to utils/helpers?
    let predicate;
    (function (predicate) {
        predicate.equals = (expected) => (actual) => actual === expected;
        predicate.isMoreThan = (expected) => (actual) => actual > expected;
        predicate.isLessThan = (expected) => (actual) => actual < expected;
        predicate.includes = (expected) => (actual) => actual.includes(expected);
        predicate.includesWord = (expected) => (actual) => actual.split(' ').includes(expected);
        predicate.arrayCompareBy = (f) => ([x, ...xs]) => ([y, ...ys]) => x === undefined && y === undefined
            ? true
            : Boolean(f(x)(y)) && predicate.arrayCompareBy(f)(xs)(ys);
        predicate.equalsToArray = predicate.arrayCompareBy(predicate.equals);
        predicate.equalsByContainsToArray = predicate.arrayCompareBy(predicate.includes);
    })(predicate || (predicate = {}));
    let element;
    (function (element) {
        // todo: isVisible vs visible, etc.
        element.isVisible = conditionFromAsyncQuery(queries_1.query.element.isVisible);
        element.isHidden = wait_1.Condition.not(element.isVisible, 'is hidden');
        element.hasVisibleElement = (by) => conditionFromAsyncQuery(queries_1.query.element.hasVisibleElement(by));
        element.hasAttribute = (name) => conditionFromAsyncQuery(queries_1.query.element.hasAttribute(name));
        element.isSelected = element.hasAttribute('elementIsSelected');
        element.isEnabled = conditionFromAsyncQuery(queries_1.query.element.isEnabled);
        element.isDisabled = wait_1.Condition.not(element.isEnabled, 'is disabled');
        element.isPresent = conditionFromAsyncQuery(queries_1.query.element.isPresent);
        element.isAbsent = wait_1.Condition.not(element.isPresent, 'is absent');
        element.isFocused = conditionFromAsyncQuery(queries_1.query.element.isFocused);
        /* todo: should we move all following built inline predicates to query namespace
         * and so here use just conditionFromAsyncQuery style?
         *
         * is it even possible? including the fact that we need throwIfNotActual
         * to build proper Error...
         *
         * or should we, hence, keep all them here, and in queries just use it
         * as e.g. Condition.asPredicate(condition.element.hasText) ?
         *
         * should we keep all predicates in a separate namespace? separately from query.*.* ?
         * just to keep all eggs in their baskets...
         */
        element.hasText = (expected) => // todo: do we need string | number
         lambda(`has text: ${expected}`, throwIfNotActual(queries_1.query.element.text, predicate.includes(expected)));
        element.hasExactText = (expected) => // todo: do we need string | number ?
         lambda(`has exact text: ${expected}`, throwIfNotActual(queries_1.query.element.text, predicate.equals(expected)));
        element.hasAttributeWithValue = (name, value) => lambda(`has attribute '${name}' with value '${value}'`, throwIfNotActual(queries_1.query.element.attribute(name), predicate.equals(value)));
        element.hasAttributeWithValueContaining = (name, partialValue) => lambda(`has attribute '${name}' with value '${partialValue}'`, throwIfNotActual(queries_1.query.element.attribute(name), predicate.includes(partialValue)));
        element.hasCssClass = (cssClass) => lambda(`has css class '${cssClass}'`, throwIfNotActual(queries_1.query.element.attribute('class'), predicate.includesWord(cssClass)));
    })(element = Conditions.element || (Conditions.element = {}));
    let collection;
    (function (collection) {
        collection.hasSize = (expected) => lambda(`has size ${expected}`, throwIfNotActual(queries_1.query.collection.size, predicate.equals(expected)));
        collection.hasSizeMoreThan = (size) => lambda(`has size more than ${size}`, throwIfNotActual(queries_1.query.collection.size, predicate.isMoreThan(size)));
        collection.hasSizeLessThan = (size) => lambda(`has size less than ${size}`, throwIfNotActual(queries_1.query.collection.size, predicate.isLessThan(size)));
        collection.hasTexts = (texts) => lambda(`has texts ${texts}`, throwIfNotActual(queries_1.query.collection.texts, predicate.equalsByContainsToArray(texts)));
        collection.hasExactTexts = (texts) => lambda(`has exact texts ${texts}`, throwIfNotActual(queries_1.query.collection.texts, predicate.equalsByContainsToArray(texts)));
    })(collection = Conditions.collection || (Conditions.collection = {}));
    let browser;
    (function (browser) {
        browser.hasUrlContaining = (partialUrl) => // todo: do we need string | number
         lambda(`has url containing ${partialUrl}`, throwIfNotActual(queries_1.query.browser.url, predicate.includes(partialUrl)));
        browser.hasUrl = (url) => lambda(`has url ${url}`, throwIfNotActual(queries_1.query.browser.url, predicate.equals(url)));
        browser.hasTabsNumber = (num) => lambda(`has tabs number ${num}`, throwIfNotActual(queries_1.query.browser.tabsNumber, predicate.equals(num)));
        browser.hasTabsNumberMoreThan = (num) => lambda(`has tabs number more than ${num}`, throwIfNotActual(queries_1.query.browser.tabsNumber, predicate.isMoreThan(num)));
        browser.hasTabsNumberLessThan = (num) => lambda(`has tabs number less than ${num}`, throwIfNotActual(queries_1.query.browser.tabsNumber, predicate.isLessThan(num)));
    })(browser = Conditions.browser || (Conditions.browser = {}));
})(Conditions = exports.Conditions || (exports.Conditions = {}));
//# sourceMappingURL=conditions.js.map