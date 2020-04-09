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
import { Browser } from '../../browser';
import { Collection } from '../../collection';
import { ElementCondition } from '../../conditions';
import { Element } from '../../element';

export namespace find {

    /* Context.* builders */ // todo: consider extract actual Context interface

    export const element = (cssOrXpathOrBy: string | By) =>
        (context: Element | Browser) => context.element(cssOrXpathOrBy);

    export const collected = (searchFunction: (element: Element) => Element | Collection) =>
        (collection: Collection) => collection.collected(searchFunction);

    /* Element.* builders */
    export const parent = (element: Element) => element.parent;
    export const followingSibling = (element: Element) => element.followingSibling;

    /* Collection.* builders */

    export const elementAt = (index: number) =>
        (collection: Collection) => collection.elementAt(index);

    export const first = (collection: Collection) => collection.first;
    export const sliced = (start: number, end: number) =>
        (collection: Collection) => collection.sliced(start, end);

    // export const first = (count?: number) => (collection: Collection) => collection.first(count);
    export const elementBy = (condition: ElementCondition) =>
        (collection: Collection) => collection.elementBy(condition);
    export const filteredBy = (condition: ElementCondition) =>
        (collection: Collection) => collection.filteredBy(condition);

    /* Browser.* builders */
    export const alert = (browser: Browser) => browser.alert;
}
