// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

import {Conditions} from '../conditions';
import {ElementCondition} from '../elementCondition';
import {CollectionCondition} from '../collectionCondition';
import {By} from 'selenium-webdriver';
import {BrowserCondition} from '../browserCondition';

export namespace have {

    export function visibleElement(locator: By) {
        return Conditions.visibleElement(locator);
    }

    export function exactText(value: string | number): ElementCondition {
        return Conditions.elementHasExactText(value);
    }

    export function text(value: string | number) {
        return Conditions.elementHasText(value);
    }

    export function attribute(attributeName: string, attributeValue?: string | number): ElementCondition {
        return attributeValue === undefined
            ? Conditions.elementHasAttribute(attributeName)
            : Conditions.elementHasAttributeWithValue(attributeName, attributeValue);
    }

    export function exactAttribute(attributeName: string, attributeValue?: string | number): ElementCondition {
        return attributeValue === undefined
            ? Conditions.elementHasAttribute(attributeName)
            : Conditions.elementHasAttributeWithExactValue(attributeName, attributeValue);
    }

    export function value(value: string | number) {
        return attribute('value', value);
    }

    export function cssClass(cssClass: string): ElementCondition {
        return Conditions.elementHasClass(cssClass);
    }

    export function size(size: number): CollectionCondition {
        return Conditions.collectionHasSize(size);
    }

    export function texts(...texts: string[]): CollectionCondition {
        return Conditions.collectionHasExactTexts(texts);
    }

    export function exactTexts(...texts: string[]): CollectionCondition {
        return Conditions.collectionHasExactTexts(texts);
    }

    export function tabsSize(size: number): BrowserCondition {
        return Conditions.browserTabsHaveSize(size);
    }

    export function tabsSizeGreaterThan(size: number): BrowserCondition {
        return Conditions.browserTabsHaveSizeGreaterThan(size);
    }
}