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
import { Browser } from './browser';
import { Collection } from './collection';
import { Element } from './element';
import { Condition } from './wait';
import { query } from './refactor/queries';
import { Utils } from './utils';
import lambda = Utils.lambda;

export type ElementCondition = Condition<Element>;
export type CollectionCondition = Condition<Collection>;
export type BrowserCondition = Condition<Browser>;

export namespace Conditions { // todo: rename to condition? for style like element.should(condition.element.isVisible)

    /* tslint:disable:object-literal-shorthand */
    /* tslint:disable:no-invalid-this */
    /* tslint:disable:only-arrow-functions */

    function conditionFromAsyncQuery<E>(aPredicate: (entity: E) => Promise<boolean>): Condition<E> {
        return lambda(aPredicate.toString(), async (entity: E) => {
            if (! await aPredicate(entity)) {
                throw new Error(`${aPredicate}? = false`);
            }
        });
    }

    /**
     * like conditionFromAsyncQuery but non-async version
     */
    function throwIfNot<A>(reason: string, predicate: (actual: A) => boolean) {
        return (actual: A) => {
            if (!predicate(actual)) {
                throw new Error(`${reason}: ${actual}`);
            }
        };
    }

    /**
     * throwIfNotActual(query.element.text, predicate.equals(text))
     */
    function throwIfNotActual<E, A>(
        query: (entity: E) => Promise<A>, predicate: (actual: A) => boolean
    ): Condition<E> {
        return async (entity: E) => {
            const actual = await query(entity);
            if (!predicate(actual)) {
                throw new Error(`actual ${query}: ${actual}`);
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
        export const arrayCompareBy = (f) => ([x, ...xs]: any[]) => ([y, ...ys]: any[]) =>
            x === undefined && y === undefined
                ? true
                : Boolean(f(x)(y)) && arrayCompareBy(f)(xs)(ys);
        export const equalsToArray = arrayCompareBy(equals);
        export const equalsByContainsToArray = arrayCompareBy(includes);
    }

    export namespace element {

        // todo: isVisible vs visible, etc.
        export const isVisible: ElementCondition =
            conditionFromAsyncQuery(query.element.isVisible);

        export const isHidden: ElementCondition =
            Condition.not(isVisible, 'is hidden');

        export const hasVisibleElement = (by: By): ElementCondition =>
            conditionFromAsyncQuery(query.element.hasVisibleElement(by));

        export const hasAttribute = (name: string): ElementCondition =>
            conditionFromAsyncQuery(query.element.hasAttribute(name));

        export const isSelected: ElementCondition =
            hasAttribute('elementIsSelected');

        export const isEnabled: ElementCondition =
            conditionFromAsyncQuery(query.element.isEnabled);

        export const isDisabled: ElementCondition =
            Condition.not(isEnabled, 'is disabled');

        export const isPresent: ElementCondition =
            conditionFromAsyncQuery(query.element.isPresent);

        export const isAbsent: ElementCondition =
            Condition.not(isPresent, 'is absent');

        export const isFocused: ElementCondition =
            conditionFromAsyncQuery(query.element.isFocused);

        // todo: condition... should it be Promise<boolean> or as currently Promise<boolean | throws } ?
        export const hasText = (expected: string): ElementCondition => // todo: do we need string | number
            lambda(`has text: ${expected}`, throwIfNotActual(query.element.text, predicate.includes(expected)));

        export const hasExactText = (expected: string): ElementCondition => // todo: do we need string | number ?
            lambda(`has exact text: ${expected}`, throwIfNotActual(query.element.text, predicate.equals(expected)));

        export const hasAttributeWithValue = (name: string, value: string): ElementCondition =>
            lambda(`has attribute '${name}' with value '${value}'`, async (element: Element) =>
                query.element.attribute(name)(element).then(
                    throwIfNot('actual value', predicate.equals(value))
                )
            );


        export function hasAttributeWithValueContaining(name: string, partialValue: string): ElementCondition {
            return lambda(`has attribute '${name}' with value '${partialValue}'`, async (element: Element) =>
                query.element.attribute(name)(element).then(
                    throwIfNot('actual value', predicate.includes(partialValue))
                )
            );
        }

        export function hasCssClass(cssClass: string): ElementCondition {
            return lambda(`has css class '${cssClass}'`, async (element: Element) =>
                query.element.attribute('class')(element).then(
                    throwIfNot('actual class attribute value', predicate.includesWord(cssClass))
                )
            );
        }
    }

    export namespace collection { // todo: collection vs Collection in collection.ts ?
        export const hasSize = (expected: number): CollectionCondition =>
            lambda(`has size ${expected}`, throwIfNotActual(query.collection.size, predicate.equals(expected)));

        export function hasSizeMoreThan(size: number): CollectionCondition {
            return lambda(`has size more than ${size}`, async (collection: Collection) =>
                collection.size().then(
                    throwIfNot('actual size', predicate.isMoreThan(size)))
            );
        }

        export function hasSizeLessThan(size: number): CollectionCondition {
            return lambda(`has size less than ${size}`, async (collection: Collection) =>
                collection.size().then(throwIfNot('actual size', predicate.isLessThan(size)))
            );
        }

        export function hasTexts(texts: string[]): CollectionCondition {
            return lambda(`has texts ${texts}`, async (collection: Collection) =>
                query.collection.texts(collection).then(
                    throwIfNot('actual texts', predicate.equalsByContainsToArray(texts)))
            );
        }

        export function hasExactTexts(texts: string[]): CollectionCondition {
            return lambda(`has exact texts ${texts}`, async (collection: Collection) =>
                query.collection.texts(collection).then(
                    throwIfNot('actual texts', predicate.equalsByContainsToArray(texts)))
            );
        }
    }

    export namespace browser {
        export function hasUrlContaining(partialUrl: string): BrowserCondition { // todo: do we need string | number
            return lambda(`has url containing ${partialUrl}`, async (browser: Browser) =>
                query.browser.url(browser).then(
                    throwIfNot('actual url', predicate.includes(partialUrl))
                )
            );
        }

        export function hasUrl(url: string): BrowserCondition {
            return lambda(`has url ${url}`, async (browser: Browser) =>
                query.browser.url(browser).then(
                    throwIfNot('actual url', predicate.equals(url))
                )
            );
        }

        export function hasTabsNumber(num: number): BrowserCondition {
            return lambda(`has tabs number ${num}`, async (browser: Browser) =>
                query.browser.tabsNumber(browser).then(
                    throwIfNot('actual tabs number', predicate.equals(num))
                )
            );
        }

        export function hasTabsNumberMoreThan(num: number): BrowserCondition {
            return lambda(`has tabs number more than ${num}`, async (browser: Browser) =>
                query.browser.tabsNumber(browser).then(
                    throwIfNot('actual tabs number', predicate.isMoreThan(num))
                )
            );
        }

        export function hasTabsNumberLessThan(num: number): BrowserCondition {
            return lambda(`has tabs number less than ${num}`, async (browser: Browser) =>
                query.browser.tabsNumber(browser).then(
                    throwIfNot('actual tabs number', predicate.isLessThan(num))
                )
            );
        }
    }
}
