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

import {ProtractorBrowser} from 'protractor';
import {Element} from '../base-entities/element';
import {ElementCondition} from './elementCondition';
import {BrowserCondition} from './browserCondition';
import {ConditionDoesNotMatchError} from '../errors/conditionDoesNotMatchError';
import {CollectionCondition} from './collectionCondition';
import {Collection} from '../base-entities/collection';
import {be} from './helpers/be';
import {By} from 'selenium-webdriver';


export namespace Conditions {

    export function visibleElement(locator: By): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                try {
                    await element.element(locator).should(be.visible, 0);
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(this.toString());
            },
            toString: function () {
                return `have visible element located ${locator.toString()}`;
            }
        });
    }

    export const elementIsSelected: ElementCondition = elementHasAttribute('elementIsSelected');

    export const elementIsAbsent: ElementCondition = new ElementCondition({
        matches: async function (element: Element) {
            try {
                await element.getWebElement();
            } catch (error) {
                return element;
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be absent';
        }
    });

    export const elementIsPresent: ElementCondition = new ElementCondition({
        matches: async function (element: Element) {
            try {
                await element.getWebElement();
                return element;
            } catch (ignored) {
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be present';
        }
    });

    export const elementIsVisible: ElementCondition = new ElementCondition({
        matches: async function (element: Element) {
            try {
                if (await element.isVisible()) {
                    return element;
                }
            } catch (ignored) {
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be visible';
        }
    });

    export const elementIsHidden: ElementCondition = new ElementCondition({
        matches: async function (element: Element) {
            try {
                if (!(await element.isVisible())) {
                    return element;
                }
            } catch (ignored) {
                return element;
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be hidden';
        }
    });

    export const elementHasEmptyText: ElementCondition = new ElementCondition({
        matches: async function (element: Element) {
            let actualText;
            try {
                let webelement = await element.getWebElement();
                actualText = await webelement.getText();
                if (actualText.length === 0) {
                    return element;
                }
            } catch (ignored) {
            }
            throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualText}'`);
        },
        toString: function () {
            return `be empty`;
        }
    });

    export function elementHasText(text: string | number): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                let actualText: string;
                try {
                    actualText = await (await element.getWebElement()).getText();
                    if (actualText.includes((String(text)))) {
                        return element;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualText}'`);
            },
            toString: function () {
                return `have text '${text}'`;
            }
        });
    }

    export function elementHasExactText(text: string | number): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                let actualText: string;
                try {
                    actualText = await (await element.getWebElement()).getText();
                    if (String(text) === actualText) {
                        return element;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualText}`);
            },
            toString: function () {
                return `have exact text '${text}'`;
            }
        });
    }

    export function elementHasAttribute(attributeName: string): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                try {
                    if (null !== await element.attribute(attributeName)) {
                        return element;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`Element ${element.toString()} should have attribute '${attributeName}'`);
            },
            toString: function () {
                return `have attribute '${attributeName}'`;
            }
        });
    }

    export function elementHasAttributeWithValue(attributeName: string, attributeValue: string | number): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                let actualValue;
                try {
                    actualValue = await element.attribute(attributeName);
                    if (actualValue.includes(attributeValue)) {
                        return element;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualValue}'`);
            },
            toString: function () {
                return `have attribute '${attributeName}' with value '${attributeValue}'`;
            }
        });
    }

    export function elementHasAttributeWithExactValue(attributeName: string, attributeValue: string | number): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                let actualValue;
                try {
                    actualValue = await element.attribute(attributeName);
                    if (String(attributeValue) === actualValue) {
                        return element;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualValue}'`);
            },
            toString: function () {
                return `have attribute '${attributeName}' with exact value '${attributeValue}'`;
            }
        });
    }

    export function elementHasClass(cssClass: string | number): ElementCondition {
        return new ElementCondition({
            matches: async function (element: Element) {
                let actualCssClass: string;
                try {
                    actualCssClass = await element.attribute('class');
                    if (actualCssClass.split(' ').includes(String(cssClass))) {
                        return element;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualCssClass}'`);
            },
            toString: function () {
                return `have css class '${cssClass}'`;
            }
        });
    }

    export function collectionHasSize(size: number): CollectionCondition {
        return new CollectionCondition({
            matches: async function (collection: Collection) {
                let actualCollectionSize: number;
                try {
                    actualCollectionSize = await collection.size();
                    if (size === actualCollectionSize) {
                        return collection;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualCollectionSize}'`);
            },
            toString: function () {
                return `have size '${size}'`;
            }
        });
    }

    export function collectionHasSizeMoreThan(size: number): CollectionCondition {
        return new CollectionCondition({
            matches: async function (collection: Collection) {
                let actualCollectionSize: number;
                try {
                    actualCollectionSize = await collection.size();
                    if (size < actualCollectionSize) {
                        return collection;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualCollectionSize}'`);
            },
            toString: function () {
                return `have size more than '${size}'`;
            }
        });
    }

    export function collectionHasTexts(texts: string[] | number[]): CollectionCondition {
        return new CollectionCondition({
            matches: async function (collection: Collection) {
                let actualTexts: string[] = [];
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
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualTexts}'`);
            },
            toString: function () {
                return `have texts '${texts}'`;
            }
        });
    }

    export function collectionHasExactTexts(texts: string[] | number[]): CollectionCondition {
        return new CollectionCondition({
            matches: async function (collection: Collection) {
                let actualTexts: string[] = [];
                try {
                    const actualElements = await collection.getWebElements();
                    actualTexts = await Promise.all(actualElements.map(async (webElement) => await webElement.getText()));

                    if (actualTexts.length != texts.length) throw new Error();
                    for (let i = 0; i < texts.length; i++) {
                        if (actualTexts[i] !== String(texts[i])) {
                            throw new Error();
                        }
                    }
                    return collection;
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualTexts}'`);
            },
            toString: function () {
                return `have exact texts '${texts}'`;
            }
        });
    }

    export function collectionHasExactTextsInAnyOrder(texts: string[] | number[]): CollectionCondition {
        return new CollectionCondition({
            matches: async function (collection: Collection) {
                let actualTexts: string[] = [];
                try {
                    const actualElements = await collection.getWebElements();
                    actualTexts = await Promise.all(actualElements.map(async (webElement) => await webElement.getText()));

                    if (actualTexts.length != texts.length) {
                        throw new Error();
                    }

                    for (let expected of texts) {
                        let haveExpected = false;
                        for (let i = 0; i < texts.length; i++) {
                            if (actualTexts[i] === String(expected)) {
                                haveExpected = true;
                                break;
                            }
                        }
                        if (!haveExpected) {
                            throw new Error();
                        }
                    }
                    return collection;
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualTexts}'`);
            },
            toString: function () {
                return `have exact texts in any order'${texts}'`;
            }
        });
    }

    export function browserUrlContains(url: string): BrowserCondition {
        return new BrowserCondition({
            matches: async (browser: ProtractorBrowser) => {
                let actualUrl;
                try {
                    actualUrl = await browser.getCurrentUrl();
                    if (actualUrl.includes(url)) {
                        return browser;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualUrl}'`);
            },
            toString: function () {
                return `have url '${url}'`;
            }
        });
    }

    export function browserTabsHaveSize(size: number): BrowserCondition {
        return new BrowserCondition({
            matches: async (browser: ProtractorBrowser) => {
                let tabs = [];
                try {
                    tabs = await browser.getAllWindowHandles();
                    if (tabs.length === size) {
                        return browser;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was ${tabs.length}`);
            },
            toString: function () {
                return `have tabs size '${size}'`;
            }
        });
    }

    export function browserTabsHaveSizeGreaterThan(size: number): BrowserCondition {
        return new BrowserCondition({
            matches: async (browser: ProtractorBrowser) => {
                let tabs = [];
                try {
                    tabs = await browser.getAllWindowHandles();
                    if (tabs.length > size) {
                        return browser;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was ${tabs.length}`);
            },
            toString: function () {
                return `have tabs size greater than '${size}'`;
            }
        });
    }

    export const browserHasAlert: BrowserCondition = new BrowserCondition({
            matches: async function (browser: ProtractorBrowser) {
                try {
                    await browser.switchTo().alert();
                    return browser;
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(this.toString());
            },
            toString: function () {
                return `has alert`;
            }
        });

    export function browserHasAlertWithText(text: string | number): BrowserCondition {
        return new BrowserCondition({
            matches: async (browser: ProtractorBrowser) => {
                let actualText;
                try {
                    actualText = await browser.switchTo().alert().getText();
                    if (String(text) === actualText) {
                        return browser;
                    }
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualText}'`);
            },
            toString: function () {
                return `have alert text '${text}'`;
            }
        });
    }
}
