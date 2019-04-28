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

import { Query } from './wait';
import { Element } from './element';
import { Collection } from './collection';
import { Browser } from './browser';
import { lambda } from './utils';

// export type ElementQuery<R> = Query<Element, R>;

/**
 * Raw queries on actual element's webelement
 * 'Raw' means - without any waiting...
 *
 * All are implemented through element.getWebElement()
 * e.g. element.getWebElement().getText over element.text()
 * because element.text() already has waiting built in.
 * this is needed, because these queries are used not only to build corresponding element methods
 * with waiting built in
 * but also for conditions...
 *
 * Hence, these functions are not supposed to be used in "perform/get" context:
 *   `element.click().then(query.text)`
 * this query may fail if element was absent after click for some milliseconds...
 * use the following alternative instead:
 *   `element.click().then(get.text)`
 *
 * Here, queries do not contain has* and is* queries, like hasText, or isVisible.
 * User can use has* and is* conditions instead. Example:
 *   `if (element.matches(has.text('foo'))) { ... }
 * We really don't need such has* or is* queries both here and built in the entity itself
 * (like element.isVisible), because their use case is very rare. The user will mainly use
 * steps (entity commands, like click) and assertions (entity should(condition)) in tests.
 * And SelenideJs is a tests tool, not something else.
 */
export namespace query {

    /* Element queries */

    export const text = lambda('text', async (element: Element) =>
        (await element.getWebElement()).getText());

    export const someText = lambda('some nonempty visible text', async (element: Element) => {
        const text = await (await element.getWebElement()).getText();
        if (!text) {
            throw new Error('there is no visible nonempty text');
        }
        return text;
    });

    export const attribute = (name: string) =>
        lambda(`attribute ${name}`, async (element: Element) =>
            (await element.getWebElement()).getAttribute(name));

    export const innerHtml = attribute('innerHTML');

    export const outerHtml = attribute('outerHTML');

    export const value = attribute('value');

    /* Collection queries */

    // todo: do we need a count or number alias for size? or even count instead of size?
    export const size = lambda('size', async (collection: Collection) =>
        (await collection.getWebElements()).length);

    export const texts = lambda('texts', async (collection: Collection) => {
        const webelements = await collection.getWebElements();
        return Promise.all(webelements.map(webElement => webElement.getText()));
    });

    /* Browser queries */

    export const url = lambda('url', async (browser: Browser) =>
        browser.driver.getCurrentUrl());

    export const title = lambda('title', async (browser: Browser) =>
        browser.driver.getTitle());

    export const currentTab = lambda('current tab (window handle)', async (browser: Browser) =>
        browser.driver.getWindowHandle());

    export const tab = (index: number) => lambda(`tab by index ${index}`, async (browser: Browser) =>
        (await browser.driver.getAllWindowHandles())[index]);

    export const nextTab = lambda('next tab (window handle)', async (browser: Browser) => {
        const currentTab = await browser.driver.getWindowHandle();
        const allTabs = await browser.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        return currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1];
    });

    export const previousTab = lambda('previous tab (window handle)', async (browser: Browser) => {
        const currentTab = await browser.driver.getWindowHandle();
        const allTabs = await browser.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        return currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1];
    });

    export const tabs = lambda('tabs (all window handles)', async (browser: Browser) =>
        browser.driver.getAllWindowHandles());

    export const tabsNumber = lambda('tabs number', async (browser: Browser) =>
        (await browser.driver.getAllWindowHandles()).length);

    export const pageSource = lambda('page source', async (browser: Browser) =>
       browser.driver.getPageSource());
}
