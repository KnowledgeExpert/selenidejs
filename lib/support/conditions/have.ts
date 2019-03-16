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
import { Condition } from '../../wait';

class Have {

    /* Element conditions */

    readonly visibleElement = (locator: By): ElementCondition =>
        condition.element.hasVisibleElement(locator);

    readonly exactText = (value: string/* | number*/): ElementCondition =>
        condition.element.hasExactText(value);

    readonly text = (value: string/* | number*/): ElementCondition =>
        condition.element.hasText(value);

    readonly attribute = (name: string): ElementCondition =>
        condition.element.hasAttribute(name);

    readonly attributeWithValue = (attributeName: string, attributeValue: string/* | number*/): ElementCondition =>
        condition.element.hasAttributeWithValue(attributeName, attributeValue);

    readonly attributeWithValueContaining = (attributeName: string, attributeValue: string/* | number*/)
    : ElementCondition =>
        condition.element.hasAttributeWithValueContaining(attributeName, attributeValue);

    readonly value = (value: string/* | number*/): ElementCondition =>
        condition.element.hasValue(value);

    readonly valueContaining = (expected: string/* | number*/): ElementCondition =>
        condition.element.hasValueContaining(expected);

    readonly cssClass = (cssClass: string): ElementCondition =>
        condition.element.hasCssClass(cssClass);

    /* Collection conditions */

    readonly size = (size: number): CollectionCondition =>
        condition.collection.hasSize(size);
    readonly sizeLessThan = (size: number): CollectionCondition =>
        condition.collection.hasSizeLessThan(size);
    readonly sizeLessThanOrEqual = (size: number): CollectionCondition =>
        condition.collection.hasSizeLessThanOrEqual(size);
    readonly sizeGreaterThan = (size: number): CollectionCondition =>
        condition.collection.hasSizeGreaterThan(size);
    readonly sizeGreaterThanOrEqual = (size: number): CollectionCondition =>
        condition.collection.hasSizeGreaterThanOrEqual(size);


    readonly texts = (...texts: string[]): CollectionCondition =>
        condition.collection.hasTexts(texts);

    readonly exactTexts = (...texts: string[]): CollectionCondition =>
        condition.collection.hasExactTexts(texts);

    readonly url = (url: string): BrowserCondition =>
        condition.browser.hasUrl(url);

    /* Browser conditions */

    readonly urlContaining = (urlPart: string): BrowserCondition =>
        condition.browser.hasUrlContaining(urlPart);

    readonly title = (expected: string): BrowserCondition =>
        condition.browser.hasTitle(expected);

    readonly titleContaining = (titlePart: string): BrowserCondition =>
        condition.browser.hasTitleContaining(titlePart);

    readonly tabsNumber = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumber(num);

    readonly tabsNumberLessThan = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumberLessThan(num);

    readonly tabsNumberMoreThan = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumberMoreThan(num);

    readonly jsReturnedTrue = (script: string): BrowserCondition =>
        condition.browser.hasJsReturnedTrue(script);
}

const no = new Proxy(new Have(), {
    get: (target, name) => {
        return name in target ?
            (...args) => Condition.not(target[name](...args)) :
            undefined;
    }
});

export const have = { ...new Have(), no };
