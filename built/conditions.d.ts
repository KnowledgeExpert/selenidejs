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
    }
}
