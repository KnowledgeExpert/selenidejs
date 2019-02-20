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

import { By } from 'selenium-webdriver';
import { CollectionCondition, BrowserCondition, ElementCondition, condition } from '../../conditions';


export namespace have {
    // todo: refactor to arrow const versions

    export const visibleElement = (locator: By): ElementCondition =>
        condition.element.hasVisibleElement(locator);

    export const exactText = (value: string/* | number*/): ElementCondition =>
        condition.element.hasExactText(value);

    export const text = (value: string/* | number*/): ElementCondition =>
        condition.element.hasText(value);

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
    export const attribute = (name: string): ElementCondition =>
        condition.element.hasAttribute(name);

    export const attributeWithValue = (attributeName: string, attributeValue: string/* | number*/): ElementCondition =>
        condition.element.hasAttributeWithValue(attributeName, attributeValue);

    export const attributeWithValueContaining = (attributeName: string, attributeValue: string/* | number*/)
    : ElementCondition =>
        condition.element.hasAttributeWithValueContaining(attributeName, attributeValue);

    export const value = (value: string/* | number*/): ElementCondition =>
        condition.element.hasValue(value);

    export const valueContaining = (expected: string/* | number*/): ElementCondition =>
        condition.element.hasValueContaining(expected);

    export const cssClass = (cssClass: string): ElementCondition =>
        condition.element.hasCssClass(cssClass);

    export const size = (size: number): CollectionCondition =>
        condition.collection.hasSize(size);

    export const texts = (...texts: string[]): CollectionCondition =>
        condition.collection.hasExactTexts(texts);

    export const url = (urlPart: string): BrowserCondition =>
        condition.browser.hasUrl(urlPart);

    // todo: what about inUrl?
    /*
     * compare:
     * browser.should(have.inUrl('main-page'));
     * VS
     * browser.should(have.urlContaining('main-page'));
     * or...
     * browser.should(have.textInUrl('main-page'));
     */
    export const urlContaining = (urlPart: string): BrowserCondition =>
        condition.browser.hasUrlContaining(urlPart);

    export const exactTexts = (...texts: string[]): CollectionCondition =>
        condition.collection.hasExactTexts(texts);

    export const tabsNumber = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumber(num);

    export const tabsNumberLessThan = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumberLessThan(num);

    export const tabsNumberMoreThan = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumberMoreThan(num);

    export const jsReturnedTrue = (script: string): BrowserCondition =>
        condition.browser.hasJsReturnedTrue(script);
}
