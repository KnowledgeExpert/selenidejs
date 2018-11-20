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

import { By, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
import { ByFilteredWebElementsLocator } from './locators/byFilteredWebElementsLocator';
import { ByIndexedWebElementLocator } from './locators/byIndexedWebElementLocator';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { Locator } from './locators/locator';
import { WebElementLocator } from './locators/webElementLocator';
import { WebElementsLocator } from './locators/webElementsLocator';
import { Utils } from './utils';
import { With } from './with';


export namespace ElementsBuilder {

    type ElementsContext = Element | Driver | Collection;

    function elementWithDriver(context: ElementsContext, locator: Locator<WebElement>): Element {
        return new Element(locator, context instanceof Driver ? context : Utils.getDriver(context));
    }

    function collectionWithDriver(context: ElementsContext, locator: Locator<WebElement[]>): Collection {
        return new Collection(locator, context instanceof Driver ? context : Utils.getDriver(context));
    }

    export function element(cssOrXpathOrBy: string | By) {
        return (context: Element | Driver) => {
            const by = Utils.toBy(cssOrXpathOrBy);
            const locator = new ByWebElementLocator(by, context);
            return elementWithDriver(context, locator);
        };
    }

    export const parent = (element: Element) => {
        return ElementsBuilder.element(With.xpath('./..'))(element);
    };

    export function followingSibling(predicate: string = '') {
        return (element: Element) => {
            return ElementsBuilder.element(With.xpath('./following-sibling::*' + predicate))(element);
        };
    }

    export function all(cssOrXpathOrBy: string | By) {
        return (context: Element | Driver) => {
            const by = Utils.toBy(cssOrXpathOrBy);
            const locator = new ByWebElementsLocator(by, context);
            return collectionWithDriver(context, locator);
        };
    }

    export function filtered(condition: Condition<Element>) {
        return (collection: Collection) => {
            const locator = new ByFilteredWebElementsLocator(condition, collection);
            return collectionWithDriver(collection, locator);
        };
    }

    export function nth(index: number) {
        return (collection: Collection) => {
            const locator = new ByIndexedWebElementLocator(index, collection);
            return elementWithDriver(collection, locator);
        };
    }

    export function find(condition: Condition<Element>) {
        return (collection: Collection) => {
            return collection.filterBy(condition).first();
        };
    }

    export function wrapElement(webelement: WebElement) {
        return (driver: Driver) => {
            const locator = new WebElementLocator(webelement);
            return new Element(locator, driver);
        };
    }

    export function wrapAll(webelements: WebElement[]) {
        return (driver: Driver) => {
            const locator = new WebElementsLocator(webelements);
            return new Collection(locator, driver);
        };
    }
}
