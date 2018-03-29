import {Conditions} from "../conditions";
import {ElementCondition} from "../elementCondition";
import {CollectionCondition} from "../collectionCondition";
import {By} from "selenium-webdriver";
import {BrowserCondition} from "../browserCondition";


export namespace have {

    export function visibleElement(locator: By) {
        return Conditions.element.visibleElement(locator);
    }

    export function exactText(value: string | number): ElementCondition {
        return Conditions.element.hasExactText(value);
    }

    export function text(value: string | number) {
        return Conditions.element.hasText(value);
    }

    export function attribute(attributeName: string, attributeValue?: string | number): ElementCondition {
        return attributeValue === undefined
            ? Conditions.element.hasAttribute(attributeName)
            : Conditions.element.hasAttributeWithValue(attributeName, attributeValue);
    }

    export function exactAttribute(attributeName: string, attributeValue?: string | number): ElementCondition {
        return attributeValue === undefined
            ? Conditions.element.hasAttribute(attributeName)
            : Conditions.element.hasAttributeWithExactValue(attributeName, attributeValue);
    }

    export function value(value: string | number) {
        return attribute("value", value);
    }

    export function cssClass(cssClass: string): ElementCondition {
        return Conditions.element.hasClass(cssClass);
    }

    export function size(size: number): CollectionCondition {
        return Conditions.collection.hasSize(size);
    }

    export function texts(...texts: string[]): CollectionCondition {
        return Conditions.collection.hasExactTexts(texts);
    }

    export function exactTexts(...texts: string[]): CollectionCondition {
        return Conditions.collection.hasExactTexts(texts);
    }

    export function tabsSizeGreaterThan(size: number): BrowserCondition {
        return Conditions.driver.tabsHaveSizeGreaterThan(size);
    }

}