"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xFiltered;
(function (xFiltered) {
    function byText(text) {
        return `[contains(normalize-space(.), '${text}')]`;
    }
    xFiltered.byText = byText;
    function byCssClass(cssClass) {
        return `[contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')]`;
    }
    xFiltered.byCssClass = byCssClass;
    function exceptCssClass(cssClass) {
        return `[not(contains(concat(' ', normalize-space(@class), ' '), ' " + cssClass + " '))]`;
    }
    xFiltered.exceptCssClass = exceptCssClass;
    function byAttribute(attrName) {
        return `[@${attrName}]`;
    }
    xFiltered.byAttribute = byAttribute;
    function byAttributeValue(attrName, attrValue) {
        return `[@${attrName}="${attrValue}"]`;
    }
    xFiltered.byAttributeValue = byAttributeValue;
    function byId(id) {
        return byAttributeValue("id", id);
    }
    xFiltered.byId = byId;
    function byClass(value) {
        return byAttributeValue("class", value);
    }
    xFiltered.byClass = byClass;
    function byTitle(title) {
        return byAttributeValue("title", title);
    }
    xFiltered.byTitle = byTitle;
    function byPartialId(...idParts) {
        return "[" + idParts.map(idPart => `contains(@id, "${idPart}")`).join(" and ") + "]";
    }
    xFiltered.byPartialId = byPartialId;
    function byIndex(index) {
        return `[${index}]`;
    }
    xFiltered.byIndex = byIndex;
    function byVisible() {
        return `[contains(@style, 'display: block') or contains(@style, 'visibility: visible')]`;
    }
    xFiltered.byVisible = byVisible;
    function first() {
        return `[1]`;
    }
    xFiltered.first = first;
    function nth(index) {
        return `[${index}]`;
    }
    xFiltered.nth = nth;
    function byOneFromCssClasses(...cssClasses) {
        return "[" +
            cssClasses.map(cssClass => `contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')`)
                .join(" or ") +
            "]";
    }
    xFiltered.byOneFromCssClasses = byOneFromCssClasses;
})(xFiltered = exports.xFiltered || (exports.xFiltered = {}));
//# sourceMappingURL=xFiltered.js.map