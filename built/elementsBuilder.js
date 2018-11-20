"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const collection_1 = require("./collection");
const driver_1 = require("./driver");
const element_1 = require("./element");
const byFilteredWebElementsLocator_1 = require("./locators/byFilteredWebElementsLocator");
const byIndexedWebElementLocator_1 = require("./locators/byIndexedWebElementLocator");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const webElementLocator_1 = require("./locators/webElementLocator");
const webElementsLocator_1 = require("./locators/webElementsLocator");
const utils_1 = require("./utils");
const with_1 = require("./with");
var ElementsBuilder;
(function (ElementsBuilder) {
    function elementWithDriver(context, locator) {
        return new element_1.Element(locator, context instanceof driver_1.Driver ? context : utils_1.Utils.getDriver(context));
    }
    function collectionWithDriver(context, locator) {
        return new collection_1.Collection(locator, context instanceof driver_1.Driver ? context : utils_1.Utils.getDriver(context));
    }
    function element(cssOrXpathOrBy) {
        return (context) => {
            const by = utils_1.Utils.toBy(cssOrXpathOrBy);
            const locator = new byWebElementLocator_1.ByWebElementLocator(by, context);
            return elementWithDriver(context, locator);
        };
    }
    ElementsBuilder.element = element;
    ElementsBuilder.parent = (element) => {
        return ElementsBuilder.element(with_1.With.xpath('./..'))(element);
    };
    function followingSibling(predicate = '') {
        return (element) => {
            return ElementsBuilder.element(with_1.With.xpath('./following-sibling::*' + predicate))(element);
        };
    }
    ElementsBuilder.followingSibling = followingSibling;
    function all(cssOrXpathOrBy) {
        return (context) => {
            const by = utils_1.Utils.toBy(cssOrXpathOrBy);
            const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, context);
            return collectionWithDriver(context, locator);
        };
    }
    ElementsBuilder.all = all;
    function filtered(condition) {
        return (collection) => {
            const locator = new byFilteredWebElementsLocator_1.ByFilteredWebElementsLocator(condition, collection);
            return collectionWithDriver(collection, locator);
        };
    }
    ElementsBuilder.filtered = filtered;
    function nth(index) {
        return (collection) => {
            const locator = new byIndexedWebElementLocator_1.ByIndexedWebElementLocator(index, collection);
            return elementWithDriver(collection, locator);
        };
    }
    ElementsBuilder.nth = nth;
    function find(condition) {
        return (collection) => {
            return collection.filterBy(condition).first();
        };
    }
    ElementsBuilder.find = find;
    function wrapElement(webelement) {
        return (driver) => {
            const locator = new webElementLocator_1.WebElementLocator(webelement);
            return new element_1.Element(locator, driver);
        };
    }
    ElementsBuilder.wrapElement = wrapElement;
    function wrapAll(webelements) {
        return (driver) => {
            const locator = new webElementsLocator_1.WebElementsLocator(webelements);
            return new collection_1.Collection(locator, driver);
        };
    }
    ElementsBuilder.wrapAll = wrapAll;
})(ElementsBuilder = exports.ElementsBuilder || (exports.ElementsBuilder = {}));
//# sourceMappingURL=elementsBuilder.js.map