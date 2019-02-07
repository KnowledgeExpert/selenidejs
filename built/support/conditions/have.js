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
    function visibleElement(locator) {
        return conditions_1.condition.element.hasVisibleElement(locator);
    }
    have.visibleElement = visibleElement;
    function exactText(value /* | number*/) {
        return conditions_1.condition.element.hasExactText(value);
    }
    have.exactText = exactText;
    function text(value /* | number*/) {
        return conditions_1.condition.element.hasText(value);
    }
    have.text = text;
    // todo: do we really need this "optionality" of attributeValue, i.e. one super condition instead of two?
    /* ... - no, we do not
     * here is why... look at this example:
     * element.should(have.attribute('class', 'green'));
     * if you read it, like in real English, you will never guess, that it will be compared by "contains"
     * because naturally a native speaker will understand it as "exact comparison".
     * Ok, we can rename:
     * element.should(have.attributeContaining('class', 'green'));
     * but how then understand this:
     * element.should(have.attributeContaining('class'));
     * o_O?
     * in english it will sound like "there should be an element with some of attributes
     * that contains "class" text in the value
     * ;)
     * This why, if we want to keep things "naturally readable and understandable", we have to separate...
     * and keep things simple...
     **/
    function attribute(name) {
        return conditions_1.condition.element.hasAttribute(name);
    }
    have.attribute = attribute;
    function attributeWithValue(attributeName, attributeValue /* | number*/) {
        return conditions_1.condition.element.hasAttributeWithValue(attributeName, attributeValue);
    }
    have.attributeWithValue = attributeWithValue;
    function attributeWithValueContaining(attributeName, attributeValue /* | number*/) {
        return conditions_1.condition.element.hasAttributeWithValueContaining(attributeName, attributeValue);
    }
    have.attributeWithValueContaining = attributeWithValueContaining;
    function value(value /* | number*/) {
        return attributeWithValue('value', value);
    }
    have.value = value;
    function cssClass(cssClass) {
        return conditions_1.condition.element.hasCssClass(cssClass);
    }
    have.cssClass = cssClass;
    function size(size) {
        return conditions_1.condition.collection.hasSize(size);
    }
    have.size = size;
    function texts(...texts) {
        return conditions_1.condition.collection.hasExactTexts(texts);
    }
    have.texts = texts;
    function url(urlPart) {
        return conditions_1.condition.browser.hasUrl(urlPart);
    }
    have.url = url;
    // todo: what about inUrl?
    /*
     * compare:
     * browser.should(have.inUrl('main-page'));
     * VS
     * browser.should(have.urlContaining('main-page'));
     * or...
     * browser.should(have.textInUrl('main-page'));
     */
    function urlContaining(urlPart) {
        return conditions_1.condition.browser.hasUrlContaining(urlPart);
    }
    have.urlContaining = urlContaining;
    function exactTexts(...texts) {
        return conditions_1.condition.collection.hasExactTexts(texts);
    }
    have.exactTexts = exactTexts;
    function tabsNumber(num) {
        return conditions_1.condition.browser.hasTabsNumber(num);
    }
    have.tabsNumber = tabsNumber;
    function tabsNumberLessThan(num) {
        return conditions_1.condition.browser.hasTabsNumberLessThan(num);
    }
    have.tabsNumberLessThan = tabsNumberLessThan;
    function tabsNumberMoreThan(num) {
        return conditions_1.condition.browser.hasTabsNumberMoreThan(num);
    }
    have.tabsNumberMoreThan = tabsNumberMoreThan;
})(have = exports.have || (exports.have = {}));
//# sourceMappingURL=have.js.map