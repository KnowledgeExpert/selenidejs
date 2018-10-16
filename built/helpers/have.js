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
const conditions_1 = require("../conditions");
var have;
(function (have) {
    have.exactText = (value) => conditions_1.Conditions.exactText(value);
    have.text = (value) => conditions_1.Conditions.text(value);
    have.attribute = (attributeName, attributeValue) => {
        return attributeValue === undefined
            ? conditions_1.Conditions.attribute(attributeName)
            : conditions_1.Conditions.atributeWithValue(attributeName, attributeValue);
    };
    have.exactAttribute = (attributeName, attributeValue) => {
        return conditions_1.Conditions.attributeWithExactValue(attributeName, attributeValue);
    };
    have.value = (value) => have.attribute('value', value);
    have.cssClass = (cssClass) => conditions_1.Conditions.cssClass(cssClass);
    have.size = (size) => conditions_1.Conditions.size(size);
    have.sizeGreaterThan = (size) => conditions_1.Conditions.sizeGreaterThan(size);
    have.texts = (...texts) => conditions_1.Conditions.texts(...texts);
    have.exactTexts = (...texts) => conditions_1.Conditions.exactTexts(...texts);
    have.url = (urlPart) => conditions_1.Conditions.url(urlPart);
    have.urlPart = (urlPart) => conditions_1.Conditions.urlPart(urlPart);
    have.tabsSize = (size) => conditions_1.Conditions.tabsSize(size);
    have.tabsSizeGreaterThan = (size) => conditions_1.Conditions.tabsSizeGreaterThan(size);
})(have = exports.have || (exports.have = {}));
//# sourceMappingURL=have.js.map