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
const conditions_1 = require("../../conditions");
var have;
(function (have) {
    /* Element conditions */
    have.visibleElement = (locator) => conditions_1.condition.element.hasVisibleElement(locator);
    have.exactText = (value /* | number*/) => conditions_1.condition.element.hasExactText(value);
    have.text = (value /* | number*/) => conditions_1.condition.element.hasText(value);
    have.attribute = (name) => conditions_1.condition.element.hasAttribute(name);
    have.attributeWithValue = (attributeName, attributeValue /* | number*/) => conditions_1.condition.element.hasAttributeWithValue(attributeName, attributeValue);
    have.attributeWithValueContaining = (attributeName, attributeValue /* | number*/) => conditions_1.condition.element.hasAttributeWithValueContaining(attributeName, attributeValue);
    have.value = (value /* | number*/) => conditions_1.condition.element.hasValue(value);
    have.valueContaining = (expected /* | number*/) => conditions_1.condition.element.hasValueContaining(expected);
    have.cssClass = (cssClass) => conditions_1.condition.element.hasCssClass(cssClass);
    /* Collection conditions */
    have.size = (size) => conditions_1.condition.collection.hasSize(size);
    have.sizeLessThan = (size) => conditions_1.condition.collection.hasSizeLessThan(size);
    have.sizeLessThanOrEqual = (size) => conditions_1.condition.collection.hasSizeLessThanOrEqual(size);
    have.sizeGreaterThan = (size) => conditions_1.condition.collection.hasSizeGreaterThan(size);
    have.sizeGreaterThanOrEqual = (size) => conditions_1.condition.collection.hasSizeGreaterThanOrEqual(size);
    have.texts = (...texts) => conditions_1.condition.collection.hasTexts(texts);
    have.exactTexts = (...texts) => conditions_1.condition.collection.hasExactTexts(texts);
    have.url = (url) => conditions_1.condition.browser.hasUrl(url);
    /* Browser conditions */
    have.urlContaining = (urlPart) => conditions_1.condition.browser.hasUrlContaining(urlPart);
    have.title = (expected) => conditions_1.condition.browser.hasTitle(expected);
    have.titleContaining = (titlePart) => conditions_1.condition.browser.hasTitleContaining(titlePart);
    have.tabsNumber = (num) => conditions_1.condition.browser.hasTabsNumber(num);
    have.tabsNumberLessThan = (num) => conditions_1.condition.browser.hasTabsNumberLessThan(num);
    have.tabsNumberMoreThan = (num) => conditions_1.condition.browser.hasTabsNumberMoreThan(num);
    have.jsReturnedTrue = (script) => conditions_1.condition.browser.hasJsReturnedTrue(script);
})(have = exports.have || (exports.have = {}));
//# sourceMappingURL=have.js.map