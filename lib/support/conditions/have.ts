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
import { CollectionCondition, BrowserCondition, ElementCondition, condition } from '../../conditions';


export namespace have {

    export function visibleElement(locator: By): ElementCondition {
        return condition.element.hasVisibleElement(locator);
    }

    export function exactText(value: string/* | number*/): ElementCondition {
        return condition.element.hasExactText(value);
    }

    export function text(value: string/* | number*/): ElementCondition {
        return condition.element.hasText(value);
    }

    // todo: do we really need this "optionality" of attributeValue, i.e. one super condition instead of two?
    /* ... - no, we do not
     * here is why... look at this example:
     * element.should(have.attribute('class', 'green'));
     * if you read it, like in real English, you will never guess, that it will be compared by "contains"
     * because naturally a native speaker will understand it as "exact comparison".
     * Ok, we can rename:
     * element.should(have.attributeContaining('class', 'green'));
     * but how then understand this:
     * element.should(have.attributeContaining('class'));
     * o_O?
     * in english it will sound like "there should be an element with some of attributes
     * that contains "class" text in the value
     * ;)
     * This why, if we want to keep things "naturally readable and understandable", we have to separate...
     * and keep things simple...
     **/
    export function attribute(name: string): ElementCondition {
        return condition.element.hasAttribute(name);
    }

    export function attributeWithValue(attributeName: string, attributeValue: string/* | number*/): ElementCondition {
        return condition.element.hasAttributeWithValue(attributeName, attributeValue);
    }

    export function attributeWithValueContaining(attributeName: string, attributeValue: string/* | number*/)
    : ElementCondition {
        return condition.element.hasAttributeWithValueContaining(attributeName, attributeValue);
    }

    export function value(value: string/* | number*/): ElementCondition {
        return attributeWithValue('value', value);
    }

    export function cssClass(cssClass: string): ElementCondition {
        return condition.element.hasCssClass(cssClass);
    }

    export function size(size: number): CollectionCondition {
        return condition.collection.hasSize(size);
    }

    export function texts(...texts: string[]): CollectionCondition {
        return condition.collection.hasExactTexts(texts);
    }

    export function url(urlPart: string): BrowserCondition {
        return condition.browser.hasUrl(urlPart);
    }

    // todo: what about inUrl?
    /*
     * compare:
     * browser.should(have.inUrl('main-page'));
     * VS
     * browser.should(have.urlContaining('main-page'));
     * or...
     * browser.should(have.textInUrl('main-page'));
     */
    export function urlContaining(urlPart: string): BrowserCondition {
        return condition.browser.hasUrlContaining(urlPart);
    }

    export function exactTexts(...texts: string[]): CollectionCondition {
        return condition.collection.hasExactTexts(texts);
    }

    export function tabsNumber(num: number): BrowserCondition {
        return condition.browser.hasTabsNumber(num);
    }

    export function tabsNumberLessThan(num: number): BrowserCondition {
        return condition.browser.hasTabsNumberLessThan(num);
    }

    export function tabsNumberMoreThan(num: number): BrowserCondition {
        return condition.browser.hasTabsNumberMoreThan(num);
    }
}
