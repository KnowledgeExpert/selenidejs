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
// todo: command.element.click() vs element.command.click() vs Element.command.click
/* examples of options:
 *
 * await browser.element('#submit').should(be.enabled).then(perform.click);
 * await browser.element('#submit').should(be.enabled).then(Element.command.click);
 * await browser.element('#submit').should(be.enabled).then(command.element.click);
 * await browser.element('#submit').should(be.enabled).then(perform.element.click);
 * await browser.element('#textfield').should(be.enabled).then(query.element.value);
 *
 * shorter is kind of more concise, but more magic like, more "too much of things in one"
 * longer is more verbose, KISS, less magic in implementation, yet bulky, but won't it be used
 *   only rarely nevertheless?
 *
 * what if in core we provide command.element|browser|collection.* & query. ...
 * and in support/ provide perform and take (or get) aliases ?
 */
var command;
(function (command) {
    // todo: should we use here some automatic element.command to command(element) transformation?
    //   something like curryfy? :)
    let element;
    (function (element_1) {
        element_1.executeScript = (scriptOnThisWebElement, ...additionalArgs) => (element) => element.executeScript(scriptOnThisWebElement, additionalArgs);
        element_1.click = (element) => element.click();
        element_1.clickByJs = (xOffset = 0, yOffset = 0) => (element) => element.clickByJs(xOffset, yOffset);
        element_1.doubleClick = (element) => element.doubleClick();
        element_1.contextClick = (element) => element.contextClick();
        element_1.hover = (element) => element.hover();
        element_1.scrollIntoView = (element) => element.scrollIntoView();
        element_1.sendKeys = (value) => (element) => element.sendKeys(value);
        element_1.setValue = (value) => (element) => element.setValue(value);
        element_1.setValueByJs = (value) => (element) => element.setValueByJs(value);
        element_1.pressEnter = (element) => element.pressEnter();
        element_1.pressTab = (element) => element.pressTab();
        element_1.pressEscape = (element) => element.pressEscape();
    })(element = command.element || (command.element = {}));
})(command = exports.command || (exports.command = {}));
//# sourceMappingURL=commands.js.map