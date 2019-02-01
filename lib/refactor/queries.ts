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
import { WebElement } from 'selenium-webdriver';

export type ElementQuery<R> = Query<Element, R>;

export namespace query { // todo: do we really need this separation?
// it's kind of needed only for cases like:
//     await browser.element('#new-todo').setValue('foo').then(pressEnter);
// are there really a lot of such cases?
// maybe we can decide on this later...
// and leave this code here just for example
    export namespace element {
        export const isVisible = lambda('is visible', async (element: Element) =>
            (await element.getWebElement()).isDisplayed());

        export const isEnabled = lambda('is enabled', async (element: Element) =>
            (await element.getWebElement()).isEnabled());

        export const isPresent = lambda('is present', async (element: Element) =>
            !!(await element.getWebElement()));

        export const isFocused = lambda('is focused', async (element: Element) =>
            WebElement.equals(
                await element.executeScript('return document.activeElement') as WebElement,
                await element.getWebElement()
            ));

        export const hasAttribute = (name: string) =>
            lambda(`has attribute with name ${name}`, async (element: Element) =>
                !!(await element.attribute(name))
            );

        export async function text(element: Element) {
            /* tslint:disable:no-console */
            return (await element.getWebElement()).getText();
        }

        export function hasText(text: string) {
            return async (element: Element) =>
                (await (await element.getWebElement()).getText()).includes(text);
        }

        export const attribute = (name: string) => (element: Element) => element.attribute(name);
    }

    export namespace collection {
        export const size = lambda('size', async (collection: Collection) =>
            (await collection.getWebElements()).length);

        export const hasSize = (length: number) =>
            lambda(`has size ${length}`, async (collection: Collection) =>
                (await size(collection)) === length
            );

        export async function texts(collection: Collection) {
            const elements = await collection.getWebElements();
            return Promise.all(elements.map(webElement => webElement.getText()));
        }
    }

    export namespace browser {
        export async function url(browser: Browser) {
            return browser.driver.getCurrentUrl();  // todo: browser.driver?
        }

        export async function tabsNumber(browser: Browser) {
            return (await browser.driver.getAllWindowHandles()).length;
        }
    }
}
