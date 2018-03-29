"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementCondition_1 = require("./elementCondition");
const browserCondition_1 = require("./browserCondition");
const conditionDoesNotMatchError_1 = require("../errors/conditionDoesNotMatchError");
const collectionCondition_1 = require("./collectionCondition");
const be_1 = require("./helpers/be");
var Conditions;
(function (Conditions) {
    let element;
    (function (element_1) {
        function visibleElement(locator) {
            return new elementCondition_1.ElementCondition({
                matches: async function (element) {
                    try {
                        await element.element(locator).should(be_1.be.visible(), 0);
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
        element_1.visibleElement = visibleElement;
        function selected() {
            return hasAttribute("selected");
        }
        element_1.selected = selected;
        function absent() {
            return new elementCondition_1.ElementCondition({
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
                    return "be absent";
                }
            });
        }
        element_1.absent = absent;
        function present() {
            return new elementCondition_1.ElementCondition({
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
                    return "be present";
                }
            });
        }
        element_1.present = present;
        function visible() {
            return new elementCondition_1.ElementCondition({
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
                    return "be visible";
                }
            });
        }
        element_1.visible = visible;
        function hidden() {
            return new elementCondition_1.ElementCondition({
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
                    return "be hidden";
                }
            });
        }
        element_1.hidden = hidden;
        function hasText(text) {
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
        element_1.hasText = hasText;
        function hasExactText(text) {
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
        element_1.hasExactText = hasExactText;
        function hasAttribute(attributeName) {
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
        element_1.hasAttribute = hasAttribute;
        function hasAttributeWithValue(attributeName, attributeValue) {
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
        element_1.hasAttributeWithValue = hasAttributeWithValue;
        function hasAttributeWithExactValue(attributeName, attributeValue) {
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
        element_1.hasAttributeWithExactValue = hasAttributeWithExactValue;
        function hasClass(cssClass) {
            return new elementCondition_1.ElementCondition({
                matches: async function (element) {
                    let actualCssClass;
                    try {
                        actualCssClass = await element.attribute("class");
                        if (actualCssClass.split(" ").includes(String(cssClass))) {
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
        element_1.hasClass = hasClass;
    })(element = Conditions.element || (Conditions.element = {}));
    let collection;
    (function (collection_1) {
        function hasSize(size) {
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
        collection_1.hasSize = hasSize;
        function hasSizeMoreThan(size) {
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
        collection_1.hasSizeMoreThan = hasSizeMoreThan;
        function hasTexts(texts) {
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
        collection_1.hasTexts = hasTexts;
        function hasExactTexts(texts) {
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
        collection_1.hasExactTexts = hasExactTexts;
    })(collection = Conditions.collection || (Conditions.collection = {}));
    let driver;
    (function (driver) {
        function urlContains(url) {
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
        driver.urlContains = urlContains;
        function tabsHaveSizeGreaterThan(size) {
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
        driver.tabsHaveSizeGreaterThan = tabsHaveSizeGreaterThan;
    })(driver = Conditions.driver || (Conditions.driver = {}));
})(Conditions = exports.Conditions || (exports.Conditions = {}));
//# sourceMappingURL=conditions.js.map