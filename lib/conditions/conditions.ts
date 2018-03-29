import {ProtractorBrowser} from 'protractor';
import {Element} from "../base-entities/element";
import {ElementCondition} from "./elementCondition";
import {BrowserCondition} from "./browserCondition";
import {ConditionDoesNotMatchError} from "../errors/conditionDoesNotMatchError";
import {CollectionCondition} from "./collectionCondition";
import {Collection} from "../base-entities/collection";
import {be} from "./helpers/be";
import {By} from "selenium-webdriver";


export namespace Conditions {

    export namespace element {

        export function visibleElement(locator: By): ElementCondition {
            return new ElementCondition({
                matches: async function (element: Element) {
                    try {
                        await element.element(locator).should(be.visible(), 0);
                    } catch (ignored) {
                    }
                    throw new ConditionDoesNotMatchError(this.toString());
                },
                toString: function () {
                    return `have visible element located ${locator.toString()}`;
                }
            });
        }

        export function selected(): ElementCondition {
            return hasAttribute("selected");
        }

        export function absent(): ElementCondition {
            return new ElementCondition({
                matches: async function (element: Element) {
                    try {
                        await element.getWebElement();
                    } catch (error) {
                        return element;
                    }
                    throw new ConditionDoesNotMatchError(this.toString());
                },
                toString: function () {
                    return "be absent";
                }
            });
        }

        export function present(): ElementCondition {
            return new ElementCondition({
                matches: async function (element: Element) {
                    try {
                        await element.getWebElement();
                        return element;
                    } catch (ignored) {
                    }
                    throw new ConditionDoesNotMatchError(this.toString());
                },
                toString: function () {
                    return "be present";
                }
            });
        }

        export function visible(): ElementCondition {
            return new ElementCondition({
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
                    return "be visible";
                }
            });
        }

        export function hidden(): ElementCondition {
            return new ElementCondition({
                matches: async function (element: Element) {
                    try {
                        if (!(await element.isVisible())) {
                            return element;
                        }
                    } catch (ignored) {
                    }
                    throw new ConditionDoesNotMatchError(this.toString());
                },
                toString: function () {
                    return "be hidden";
                }
            });
        }

        export function hasText(text: string | number): ElementCondition {
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


        export function hasExactText(text: string | number): ElementCondition {
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

        export function hasAttribute(attributeName: string): ElementCondition {
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

        export function hasAttributeWithValue(attributeName: string, attributeValue: string | number): ElementCondition {
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

        export function hasAttributeWithExactValue(attributeName: string, attributeValue: string | number): ElementCondition {
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

        export function hasClass(cssClass: string | number): ElementCondition {
            return new ElementCondition({
                matches: async function (element: Element) {
                    let actualCssClass: string;
                    try {
                        actualCssClass = await element.attribute("class");
                        if (actualCssClass.split(" ").includes(String(cssClass))) {
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

    }

    export namespace collection {

        export function hasSize(size: number): CollectionCondition {
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

        export function hasSizeMoreThan(size: number): CollectionCondition {
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

        export function hasTexts(texts: string[] | number[]): CollectionCondition {
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

        export function hasExactTexts(texts: string[] | number[]): CollectionCondition {
            return new CollectionCondition({
                matches: async function (collection: Collection) {
                    let actualTexts: string[] = [];
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
                    } catch (ignored) {
                    }
                    throw new ConditionDoesNotMatchError(`${this.toString()}, but was '${actualTexts}'`);
                },
                toString: function () {
                    return `have exact texts '${texts}'`;
                }
            });
        }

    }

    export namespace driver {
        export function urlContains(url: string): BrowserCondition {
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

        export function tabsHaveSizeGreaterThan(size: number): BrowserCondition {
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
    }

}
