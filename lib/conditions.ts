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

import { Browser } from './browser';
import { Collection } from './collection';
import { Element } from './element';
import { Condition } from './wait';
import { By, WebElement } from 'selenium-webdriver';
import { query } from './queries';
import { ConditionNotMatchedError } from './errors/conditionDoesNotMatchError';
import { lambda } from './utils';
import { predicate } from './utils/predicates';

export type ElementCondition = Condition<Element>;
export type CollectionCondition = Condition<Collection>;
export type BrowserCondition = Condition<Browser>;

/**
 * The list of predefined conditions for all type of entities:
 * - condition.element.*
 * - condition.collection.*
 * - condition.browser.*
 *
 * Can be used in the following way:
 * ```
 *     await browser.all('.google-result').should(condition.collection.have.size(10))
 * ```
 *
 * Yet there are more handy aliases in be.* and have.* namespaces:
 * ```
 *     await browser.all('.google-result').should(have.size(10))
 * ```
 *
 * All conditions (Condition<T>) are just predicate-like functions on entity of corresponding type (T), with:
 * - descriptive custom toString implementation
 * - just passing (returning void) in case when the "predicate" version would return true
 * - throwing Error in case when the "predicate" version would return false
 *
 * The following example shows how a condition can be implemented:
 * ```ts
 *     export function hasText(expected: string): ElementCondition {
 *         const description = `has text: ${expected}`
 *         const condition = (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         }
 *         condition.toString = () => description;
 *         return condition;
 *     }
 * ```
 * The code above can be simply refactored, by utilizing some function (let's call it lambda)
 * that will automatically "describe" a passed function with provided description:
 * ```ts
 *     export function hasText(expected: string): ElementCondition {
 *         return lambda(`has text: ${expected}`, (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         });
 *     }
 * ```
 * Or more concise by using arrow functions:
 * ```ts
 *     export const hasText = (expected: string): ElementCondition =>
 *         lambda(`has text: ${expected}`, (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         });
 * ```
 * We can refactor the code above even more, if notice,
 * that the actual condition reflects a simple rule:
 * - throw error if actual value (returned from some query on element like "getting its text")
 *   does not satisfy the predicate (like includes expected text)
 * If we abstract this "throw error if not predicate(actual)" into some function like throwIfNotActual,
 * The code will become very concise and declarative:
 * ```ts
 *     export const hasText = (expected: string): ElementCondition =>
 *         lambda(`has text: ${expected}`,
 *                throwIfNotActual(query.text, predicate.includes(expected)));
 * ```
 *
 * This is how predefined in selenidejs conditions are implemented below.
 *
 * Have fun;)
 */
export namespace condition {

    /**
     * like conditionFromAsyncQuery but with custom description
     * @param {string} description
     * @param {(entity: E) => Promise<boolean>} predicate
     * @returns {Condition<E>}
     */
    function throwIfNot<E>(description: string, predicate: (entity: E) => Promise<boolean>): Condition<E> {
        return lambda(description, async (entity: E) => {
            if (!await predicate(entity)) {
                throw new ConditionNotMatchedError();
            }
        });
    }

    /**
     * Transforms an entity query compared through predicate - to Condition
     * Example: throwIfNotActual(query.text, predicate.equals(text))
     */
    function throwIfNotActual<E, A>(query: (entity: E) => Promise<A>, predicate: (actual: A) => boolean): Condition<E> {
        return async (entity: E) => {
            const actual = await query(entity);
            if (!predicate(actual)) {
                throw new Error(`actual ${query}: ${actual}`);
            }
        };
    }

    function conditionFromAsyncQuery<E>(describedPredicate: (entity: E) => Promise<boolean>): Condition<E> {
        return lambda(describedPredicate.toString(), async (entity: E) => {
            if (!await describedPredicate(entity)) {
                throw new ConditionNotMatchedError();
            }
        });
    }

    export namespace element {
        /*
         * todo: consider adding condition.element.isBlank


         */

        export const isVisible: ElementCondition =
            throwIfNot('is visible', async (element: Element) =>
                (await element.getWebElement()).isDisplayed());

        export const isHidden: ElementCondition =
            Condition.not(isVisible, 'is hidden');

        export const hasVisibleElement = (by: By): ElementCondition =>
            throwIfNot(`has visible element located by ${by}`, async (element: Element) =>
                (await element.element(by).getWebElement()).isDisplayed());

        export const hasAttribute = (name: string): ElementCondition =>
            lambda(`has attribute '${name}'`,
                   throwIfNotActual(query.attribute(name), predicate.isTruthy));

