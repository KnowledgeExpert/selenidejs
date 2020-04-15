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

import { WebElement } from 'selenium-webdriver';
import { Browser } from './browser';
import { Collection } from './collection';
import { Element } from './element';
import { ConditionNotMatchedError } from './errors/conditionDoesNotMatchError';
import { query } from './queries';
import { predicate } from './utils/predicates';
import { Condition, Lambda } from './wait';


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
 * All conditions (Condition<T>) are just predicate-like functions on entity of corresponding type (T),
 * wrapped into Condition object: `new Condition(description, predicateLikeFn)`
 * The "predicate-like" function should:
 *  - pass (returning void) in case when a "normal predicate" version would return true
 *  - throw Error in case when a "normal predicate"  would return false
 *
 * The following example shows how a condition can be implemented:
 * ```ts
 *     export function hasText(expected: string): ElementCondition {
 *         return new Condition(`has text: ${expected}`, async (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         })
 *     }
 * ```
 *
 * Or more concise by using arrow functions:
 * ```ts
 *     export const hasText = (expected: string): ElementCondition =>
 *         new Condition(`has text: ${expected}`, async (element: Element) => {
 *             const actual = await element.getWebElement().then(it => it.getText());
 *             if (!actual.includes(expected)) {
 *                 throw new Error(`actual text: ${actual}`);
 *             }
 *         });
 * ```
 *
 * We can refactor the code above even more, if notice,
 * that the actual condition reflects a simple rule:
 * - throw error if actual value (returned from some query on element like "getting its text")
 *   does not satisfy the predicate (like includes expected text)
 * If we abstract this "throw error if not predicate(actual)" into some function like throwIfNotActual,
 * The code will become very concise and declarative:
 * ```ts
 *     export const hasText = (expected: string): ElementCondition =>
 *         new Condition(`has text: ${expected}`,
 *                throwIfNotActual(query.text, predicate.includes(expected)));
 * ```
 *
 * This is how predefined in selenidejs conditions are implemented below.
 *
 * Have fun;)
 */
export namespace condition {

    /**
     * Creates condition from async query
     * @param {(entity: E) => Promise<boolean>} predicate
     * @returns {Condition<E>}
     */
    function throwIfNot<E>(predicate: (entity: E) => Promise<boolean>): Lambda<E, void> {
        return async (entity: E) => {
            if (!await predicate(entity)) {
                throw new ConditionNotMatchedError();
            }
        };
    }

    /**
     * Transforms an entity query compared through predicate - to Condition
     * Example: throwIfNotActual(query.text, predicate.equals(text))
     */
    function throwIfNotActual<E, A>(
        query: (entity: E) => Promise<A>,
        predicate: (actual: A) => boolean)
        : Lambda<E, void> {

        return async (entity: E) => {
            const actual = await query(entity);
            if (!predicate(actual)) {
                throw new Error(`actual ${query}: ${actual}`);
            }
        };
    }

    export namespace element {

