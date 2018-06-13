"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const elementCondition_1 = require("./elementCondition");
const browserCondition_1 = require("./browserCondition");
const conditionDoesNotMatchError_1 = require("../errors/conditionDoesNotMatchError");
const collectionCondition_1 = require("./collectionCondition");
const be_1 = require("./helpers/be");
var Conditions;
(function (Conditions) {
    function visibleElement(locator) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                try {
                    await element.element(locator).should(be_1.be.visible, 0);
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
            },
            toString: function () {
                return `have visible element located ${locator.toString()}`;
            }
        });
    }
    Conditions.visibleElement = visibleElement;
    Conditions.elementIsSelected = elementHasAttribute('elementIsSelected');
    Conditions.elementIsAbsent = new elementCondition_1.ElementCondition({
        matches: async function (element) {
            try {
                await element.getWebElement();
            }
            catch (error) {
                return element;
            }
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be absent';
        }
    });
    Conditions.elementIsPresent = new elementCondition_1.ElementCondition({
        matches: async function (element) {
            try {
                await element.getWebElement();
                return element;
            }
            catch (ignored) {
            }
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be present';
        }
    });
    Conditions.elementIsVisible = new elementCondition_1.ElementCondition({
        matches: async function (element) {
            try {
                if (await element.isVisible()) {
                    return element;
                }
            }
            catch (ignored) {
            }
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be visible';
        }
    });
    Conditions.elementIsHidden = new elementCondition_1.ElementCondition({
        matches: async function (element) {
            try {
                if (!(await element.isVisible())) {
                    return element;
                }
            }
            catch (ignored) {
            }
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be hidden';
        }
    });
    function elementHasText(text) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                let actualText;
                try {
                    actualText = await (await element.getWebElement()).getText();
                    if (actualText.includes((String(text)))) {
                        return element;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualText}'`);
            },
            toString: function () {
                return `have text '${text}'`;
            }
        });
    }
    Conditions.elementHasText = elementHasText;
    function elementHasExactText(text) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                let actualText;
                try {
                    actualText = await (await element.getWebElement()).getText();
                    if (String(text) === actualText) {
                        return element;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualText}`);
            },
            toString: function () {
                return `have exact text '${text}'`;
            }
        });
    }
    Conditions.elementHasExactText = elementHasExactText;
    function elementHasAttribute(attributeName) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                try {
                    if (null !== await element.attribute(attributeName)) {
                        return element;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`Element ${element.toString()} should have attribute '${attributeName}'`);
            },
            toString: function () {
                return `have attribute '${attributeName}'`;
            }
        });
    }
    Conditions.elementHasAttribute = elementHasAttribute;
    function elementHasAttributeWithValue(attributeName, attributeValue) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                let actualValue;
                try {
                    actualValue = await element.attribute(attributeName);
                    if (actualValue.includes(attributeValue)) {
                        return element;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualValue}'`);
            },
            toString: function () {
                return `have attribute '${attributeName}' with value '${attributeValue}'`;
            }
        });
    }
    Conditions.elementHasAttributeWithValue = elementHasAttributeWithValue;
    function elementHasAttributeWithExactValue(attributeName, attributeValue) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                let actualValue;
                try {
                    actualValue = await element.attribute(attributeName);
                    if (String(attributeValue) === actualValue) {
                        return element;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualValue}'`);
            },
            toString: function () {
                return `have attribute '${attributeName}' with exact value '${attributeValue}'`;
            }
        });
    }
    Conditions.elementHasAttributeWithExactValue = elementHasAttributeWithExactValue;
    function elementHasClass(cssClass) {
        return new elementCondition_1.ElementCondition({
            matches: async function (element) {
                let actualCssClass;
                try {
                    actualCssClass = await element.attribute('class');
                    if (actualCssClass.split(' ').includes(String(cssClass))) {
                        return element;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualCssClass}'`);
            },
            toString: function () {
                return `have css class '${cssClass}'`;
            }
        });
    }
    Conditions.elementHasClass = elementHasClass;
    function collectionHasSize(size) {
        return new collectionCondition_1.CollectionCondition({
            matches: async function (collection) {
                let actualCollectionSize;
                try {
                    actualCollectionSize = await collection.size();
                    if (size === actualCollectionSize) {
                        return collection;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualCollectionSize}'`);
            },
            toString: function () {
                return `have size '${size}'`;
            }
        });
    }
    Conditions.collectionHasSize = collectionHasSize;
    function collectionHasSizeMoreThan(size) {
        return new collectionCondition_1.CollectionCondition({
            matches: async function (collection) {
                let actualCollectionSize;
                try {
                    actualCollectionSize = await collection.size();
                    if (size < actualCollectionSize) {
                        return collection;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualCollectionSize}'`);
            },
            toString: function () {
                return `have size more than '${size}'`;
            }
        });
    }
    Conditions.collectionHasSizeMoreThan = collectionHasSizeMoreThan;
    function collectionHasTexts(texts) {
        return new collectionCondition_1.CollectionCondition({
            matches: async function (collection) {
                let actualTexts = [];
                try {
                    const actualElements = await collection.getWebElements();
                    actualTexts = await Promise.all(actualElements.map(async (webElement) => await webElement.getText()));
                    if (texts.length !== actualTexts.length) {
                        throw new Error();
                    }
                    for (let i = 0; i < texts.length; i++) {
                        if (!actualTexts[i].includes(String(texts[i]))) {
                            throw new Error();
                        }
                    }
                    return collection;
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualTexts}'`);
            },
            toString: function () {
                return `have texts '${texts}'`;
            }
        });
    }
    Conditions.collectionHasTexts = collectionHasTexts;
    function collectionHasExactTexts(texts) {
        return new collectionCondition_1.CollectionCondition({
            matches: async function (collection) {
                let actualTexts = [];
                try {
                    const actualElements = await collection.getWebElements();
                    actualTexts = await Promise.all(actualElements.map(async (webElement) => await webElement.getText()));
                    if (actualTexts.length != texts.length) {
                        throw new Error();
                    }
                    for (let i = 0; i < texts.length; i++) {
                        if (actualTexts[i] !== String(texts[i])) {
                            throw new Error();
                        }
                    }
                    return collection;
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualTexts}'`);
            },
            toString: function () {
                return `have exact texts '${texts}'`;
            }
        });
    }
    Conditions.collectionHasExactTexts = collectionHasExactTexts;
    function browserUrlContains(url) {
        return new browserCondition_1.BrowserCondition({
            matches: async (browser) => {
                let actualUrl;
                try {
                    actualUrl = await browser.getCurrentUrl();
                    if (actualUrl.includes(url)) {
                        return browser;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was '${actualUrl}'`);
            },
            toString: function () {
                return `have url '${url}'`;
            }
        });
    }
    Conditions.browserUrlContains = browserUrlContains;
    function browserTabsHaveSize(size) {
        return new browserCondition_1.BrowserCondition({
            matches: async (browser) => {
                let tabs = [];
                try {
                    tabs = await browser.getAllWindowHandles();
                    if (tabs.length === size) {
                        return browser;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was ${tabs.length}`);
            },
            toString: function () {
                return `have tabs size '${size}'`;
            }
        });
    }
    Conditions.browserTabsHaveSize = browserTabsHaveSize;
    function browserTabsHaveSizeGreaterThan(size) {
        return new browserCondition_1.BrowserCondition({
            matches: async (browser) => {
                let tabs = [];
                try {
                    tabs = await browser.getAllWindowHandles();
                    if (tabs.length > size) {
                        return browser;
                    }
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${this.toString()}, but was ${tabs.length}`);
            },
            toString: function () {
                return `have tabs size greater than '${size}'`;
            }
        });
    }
    Conditions.browserTabsHaveSizeGreaterThan = browserTabsHaveSizeGreaterThan;
})(Conditions = exports.Conditions || (exports.Conditions = {}));
//# sourceMappingURL=conditions.js.map