import { By } from 'selenium-webdriver';
import { Browser } from './browser';
import { Collection } from './collection';
import { Element } from './element';
import { Condition } from './wait';
export declare type ElementCondition = Condition<Element>;
export declare type CollectionCondition = Condition<Collection>;
export declare type BrowserCondition = Condition<Browser>;
export declare namespace Conditions {
    namespace element {
        const isVisible: ElementCondition;
        const isHidden: ElementCondition;
        const hasVisibleElement: (by: By) => import("./wait").Query<Element, boolean>;
        const hasAttribute: (name: string) => import("./wait").Query<Element, boolean>;
        const isSelected: ElementCondition;
        const isEnabled: ElementCondition;
        const isDisabled: ElementCondition;
        const isPresent: ElementCondition;
        const isAbsent: ElementCondition;
        const isFocused: ElementCondition;
        function hasText(text: string): ElementCondition;
        function hasExactText(text: string): ElementCondition;
        function hasAttributeWithValue(name: string, value: string): ElementCondition;
        function hasAttributeWithValueContaining(name: string, partialValue: string): ElementCondition;
        function hasCssClass(cssClass: string): ElementCondition;
    }
    namespace collection {
        function hasSize(size: number): CollectionCondition;
        function hasSizeMoreThan(size: number): CollectionCondition;
        function hasSizeLessThan(size: number): CollectionCondition;
        function hasTexts(texts: string[]): CollectionCondition;
        function hasExactTexts(texts: string[]): CollectionCondition;
    }
    namespace browser {
        function hasUrlContaining(partialUrl: string): BrowserCondition;
        function hasUrl(url: string): BrowserCondition;
        function hasTabsNumber(num: number): BrowserCondition;
        function hasTabsNumberMoreThan(num: number): BrowserCondition;
        function hasTabsNumberLessThan(num: number): BrowserCondition;
    }
}
