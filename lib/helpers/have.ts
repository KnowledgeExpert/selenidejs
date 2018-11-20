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

import { Collection } from '../collection';
import { Condition } from '../condition';
import { Conditions } from '../conditions';
import { Driver } from '../driver';
import { Element } from '../element';


export namespace have {
    export const exactText = (value: string | number): Condition<Element> => Conditions.exactText(value);

    export const text = (value: string | number): Condition<Element> => Conditions.text(value);

    export const attribute = (attributeName: string, attributeValue?: string | number): Condition<Element> => {
        return attributeValue === undefined
            ? Conditions.attribute(attributeName)
            : Conditions.atributeWithValue(attributeName, attributeValue);
    };

    export const exactAttribute = (attributeName: string, attributeValue: string | number): Condition<Element> => {
        return Conditions.attributeWithExactValue(attributeName, attributeValue);
    };

    export const value = (value: string | number): Condition<Element> => attribute('value', value);

    export const cssClass = (cssClass: string): Condition<Element> => Conditions.cssClass(cssClass);

    export const size = (size: number): Condition<Collection> => Conditions.size(size);

    export const sizeGreaterThan = (size: number): Condition<Collection> => Conditions.sizeGreaterThan(size);

    export const texts = (...texts: string[]): Condition<Collection> => Conditions.texts(...texts);

    export const exactTexts = (...texts: string[]): Condition<Collection> => Conditions.exactTexts(...texts);

    export const title = (title: string): Condition<Driver> => Conditions.title(title);

    export const url = (urlPart: string): Condition<Driver> => Conditions.url(urlPart);

    export const urlPart = (urlPart: string): Condition<Driver> => Conditions.urlPart(urlPart);

    export const tabsSize = (size: number): Condition<Driver> => Conditions.tabsSize(size);

    export const tabsSizeGreaterThan = (size: number): Condition<Driver> => Conditions.tabsSizeGreaterThan(size);
}
