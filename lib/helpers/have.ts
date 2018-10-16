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

import { Conditions } from '../conditions';


export namespace have {
    export const exactText = (value: string | number) => Conditions.exactText(value);

    export const text = (value: string | number) => Conditions.text(value);

    export const attribute = (attributeName: string, attributeValue?: string | number) => {
        return attributeValue === undefined
            ? Conditions.attribute(attributeName)
            : Conditions.atributeWithValue(attributeName, attributeValue);
    };

    export const exactAttribute = (attributeName: string, attributeValue: string | number) => {
        return Conditions.attributeWithExactValue(attributeName, attributeValue);
    };

    export const value = (value: string | number) => attribute('value', value);

    export const cssClass = (cssClass: string) => Conditions.cssClass(cssClass);

    export const size = (size: number) => Conditions.size(size);

    export const sizeGreaterThan = (size: number) => Conditions.sizeGreaterThan(size);

    export const texts = (...texts: string[]) => Conditions.texts(...texts);

    export const exactTexts = (...texts: string[]) => Conditions.exactTexts(...texts);

    export const url = (urlPart: string) => Conditions.url(urlPart);

    export const urlPart = (urlPart: string) => Conditions.urlPart(urlPart);

    export const tabsSize = (size: number) => Conditions.tabsSize(size);

    export const tabsSizeGreaterThan = (size: number) => Conditions.tabsSizeGreaterThan(size);
}
