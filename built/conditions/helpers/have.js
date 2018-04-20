"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditions_1 = require("../conditions");
var have;
(function (have) {
    function visibleElement(locator) {
        return conditions_1.Conditions.visibleElement(locator);
    }
    have.visibleElement = visibleElement;
    function exactText(value) {
        return conditions_1.Conditions.elementHasExactText(value);
    }
    have.exactText = exactText;
    function text(value) {
        return conditions_1.Conditions.elementHasText(value);
    }
    have.text = text;
    function attribute(attributeName, attributeValue) {
        return attributeValue === undefined
            ? conditions_1.Conditions.elementHasAttribute(attributeName)
            : conditions_1.Conditions.elementHasAttributeWithValue(attributeName, attributeValue);
    }
    have.attribute = attribute;
    function exactAttribute(attributeName, attributeValue) {
        return attributeValue === undefined
            ? conditions_1.Conditions.elementHasAttribute(attributeName)
            : conditions_1.Conditions.elementHasAttributeWithExactValue(attributeName, attributeValue);
    }
    have.exactAttribute = exactAttribute;
    function value(value) {
        return attribute("value", value);
    }
    have.value = value;
    function cssClass(cssClass) {
        return conditions_1.Conditions.elementHasClass(cssClass);
    }
    have.cssClass = cssClass;
    function size(size) {
        return conditions_1.Conditions.collectionHasSize(size);
    }
    have.size = size;
    function texts(...texts) {
        return conditions_1.Conditions.collectionHasExactTexts(texts);
    }
    have.texts = texts;
    function exactTexts(...texts) {
        return conditions_1.Conditions.collectionHasExactTexts(texts);
    }
    have.exactTexts = exactTexts;
    function tabsSize(size) {
        return conditions_1.Conditions.browserTabsHaveSize(size);
    }
    have.tabsSize = tabsSize;
    function tabsSizeGreaterThan(size) {
        return conditions_1.Conditions.browserTabsHaveSizeGreaterThan(size);
    }
    have.tabsSizeGreaterThan = tabsSizeGreaterThan;
})(have = exports.have || (exports.have = {}));
//# sourceMappingURL=have.js.map