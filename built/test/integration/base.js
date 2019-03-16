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
/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */
const lib_1 = require("../../lib");
const testUtils_1 = require("../utils/testUtils");
const gherkin_1 = require("../utils/gherkin");
const selenium_webdriver_1 = require("selenium-webdriver");
var data;
(function (data) {
    var timeouts;
    (function (timeouts) {
        timeouts.byDefault = 750;
        timeouts.step = 250;
        timeouts.smallest = timeouts.step;
        timeouts.smallerThanDefault = timeouts.byDefault - timeouts.step;
        timeouts.biggerThanDefault = timeouts.byDefault + timeouts.step;
    })(timeouts = data.timeouts || (data.timeouts = {}));
})(data = exports.data || (exports.data = {}));
function webelement(cssSelector) {
    return exports.driver.findElement(selenium_webdriver_1.By.css(cssSelector));
}
exports.webelement = webelement;
function textOf(cssSelector) {
    return webelement(cssSelector).then(it => it.getText());
}
exports.textOf = textOf;
function valueOf(cssSelector) {
    return webelement(cssSelector).then(it => it.getAttribute('value'));
}
exports.valueOf = valueOf;
function isAbsentInDom(cssSelector) {
    return exports.driver.findElements(selenium_webdriver_1.By.css(cssSelector)).then(it => it.length === 0);
}
exports.isAbsentInDom = isAbsentInDom;
function webelements(cssSelector) {
    return exports.driver.findElements(selenium_webdriver_1.By.css(cssSelector));
}
exports.webelements = webelements;
beforeAll(async () => {
    exports.driver = testUtils_1.TestUtils.buildWebDriver();
    exports.browser = lib_1.Browser
        .drivedBy(exports.driver)
        .timeout(data.timeouts.byDefault)
        .baseUrl(testUtils_1.TestUtils.resourcesUrl())
        .build();
    exports.GIVEN = new gherkin_1.Gherkin(exports.browser);
    exports.WHEN = exports.GIVEN;
    testUtils_1.TestUtils.startServer();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});
afterAll(async () => {
    await exports.browser.quit();
    testUtils_1.TestUtils.shutdownServer();
});
//# sourceMappingURL=base.js.map