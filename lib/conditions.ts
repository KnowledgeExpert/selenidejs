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
import { ConditionNotMatchedError } from './errors/conditionDoesNotMatchError';

export type ElementCondition = Condition<Element>;
export type CollectionCondition = Condition<Collection>;
export type BrowserCondition = Condition<Browser>;

export namespace Conditions { // todo: rename to condition? for style like element.should(condition.element.isVisible)

    function conditionFromAsyncQuery<E>(aPredicate: (entity: E) => Promise<boolean>): Condition<E> {
        return lambda(aPredicate.toString(), async (entity: E) => {
            if (! await aPredicate(entity)) {
                throw new ConditionNotMatchedError();
            }
        });
    }

    /**
     * Transforms an entity query compared through predicate - to Condition
     * Example: throwIfNotActual(query.element.text, predicate.equals(text))
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

    // todo: move somewhere to utils/helpers?
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

        export const hasText = (expected: string): ElementCondition => // todo: do we need string | number
            lambda(`has text: ${expected}`,
                   throwIfNotActual(query.element.text, predicate.includes(expected)));

        export const hasExactText = (expected: string): ElementCondition => // todo: do we need string | number ?
            lambda(`has exact text: ${expected}`,
                   throwIfNotActual(query.element.text, predicate.equals(expected)));

        export const hasAttributeWithValue = (name: string, value: string): ElementCondition =>
            lambda(`has attribute '${name}' with value '${value}'`,
                   throwIfNotActual(query.element.attribute(name), predicate.equals(value)));


        export const hasAttributeWithValueContaining = (name: string, partialValue: string): ElementCondition =>
            lambda(`has attribute '${name}' with value '${partialValue}'`,
                   throwIfNotActual(query.element.attribute(name), predicate.includes(partialValue)));

        export const hasCssClass = (cssClass: string): ElementCondition =>
            lambda(`has css class '${cssClass}'`,
                   throwIfNotActual(query.element.attribute('class'), predicate.includesWord(cssClass)));
    }

    export namespace collection { // todo: collection vs Collection in collection.ts ?
        export const hasSize = (expected: number): CollectionCondition =>
            lambda(`has size ${expected}`,
                   throwIfNotActual(query.collection.size, predicate.equals(expected)));

        export const hasSizeMoreThan = (size: number): CollectionCondition =>
            lambda(`has size more than ${size}`,
                   throwIfNotActual(query.collection.size, predicate.isMoreThan(size)));

        export const hasSizeLessThan = (size: number): CollectionCondition =>
            lambda(`has size less than ${size}`,
                   throwIfNotActual(query.collection.size, predicate.isLessThan(size)));

        export const hasTexts = (texts: string[]): CollectionCondition =>
            lambda(`has texts ${texts}`,
                   throwIfNotActual(query.collection.texts, predicate.equalsByContainsToArray(texts)));

        export const hasExactTexts = (texts: string[]): CollectionCondition =>
            lambda(`has exact texts ${texts}`,
                   throwIfNotActual(query.collection.texts, predicate.equalsByContainsToArray(texts)));
    }

    export namespace browser {
        export const hasUrlContaining = (partialUrl: string): BrowserCondition => // todo: do we need string | number
            lambda(`has url containing ${partialUrl}`,
                   throwIfNotActual(query.browser.url, predicate.includes(partialUrl)));

        export const hasUrl = (url: string): BrowserCondition =>
            lambda(`has url ${url}`,
                   throwIfNotActual(query.browser.url, predicate.equals(url)));

        export const hasTabsNumber = (num: number): BrowserCondition =>
            lambda(`has tabs number ${num}`,
                   throwIfNotActual(query.browser.tabsNumber, predicate.equals(num)));

        export const hasTabsNumberMoreThan = (num: number): BrowserCondition =>
            lambda(`has tabs number more than ${num}`,
                   throwIfNotActual(query.browser.tabsNumber, predicate.isMoreThan(num)));

        export const hasTabsNumberLessThan = (num: number): BrowserCondition =>
            lambda(`has tabs number less than ${num}`,
                   throwIfNotActual(query.browser.tabsNumber, predicate.isLessThan(num)));
    }
}
