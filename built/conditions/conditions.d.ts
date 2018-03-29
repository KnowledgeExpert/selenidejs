import { ElementCondition } from "./elementCondition";
import { BrowserCondition } from "./browserCondition";
import { CollectionCondition } from "./collectionCondition";
import { By } from "selenium-webdriver";
export declare namespace Conditions {
    namespace element {
        function visibleElement(locator: By): ElementCondition;
        function selected(): ElementCondition;
        function absent(): ElementCondition;
        function present(): ElementCondition;
        function visible(): ElementCondition;
        function hidden(): ElementCondition;
        function hasText(text: string | number): ElementCondition;
        function hasExactText(text: string | number): ElementCondition;
        function hasAttribute(attributeName: string): ElementCondition;
        function hasAttributeWithValue(attributeName: string, attributeValue: string | number): ElementCondition;
        function hasAttributeWithExactValue(attributeName: string, attributeValue: string | number): ElementCondition;
        function hasClass(cssClass: string | number): ElementCondition;
    }
    namespace collection {
        function hasSize(size: number): CollectionCondition;
        function hasSizeMoreThan(size: number): CollectionCondition;
        function hasTexts(texts: string[] | number[]): CollectionCondition;
        function hasExactTexts(texts: string[] | number[]): CollectionCondition;
    }
    namespace driver {
        function urlContains(url: string): BrowserCondition;
        function tabsHaveSizeGreaterThan(size: number): BrowserCondition;
    }
}
