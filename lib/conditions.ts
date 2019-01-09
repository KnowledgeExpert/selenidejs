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

import { By, WebElement } from 'selenium-webdriver';
import { Browser } from './browser';
import { Collection } from './collection';
import { Element } from './element';
import { FailedToMatchConditionWithReasonError } from './errors/conditionDoesNotMatchError';
import { Condition } from './wait';
import { query } from './refactor/queries';

export type ElementCondition = Condition<Element>;
export type CollectionCondition = Condition<Collection>;
export type BrowserCondition = Condition<Browser>;

export namespace Conditions { // todo: change to ElementCondition ?

    /* tslint:disable:object-literal-shorthand */
    /* tslint:disable:no-invalid-this */
    /* tslint:disable:only-arrow-functions */

    function throwIfNot<A>(reason: string, predicate: (actual: A) => boolean) {
        return (actual: A) => {
            if (predicate(actual)) {
                return true;
            } else {
                throw new Error(`${reason}: ${actual}`);
            }
        };
    }

    namespace predicate {
        export const equals = <V>(expected: V) => (actual: V) => actual === expected;
        export const isMoreThan = <V>(expected: V) => (actual: V) => actual > expected;
        export const isLessThan = <V>(expected: V) => (actual: V) => actual < expected;
        export const includes = (expected: any) => (actual: any) => actual.includes(expected);
        export const includesWord =
            (expected: string) => (actual: string) => actual.split(' ').includes(expected);
        export const arrayCompareBy = (f) => ([x, ...xs]) => ([y, ...ys]) =>
            x === undefined && y === undefined
                ? true
                : Boolean (f (x) (y)) && arrayCompareBy (f) (xs) (ys);
        export const equalsToArray = arrayCompareBy(equals);
        export const equalsByContainsToArray = arrayCompareBy(includes);
    }

    function described<E>(description: string, predicate: Condition<E>) {
        const condition = async (entity: E) => {
            try {
                const value = await predicate(entity);
                if (!value) {
                    throw new Error('false');
                }
                return value;
            } catch (error) {
                throw new FailedToMatchConditionWithReasonError(description, error);
            }
        };
        condition.toString = () => description; // todo: `Entity ${entity} ${description}` ?
        return condition;
    }

    export namespace element {

        // todo: isVisible vs visible, etc.
        export const isVisible: ElementCondition =
            described('is visible', query.element.isVisible);

        export const isHidden: ElementCondition =
            Condition.not(isVisible, 'is hidden');

        export function hasVisibleElement(by: By): ElementCondition {
            return described(`has visible element located by ${by}`, async (element: Element) =>
                element.element(by).matches(isVisible)
            );
        }

        export const isSelected: ElementCondition =
            hasAttribute('elementIsSelected');

        export const isPresent: ElementCondition =
            described('is present', async (element: Element) =>
                !!(await element.getWebElement())
            );

        export const isAbsent: ElementCondition =
            Condition.not(isPresent, 'is absent');

        export const isFocused: ElementCondition =
            described('is focused', async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                )
            );

        export function hasAttribute(name: string): ElementCondition {
            return described(`has attribute with name ${name}`, async (element: Element) =>
                !!(await element.attribute(name))
            );
        }

        // todo: condition... should it be Promise<boolean> or as currently Promise<boolean | throws } ?
        export function hasText(text: string): ElementCondition { // todo: do we need string | number
            return described(`has text ${text}`, async (element: Element) =>
                query.element.text(element).then(
                    throwIfNot('actual text', predicate.includes(text))
                )
            );
        }

        export function hasExactText(text: string): ElementCondition { // todo: do we need string | number
            return described(`has text ${text}`, async (element: Element) =>
                query.element.text(element).then(
                    throwIfNot('actual text', predicate.equals(text))
                )
            );
        }

        export function hasAttributeWithValue(name: string, value: string): ElementCondition {
            return described(`has attribute '${name}' with value '${value}'`, async (element: Element) =>
                query.element.attribute(name)(element).then(
                    throwIfNot('actual value', predicate.equals(value))
                )
            );
        }

        export function hasAttributeWithValueContaining(name: string, partialValue: string): ElementCondition {
            return described(`has attribute '${name}' with value '${partialValue}'`, async (element: Element) =>
                query.element.attribute(name)(element).then(
                    throwIfNot('actual value', predicate.includes(partialValue))
                )
            );
        }

        export function hasCssClass(cssClass: string): ElementCondition {
            return described(`has css class '${cssClass}'`, async (element: Element) =>
                query.element.attribute('class')(element).then(
                    throwIfNot('actual class attribute value', predicate.includesWord(cssClass))
                )
            );
        }
    }

    export namespace collection { // todo: collection vs Collection in collection.ts ?
        export function hasSize(size: number): CollectionCondition {
            return described(`has size ${size}`, async (collection: Collection) =>
                collection.size().then(
                    throwIfNot('actual size', predicate.equals(size)))
            );
        }

        export function hasSizeMoreThan(size: number): CollectionCondition {
            return described(`has size more than ${size}`, async (collection: Collection) =>
                collection.size().then(
                    throwIfNot('actual size', predicate.isMoreThan(size)))
            );
        }

        export function hasSizeLessThan(size: number): CollectionCondition {
            return described(`has size less than ${size}`, async (collection: Collection) =>
                collection.size().then(throwIfNot('actual size', predicate.isLessThan(size)))
            );
        }

        export function hasTexts(texts: string[]): CollectionCondition {
            return described(`has texts ${texts}`, async (collection: Collection) =>
                query.collection.texts(collection).then(
                    throwIfNot('actual texts', predicate.equalsByContainsToArray(texts)))
            );
        }

        export function hasExactTexts(texts: string[]): CollectionCondition {
            return described(`has exact texts ${texts}`, async (collection: Collection) =>
                query.collection.texts(collection).then(
                    throwIfNot('actual texts', predicate.equalsByContainsToArray(texts)))
            );
        }
    }

    export namespace browser {
        export function hasUrlContaining(partialUrl: string): BrowserCondition { // todo: do we need string | number
            return described(`has url containing ${partialUrl}`, async (browser: Browser) =>
                query.browser.url(browser).then(
                    throwIfNot('actual url', predicate.includes(partialUrl))
                )
            );
        }

        export function hasUrl(url: string): BrowserCondition {
            return described(`has url ${url}`, async (browser: Browser) =>
                query.browser.url(browser).then(
                    throwIfNot('actual url', predicate.equals(url))
                )
            );
        }

        export function hasTabsNumber(num: number): BrowserCondition {
            return described(`has tabs number ${num}`, async (browser: Browser) =>
                query.browser.tabsNumber(browser).then(
                    throwIfNot('actual tabs number', predicate.equals(num))
                )
            );
        }

        export function hasTabsNumberMoreThan(num: number): BrowserCondition {
            return described(`has tabs number more than ${num}`, async (browser: Browser) =>
                query.browser.tabsNumber(browser).then(
                    throwIfNot('actual tabs number', predicate.isMoreThan(num))
                )
            );
        }

        export function hasTabsNumberLessThan(num: number): BrowserCondition {
            return described(`has tabs number less than ${num}`, async (browser: Browser) =>
                query.browser.tabsNumber(browser).then(
                    throwIfNot('actual tabs number', predicate.isLessThan(num))
                )
            );
        }
    }
}
