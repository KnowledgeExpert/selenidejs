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

import { Query } from '../wait';
import { Element } from '../element';
import { Collection } from '../collection';
import { Browser } from '../browser';
import { Utils } from '../utils';
import lambda = Utils.lambda;
import { By, WebElement } from 'selenium-webdriver';

export type ElementQuery<R> = Query<Element, R>; // todo: do we need it? o_O

/**
 * raw queries on actual element's webelement
 * raw means - without any waiting...
 *
 * all are implemented through element.getWebElement()
 * e.g. element.getWebElement().getText over element.text()
 * because element.text() already has waiting built in.
 * this is needed, because these queries are used not only to build corresponding element methods
 * with waiting built in
 * but also for conditions...
 *
 * hence, these functions are not supposed to be used in "perform/get" context:
 *   `element.click().then(query.element.text)`
 * this query may fail if element was absent after click for some milliseconds...
 * use the following alternative instead:
 *   `element.click().then(get.text)`
 */
export namespace query {
    export namespace element {
        export const isVisible = lambda('is visible', async (element: Element) =>
            (await element.getWebElement()).isDisplayed());

        export const hasVisibleElement = (by: By) =>
            lambda(`has visible element located by ${by}`, async (element: Element) =>
                isVisible(element.element(by)));

        export const isEnabled = lambda('is enabled', async (element: Element) =>
            (await element.getWebElement()).isEnabled());

        export const isPresent = lambda('is present', async (element: Element) =>
            !!(await element.getWebElement()));

        export const isFocused = lambda('is focused', async (element: Element) =>
            WebElement.equals(
                await element.executeScript('return document.activeElement') as WebElement,
                await element.getWebElement()
            ));

        export const text = lambda('text', async (element: Element) =>
            (await element.getWebElement()).getText());

        export const hasText = (text: string) =>
            lambda(`has text ${text}`, async (element: Element) =>
                (await query.element.text(element)).includes(text));

        export const attribute = (name: string) =>
            lambda(`attribute ${name}`, async (element: Element) =>
                (await element.getWebElement()).getAttribute(name));

        export const hasAttribute = (name: string) =>
            lambda(`has attribute with name ${name}`, async (element: Element) =>
                !!(await query.element.attribute(name)(element)));

        export const innerHtml = attribute('innerHTML');

        export const outerHtml = attribute('outerHTML');

        export const value = attribute('value');
    }

    export namespace collection {
        export const size = lambda('size', async (collection: Collection) =>
            (await collection.getWebElements()).length);

        export const hasSize = (length: number) =>
            lambda(`has size ${length}`, async (collection: Collection) =>
                (await size(collection)) === length
            );

        export const texts = lambda('texts', async (collection: Collection) => {
            const webelements = await collection.getWebElements();
            return Promise.all(webelements.map(webElement => webElement.getText()));
        });
    }

    export namespace browser {
        export const url = lambda('url', async (browser: Browser) =>
            browser.driver.getCurrentUrl());

        export const tabsNumber = lambda('tabs number', async (browser: Browser) =>
            (await browser.driver.getAllWindowHandles()).length);
    }
}
