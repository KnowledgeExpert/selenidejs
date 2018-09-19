"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required By applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
var With;
(function (With) {
    const NORMALIZE_SPACE_XPATH = 'normalize-space(translate(string(.), "\t\n\r\u00a0", "    "))';
    function type(type) {
        return selenium_webdriver_1.By.xpath(`//*[@type = "${type}"]`);
    }
    With.type = type;
    function value(value) {
        return selenium_webdriver_1.By.xpath(`//*[@value = "${value}"]`);
    }
    With.value = value;
    /* tslint:disable:prefer-template */
    function partialId(...idParts) {
        return selenium_webdriver_1.By.xpath('//*[' + idParts.map(idPart => `contains(@id, "${idPart}")`).join(' and ') + ']');
    }
    With.partialId = partialId;
    /* tslint:enable:prefer-template */
    function text(text) {
        return selenium_webdriver_1.By.xpath(`//*/text()[contains(${NORMALIZE_SPACE_XPATH}, "${text}")]/parent::*`);
    }
    With.text = text;
    function exactText(text) {
        return selenium_webdriver_1.By.xpath(`//*/text()[${NORMALIZE_SPACE_XPATH} = "${text}"]/parent::*`);
    }
    With.exactText = exactText;
    function id(id) {
        return selenium_webdriver_1.By.id(id);
    }
    With.id = id;
    function name(name) {
        return selenium_webdriver_1.By.name(name);
    }
    With.name = name;
    function className(className) {
        return selenium_webdriver_1.By.className(className);
    }
    With.className = className;
    function xpath(xpath) {
        return selenium_webdriver_1.By.xpath(xpath);
    }
    With.xpath = xpath;
    function css(css) {
        return selenium_webdriver_1.By.css(css);
    }
    With.css = css;
    function attribute(attributeName, attributeValue) {
        return selenium_webdriver_1.By.xpath(`.//*[contains(@${attributeName}, "${attributeValue}")]`);
    }
    With.attribute = attribute;
    function exactAttribute(attributeName, attributeValue) {
        return selenium_webdriver_1.By.xpath(`.//*[@${attributeName} = "${attributeValue}"]`);
    }
    With.exactAttribute = exactAttribute;
})(With = exports.With || (exports.With = {}));
//# sourceMappingURL=with.js.map