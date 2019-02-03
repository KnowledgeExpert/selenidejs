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
var Conditions;
(function (Conditions) {
    /* tslint:disable:object-literal-shorthand */
    /* tslint:disable:no-invalid-this */
    /* tslint:disable:only-arrow-functions */
    function conditionFromAsyncQuery(aPredicate) {
        return lambda(aPredicate.toString(), async (entity) => {
            if (await aPredicate(entity)) {
                return true;
            }
            else {
                throw new Error(`${aPredicate}? = false`);
            }
        });
    }
    // like conditionFromAsyncQuery but non-async version
    function throwIfNot(reason, predicate) {
        return (actual) => {
            if (predicate(actual)) {
                return true;
            }
            else {
                throw new Error(`${reason}: ${actual}`);
            }
        };
    }
    // throwIfNotActual(element, query.element.text, predicate.equals(text))
    function throwIfNotActual(query, predicate) {
        return async (entity) => {
            const actual = await query(entity);
            if (predicate(actual)) {
                return true;
            }
            else {
                throw new Error(`actual ${query}: ${actual}`);
            }
        };
    }
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
    (function (element_1) {
        // todo: isVisible vs visible, etc.
        element_1.isVisible = conditionFromAsyncQuery(queries_1.query.element.isVisible);
        element_1.isHidden = wait_1.Condition.not(element_1.isVisible, 'is hidden');
        element_1.hasVisibleElement = (by) => conditionFromAsyncQuery(queries_1.query.element.hasVisibleElement(by));
        element_1.hasAttribute = (name) => conditionFromAsyncQuery(queries_1.query.element.hasAttribute(name));
        element_1.isSelected = element_1.hasAttribute('elementIsSelected');
        element_1.isEnabled = conditionFromAsyncQuery(queries_1.query.element.isEnabled);
        element_1.isDisabled = wait_1.Condition.not(element_1.isEnabled, 'is disabled');
        element_1.isPresent = conditionFromAsyncQuery(queries_1.query.element.isPresent);
        element_1.isAbsent = wait_1.Condition.not(element_1.isPresent, 'is absent');
        element_1.isFocused = conditionFromAsyncQuery(queries_1.query.element.isFocused);
        // todo: condition... should it be Promise<boolean> or as currently Promise<boolean | throws } ?
        element_1.hasText = (expected) => // todo: do we need string | number
         lambda(`has text: ${expected}`, throwIfNotActual(queries_1.query.element.text, predicate.includes(expected)));
        element_1.hasExactText = (expected) => // todo: do we need string | number ?
         lambda(`has exact text: ${expected}`, throwIfNotActual(queries_1.query.element.text, predicate.equals(expected)));
        element_1.hasAttributeWithValue = (name, value) => lambda(`has attribute '${name}' with value '${value}'`, async (element) => queries_1.query.element.attribute(name)(element).then(throwIfNot('actual value', predicate.equals(value))));
        function hasAttributeWithValueContaining(name, partialValue) {
            return lambda(`has attribute '${name}' with value '${partialValue}'`, async (element) => queries_1.query.element.attribute(name)(element).then(throwIfNot('actual value', predicate.includes(partialValue))));
        }
        element_1.hasAttributeWithValueContaining = hasAttributeWithValueContaining;
        function hasCssClass(cssClass) {
            return lambda(`has css class '${cssClass}'`, async (element) => queries_1.query.element.attribute('class')(element).then(throwIfNot('actual class attribute value', predicate.includesWord(cssClass))));
        }
        element_1.hasCssClass = hasCssClass;
    })(element = Conditions.element || (Conditions.element = {}));
    let collection;
    (function (collection_1) {
        collection_1.hasSize = (expected) => lambda(`has size ${expected}`, throwIfNotActual(queries_1.query.collection.size, predicate.equals(expected)));
        function hasSizeMoreThan(size) {
            return lambda(`has size more than ${size}`, async (collection) => collection.size().then(throwIfNot('actual size', predicate.isMoreThan(size))));
        }
        collection_1.hasSizeMoreThan = hasSizeMoreThan;
        function hasSizeLessThan(size) {
            return lambda(`has size less than ${size}`, async (collection) => collection.size().then(throwIfNot('actual size', predicate.isLessThan(size))));
        }
        collection_1.hasSizeLessThan = hasSizeLessThan;
        function hasTexts(texts) {
            return lambda(`has texts ${texts}`, async (collection) => queries_1.query.collection.texts(collection).then(throwIfNot('actual texts', predicate.equalsByContainsToArray(texts))));
        }
        collection_1.hasTexts = hasTexts;
        function hasExactTexts(texts) {
            return lambda(`has exact texts ${texts}`, async (collection) => queries_1.query.collection.texts(collection).then(throwIfNot('actual texts', predicate.equalsByContainsToArray(texts))));
        }
        collection_1.hasExactTexts = hasExactTexts;
    })(collection = Conditions.collection || (Conditions.collection = {}));
    let browser;
    (function (browser_1) {
        function hasUrlContaining(partialUrl) {
            return lambda(`has url containing ${partialUrl}`, async (browser) => queries_1.query.browser.url(browser).then(throwIfNot('actual url', predicate.includes(partialUrl))));
        }
        browser_1.hasUrlContaining = hasUrlContaining;
        function hasUrl(url) {
            return lambda(`has url ${url}`, async (browser) => queries_1.query.browser.url(browser).then(throwIfNot('actual url', predicate.equals(url))));
        }
        browser_1.hasUrl = hasUrl;
        function hasTabsNumber(num) {
            return lambda(`has tabs number ${num}`, async (browser) => queries_1.query.browser.tabsNumber(browser).then(throwIfNot('actual tabs number', predicate.equals(num))));
        }
        browser_1.hasTabsNumber = hasTabsNumber;
        function hasTabsNumberMoreThan(num) {
            return lambda(`has tabs number more than ${num}`, async (browser) => queries_1.query.browser.tabsNumber(browser).then(throwIfNot('actual tabs number', predicate.isMoreThan(num))));
        }
        browser_1.hasTabsNumberMoreThan = hasTabsNumberMoreThan;
        function hasTabsNumberLessThan(num) {
            return lambda(`has tabs number less than ${num}`, async (browser) => queries_1.query.browser.tabsNumber(browser).then(throwIfNot('actual tabs number', predicate.isLessThan(num))));
        }
        browser_1.hasTabsNumberLessThan = hasTabsNumberLessThan;
    })(browser = Conditions.browser || (Conditions.browser = {}));
})(Conditions = exports.Conditions || (exports.Conditions = {}));
//# sourceMappingURL=conditions.js.map