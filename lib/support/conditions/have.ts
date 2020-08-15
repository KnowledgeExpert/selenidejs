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

import { BrowserCondition, CollectionCondition, condition, ElementCondition } from '../../conditions';
import { Condition } from '../../wait';

export namespace have {

    export const no = new Proxy(have, {
        get: (have, conditionName) => (...args) => Condition.not(have[conditionName](...args))
    });

    /* Element conditions */

    export const exactText = (value: string | number): ElementCondition =>
        condition.element.hasExactText(value);

    export const text = (value: string | number | RegExp): ElementCondition =>
        condition.element.hasText(value);

    export const attribute = (name: string): ElementCondition =>
        condition.element.hasAttribute(name);

    export const attributeWithValue = (attributeName: string, attributeValue: string | number): ElementCondition =>
        condition.element.hasAttributeWithValue(attributeName, attributeValue);

    export const attributeWithValueContaining = (attributeName: string, attributeValue: string | number)
        : ElementCondition =>
        condition.element.hasAttributeWithValueContaining(attributeName, attributeValue);

    export const value = (value: string | number): ElementCondition =>
        condition.element.hasValue(value);

    export const valueContaining = (expected: string | number): ElementCondition =>
        condition.element.hasValueContaining(expected);

    export const cssClass = (cssClass: string): ElementCondition =>
        condition.element.hasCssClass(cssClass);

    /* Collection conditions */

    export const size = (size: number): CollectionCondition =>
        condition.collection.hasSize(size);
    export const sizeLessThan = (size: number): CollectionCondition =>
        condition.collection.hasSizeLessThan(size);
    export const sizeLessThanOrEqual = (size: number): CollectionCondition =>
        condition.collection.hasSizeLessThanOrEqual(size);
    export const sizeGreaterThan = (size: number): CollectionCondition =>
        condition.collection.hasSizeGreaterThan(size);
    export const sizeGreaterThanOrEqual = (size: number): CollectionCondition =>
        condition.collection.hasSizeGreaterThanOrEqual(size);


    export const texts = (...texts: string[]): CollectionCondition =>
        condition.collection.hasTexts(texts);

    export const exactTexts = (...texts: string[]): CollectionCondition =>
        condition.collection.hasExactTexts(texts);

    export const url = (url: string): BrowserCondition =>
        condition.browser.hasUrl(url);

    /* Browser conditions */

    export const urlContaining = (urlPart: string): BrowserCondition =>
        condition.browser.hasUrlContaining(urlPart);

    export const title = (expected: string): BrowserCondition =>
        condition.browser.hasTitle(expected);

    export const titleContaining = (titlePart: string): BrowserCondition =>
        condition.browser.hasTitleContaining(titlePart);

    export const tabsNumber = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumber(num);

    export const tabsNumberLessThan = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumberLessThan(num);

    export const tabsNumberMoreThan = (num: number): BrowserCondition =>
        condition.browser.hasTabsNumberMoreThan(num);

    // TODO we can also do that with element or collection,
    // maybe add/reuse conditions for them also?
    export const jsReturned = (expected: any, script: string, ...scriptArgs): BrowserCondition =>
        condition.browser.hasJsReturned(expected, script, ...scriptArgs);
}

