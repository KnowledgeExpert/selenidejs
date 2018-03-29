"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditions_1 = require("../conditions");
var have;
(function (have) {
    function visibleElement(locator) {
        return conditions_1.Conditions.element.visibleElement(locator);
    }
    have.visibleElement = visibleElement;
    function exactText(value) {
        return conditions_1.Conditions.element.hasExactText(value);
    }
    have.exactText = exactText;
    function text(value) {
        return conditions_1.Conditions.element.hasText(value);
    }
    have.text = text;
    function attribute(attributeName, attributeValue) {
        return attributeValue === undefined
            ? conditions_1.Conditions.element.hasAttribute(attributeName)
            : conditions_1.Conditions.element.hasAttributeWithValue(attributeName, attributeValue);
    }
    have.attribute = attribute;
    function exactAttribute(attributeName, attributeValue) {
        return attributeValue === undefined
            ? conditions_1.Conditions.element.hasAttribute(attributeName)
            : conditions_1.Conditions.element.hasAttributeWithExactValue(attributeName, attributeValue);
    }
    have.exactAttribute = exactAttribute;
    function value(value) {
        return attribute("value", value);
    }
    have.value = value;
    function cssClass(cssClass) {
        return conditions_1.Conditions.element.hasClass(cssClass);
    }
    have.cssClass = cssClass;
    function size(size) {
        return conditions_1.Conditions.collection.hasSize(size);
    }
    have.size = size;
    function texts(...texts) {
        return conditions_1.Conditions.collection.hasExactTexts(texts);
    }
    have.texts = texts;
    function exactTexts(...texts) {
        return conditions_1.Conditions.collection.hasExactTexts(texts);
    }
    have.exactTexts = exactTexts;
    function tabsSizeGreaterThan(size) {
        return conditions_1.Conditions.driver.tabsHaveSizeGreaterThan(size);
    }
    have.tabsSizeGreaterThan = tabsSizeGreaterThan;
})(have = exports.have || (exports.have = {}));
//# sourceMappingURL=have.js.map