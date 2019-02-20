import { Browser } from './browser';
import { Collection } from './collection';
import { Element } from './element';
import { Condition } from './wait';
import { By } from 'selenium-webdriver';
export declare type ElementCondition = Condition<Element>;
export declare type CollectionCondition = Condition<Collection>;
export declare type BrowserCondition = Condition<Browser>;
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
export declare namespace condition {
    namespace element {
        const isVisible: ElementCondition;
        const isHidden: ElementCondition;
        const hasVisibleElement: (by: By) => import("./wait").Query<Element, void>;
        const hasAttribute: (name: string) => import("./wait").Query<Element, void>;
        const isSelected: ElementCondition;
        const isEnabled: ElementCondition;
        const isDisabled: ElementCondition;
        const isPresent: ElementCondition;
        const isAbsent: ElementCondition;
        const isFocused: ElementCondition;
        const hasText: (expected: string) => import("./wait").Query<Element, void>;
        const hasExactText: (expected: string) => import("./wait").Query<Element, void>;
        const hasAttributeWithValue: (name: string, value: string) => import("./wait").Query<Element, void>;
        const hasAttributeWithValueContaining: (name: string, partialValue: string) => import("./wait").Query<Element, void>;
        const hasCssClass: (cssClass: string) => import("./wait").Query<Element, void>;
        const hasValue: (expected: string) => import("./wait").Query<Element, void>;
        const hasValueContaining: (expected: string) => import("./wait").Query<Element, void>;
        const isBlank: import("./wait").Query<Element, void>;
    }
    namespace collection {
        const hasSize: (expected: number) => import("./wait").Query<Collection, void>;
        const hasSizeMoreThan: (size: number) => import("./wait").Query<Collection, void>;
        const hasSizeLessThan: (size: number) => import("./wait").Query<Collection, void>;
        const hasTexts: (texts: string[]) => import("./wait").Query<Collection, void>;
        const hasExactTexts: (texts: string[]) => import("./wait").Query<Collection, void>;
    }
    namespace browser {
        const hasUrlContaining: (partialUrl: string) => import("./wait").Query<Browser, void>;
        const hasUrl: (url: string) => import("./wait").Query<Browser, void>;
        const hasTabsNumber: (num: number) => import("./wait").Query<Browser, void>;
        const hasTabsNumberMoreThan: (num: number) => import("./wait").Query<Browser, void>;
        const hasTabsNumberLessThan: (num: number) => import("./wait").Query<Browser, void>;
        const hasJsReturnedTrue: (script: string | Function, ...args: any[]) => import("./wait").Query<Browser, void>;
    }
}