        export const isVisible = new Condition(
            'is visible',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isDisplayed()))
        );

        export const isHidden = Condition.not(isVisible, 'is hidden');

        export const hasAttribute = (name: string) => new Condition(
            `has attribute '${name}'`,
            throwIfNotActual(query.attribute(name), predicate.isTruthy)
        );

        export const isSelected = hasAttribute('elementIsSelected');

        export const isEnabled = new Condition(
            'is enabled',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isEnabled()))
        );

        export const isDisabled = Condition.not(isEnabled, 'is disabled');

        export const isPresent = new Condition(
            'is present',
            throwIfNot(async (element: Element) => element.getWebElement().then(_ => true, _ => false)
            ));

        export const isAbsent = Condition.not(isPresent, 'is absent');

        export const isFocused = new Condition(
            'is focused',
            throwIfNot(async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))
        );

        export const hasText = (expected: string | number | RegExp) => new Condition(
            `has text: ${expected}`,
            throwIfNotActual(query.text,
                typeof expected === 'string'
                    ? predicate.includes(expected)
                    : predicate.matches(expected)
            )
        );

        export const hasExactText = (expected: string | number) =>
            new Condition(`has exact text: ${expected}`,
                throwIfNotActual(query.text, predicate.equals(expected)));

        export const hasAttributeWithValue = (name: string, value: string | number) => new Condition(
            `has attribute '${name}' with value '${value}'`,
            throwIfNotActual(query.attribute(name), predicate.equals(value))
        );


        export const hasAttributeWithValueContaining = (name: string, partialValue: string | number) => new Condition(
            `has attribute '${name}' with value '${partialValue}'`,
            throwIfNotActual(query.attribute(name), predicate.includes(partialValue))
        );

        export const hasCssClass = (cssClass: string) => new Condition(
            `has css class '${cssClass}'`,
            throwIfNotActual(query.attribute('class'), predicate.includesWord(cssClass))
        );

        export const hasValue = (expected: string | number) =>
            hasAttributeWithValue('value', expected);

        export const hasValueContaining = (expected: string | number) =>
            hasAttributeWithValueContaining('value', expected);

        // TODO do we need to have message `should have text '' but was ... and value '' but was ...`
        // or we can do just `should be blank` ?
        export const isBlank = hasExactText('').and(hasValue(''));
    }

    export namespace collection { // todo: collection vs Collection in collection.ts ?
        export const hasSize = (expected: number): CollectionCondition => new Condition(
            `has size ${expected}`,
            throwIfNotActual(query.size, predicate.equals(expected))
        );

        export const hasSizeGreaterThan = (size: number): CollectionCondition => new Condition(
            `has size more than ${size}`,
            throwIfNotActual(query.size, predicate.isGreaterThan(size))
        );

        export const hasSizeGreaterThanOrEqual = (size: number): CollectionCondition => new Condition(
            `has size more than ${size}`,
            throwIfNotActual(query.size, predicate.isGreaterThanOrEqual(size))
        );

        export const hasSizeLessThan = (size: number): CollectionCondition => new Condition(
            `has size less than ${size}`,
            throwIfNotActual(query.size, predicate.isLessThan(size))
        );

        export const hasSizeLessThanOrEqual = (size: number): CollectionCondition => new Condition(
            `has size less than ${size}`,
            throwIfNotActual(query.size, predicate.isLessThanOrEqual(size))
        );

        // todo: should we filter collection for visibility before applying this condition?
        // update: for invisible element `getText` will return error or empty string, and
        // it can be confused with message like `but was 'foo', '', 'bar'` when he see on
        // screen only 'foo', 'bar'
        export const hasTexts = (texts: string[] | number[]): CollectionCondition => new Condition(
            `has texts ${texts}`,
            throwIfNotActual(query.texts, predicate.equalsByContainsToArray(texts))
        );

        export const hasExactTexts = (texts: string[] | number[]): CollectionCondition => new Condition(
            `has exact texts ${texts}`,
            throwIfNotActual(query.texts, predicate.equalsByContainsToArray(texts))
        );
    }

    export namespace browser {
        // todo: do we need string | number
        export const hasUrlContaining = (partialUrl: string): BrowserCondition => new Condition(
            `has url containing ${partialUrl}`,
            throwIfNotActual(query.url, predicate.includes(partialUrl))
        );

        export const hasUrl = (url: string): BrowserCondition => new Condition(
            `has url ${url}`,
            throwIfNotActual(query.url, predicate.equals(url))
        );

        export const hasTitle = (title: string): BrowserCondition => new Condition(
            `has title ${title}`,
            throwIfNotActual(query.title, predicate.equals(title))
        );

        export const hasTitleContaining = (partialTitle: string): BrowserCondition => new Condition(
            `has title containing ${partialTitle}`,
            throwIfNotActual(query.title, predicate.includes(partialTitle))
        );

        export const hasTabsNumber = (num: number): BrowserCondition => new Condition(
            `has tabs number ${num}`,
            throwIfNotActual(query.tabsNumber, predicate.equals(num))
        );

        export const hasTabsNumberMoreThan = (num: number): BrowserCondition => new Condition(
            `has tabs number more than ${num}`,
            throwIfNotActual(query.tabsNumber, predicate.isGreaterThan(num))
        );

        export const hasTabsNumberLessThan = (num: number): BrowserCondition => new Condition(
            `has tabs number less than ${num}`,
            throwIfNotActual(query.tabsNumber, predicate.isLessThan(num))
        );

        export const hasJsReturned =
            (expected: any, script: string | ((document: Document) => any), ...args: any[]): BrowserCondition => new Condition(
                `has execute script returned ${JSON.stringify(expected)}`,
                async (browser: Browser) => {
                    const actual = await browser.executeScript(script, ...args);
                    if (typeof expected === 'number' || typeof expected === 'string') {
                        if (expected !== actual) {
                            throw new Error(`actual: ${actual}`);
                        }
                    } else {
                        if (predicate.equals(expected)(actual)) {
                            throw new Error(`actual: ${JSON.stringify(actual)}`);
                        }
                    }
                }
            );
    }
}