        export const isSelected: ElementCondition =
            hasAttribute('elementIsSelected');

        export const isEnabled: ElementCondition =
            throwIfNot('is enabled', async (element: Element) =>
                (await element.getWebElement()).isEnabled());

        export const isDisabled: ElementCondition =
            Condition.not(isEnabled, 'is disabled');

        export const isPresent: ElementCondition =
            throwIfNot('is present', async (element: Element) =>
                !!(await element.getWebElement()));

        export const isAbsent: ElementCondition =
            Condition.not(isPresent, 'is absent');

        export const isFocused: ElementCondition =
            throwIfNot('is focused', async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ));

        export const hasText = (expected: string): ElementCondition => // todo: do we need string | number
            lambda(`has text: ${expected}`,
                   throwIfNotActual(query.text, predicate.includes(expected)));

        export const hasExactText = (expected: string): ElementCondition => // todo: do we need string | number ?
            lambda(`has exact text: ${expected}`,
                   throwIfNotActual(query.text, predicate.equals(expected)));

        export const hasAttributeWithValue = (name: string, value: string): ElementCondition =>
            lambda(`has attribute '${name}' with value '${value}'`,
                   throwIfNotActual(query.attribute(name), predicate.equals(value)));


        export const hasAttributeWithValueContaining = (name: string, partialValue: string): ElementCondition =>
            lambda(`has attribute '${name}' with value '${partialValue}'`,
                   throwIfNotActual(query.attribute(name), predicate.includes(partialValue)));

        export const hasCssClass = (cssClass: string): ElementCondition =>
            lambda(`has css class '${cssClass}'`,
                   throwIfNotActual(query.attribute('class'), predicate.includesWord(cssClass)));

        export const hasValue = (expected: string): ElementCondition =>
            hasAttributeWithValue('value', expected);

        export const hasValueContaining = (expected: string): ElementCondition =>
            hasAttributeWithValueContaining('value', expected);

        export const isBlank = Condition.and(hasExactText(''), hasValue(''));
    }

    export namespace collection { // todo: collection vs Collection in collection.ts ?
        export const hasSize = (expected: number): CollectionCondition =>
            lambda(`has size ${expected}`,
                   throwIfNotActual(query.size, predicate.equals(expected)));

        export const hasSizeMoreThan = (size: number): CollectionCondition =>
            lambda(`has size more than ${size}`,
                   throwIfNotActual(query.size, predicate.isMoreThan(size)));

        export const hasSizeLessThan = (size: number): CollectionCondition =>
            lambda(`has size less than ${size}`,
                   throwIfNotActual(query.size, predicate.isLessThan(size)));

        // todo: should we filter collection for visibility before applying this condition?
        export const hasTexts = (texts: string[]): CollectionCondition =>
            lambda(`has texts ${texts}`,
                   throwIfNotActual(query.texts, predicate.equalsByContainsToArray(texts)));

        export const hasExactTexts = (texts: string[]): CollectionCondition =>
            lambda(`has exact texts ${texts}`,
                   throwIfNotActual(query.texts, predicate.equalsByContainsToArray(texts)));
    }

    export namespace browser {
        export const hasUrlContaining = (partialUrl: string): BrowserCondition => // todo: do we need string | number
            lambda(`has url containing ${partialUrl}`,
                   throwIfNotActual(query.url, predicate.includes(partialUrl)));

        export const hasUrl = (url: string): BrowserCondition =>
            lambda(`has url ${url}`,
                   throwIfNotActual(query.url, predicate.equals(url)));

        export const hasTabsNumber = (num: number): BrowserCondition =>
            lambda(`has tabs number ${num}`,
                   throwIfNotActual(query.tabsNumber, predicate.equals(num)));

        export const hasTabsNumberMoreThan = (num: number): BrowserCondition =>
            lambda(`has tabs number more than ${num}`,
                   throwIfNotActual(query.tabsNumber, predicate.isMoreThan(num)));

        export const hasTabsNumberLessThan = (num: number): BrowserCondition =>
            lambda(`has tabs number less than ${num}`,
                   throwIfNotActual(query.tabsNumber, predicate.isLessThan(num)));

        // todo: make it accept func
        /* tslint:disable:ban-types */
        export const hasJsReturnedTrue = (script: string | Function, ...args: any[]): BrowserCondition =>
            throwIfNot(`true is returned by js script: ${script}`, async (browser: Browser) =>
                !!(await browser.executeScript(script, ...args))); // todo: is it correct? :)
        /* tslint:enable:ban-types */
    }
}
