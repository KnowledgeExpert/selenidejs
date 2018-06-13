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
        return `[@${attrName}='${attrValue}']`;
    }
    xFiltered.byAttributeValue = byAttributeValue;
    function byId(id) {
        return byAttributeValue('id', id);
    }
    xFiltered.byId = byId;
    function byClass(value) {
        return byAttributeValue('class', value);
    }
    xFiltered.byClass = byClass;
    function byTitle(title) {
        return byAttributeValue('title', title);
    }
    xFiltered.byTitle = byTitle;
    function byPartialId(...idParts) {
        return '[' + idParts.map(idPart => `contains(@id, '${idPart}')`).join(' and ') + ']';
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
        return '[' +
            cssClasses.map(cssClass => `contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')`)
                .join(' or ') +
            ']';
    }
    xFiltered.byOneFromCssClasses = byOneFromCssClasses;
})(xFiltered = exports.xFiltered || (exports.xFiltered = {}));
//# sourceMappingURL=xFiltered.js.map