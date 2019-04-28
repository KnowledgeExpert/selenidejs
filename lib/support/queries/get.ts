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

import { Element } from '../../element';
import { query } from '../../queries';
import { Lambda, Query } from '../../wait';
import { Collection } from '../../collection';
import { Browser } from '../../browser';

/**
 * to be used in the following context:
 *   `element.click().then(get.text)`
 */
export namespace get {

    /* Element waiting queries */

    const waitingForEntity = <R>(query: Lambda<Element, R>) =>
        async (element: Element) => element.get(query);

    export const text = waitingForEntity(query.text);
    export const someText = waitingForEntity(query.someText);
    export const attribute = (name: string) => waitingForEntity(query.attribute(name));
    export const innerHtml = waitingForEntity(query.innerHtml);
    export const outerHtml = waitingForEntity(query.outerHtml);
    export const value = waitingForEntity(query.value);

    /* Collection waiting queries */

    const waitingForCollection = <R>(query: Lambda<Collection, R>) =>
        async (collection: Collection) => collection.get(query);

    export const size = waitingForCollection(query.size);
    export const texts = waitingForCollection(query.texts);

    /* Browser waiting queries */

    const waitingForBrowser = <R>(query: Lambda<Browser, R>) =>
        async (browser: Browser) => browser.get(query);

    export const url = waitingForBrowser(query.url);
    export const title = waitingForBrowser(query.title);
    export const tabs = waitingForBrowser(query.tabs);
    export const tab = (index: number) => waitingForBrowser(query.tab(index));
    export const currentTab = waitingForBrowser(query.currentTab);
    export const tabsNumber = waitingForBrowser(query.tabsNumber);
    export const pageSource = waitingForBrowser(query.pageSource);
}
