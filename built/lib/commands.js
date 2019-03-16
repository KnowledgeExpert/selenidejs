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
const utils_1 = require("./utils");
var command;
(function (command) {
    // todo: how to call them through element.perform(???) ?
    /* internally we can do element.perform(command.js.click);
     * so far we do not export command.* in lib/index.ts ... should we?
     * so far user will have to do something like: element.perform(perform.js.click)
     * which will do "double-perform" i.e. perform(perform(click)) :'(
     *
     * should we actually add do method to Entity, that will be non-waiting version of perform+get
     * so everybody can just do:
     * element.do(perform.js.click)
     * element.do(get.someText)
     */
    let js;
    (function (js) {
        /* Element commands */
        js.clickWithOffset = (xOffset, yOffset) => utils_1.lambda(`click by js with offset - x: ${xOffset}, y: ${yOffset}`, async (element) => {
            await element.executeScript(`return (function(element) { element.dispatchEvent(new MouseEvent('click', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true,
                        'clientX': arguments[0].getClientRects()[0].left + ${xOffset},
                        'clientY': arguments[0].getClientRects()[0].top + ${yOffset}
                    }));})(arguments[0]);`);
        });
        js.click = utils_1.lambda('click by js', js.clickWithOffset(0, 0));
        js.setValue = (value) => utils_1.lambda(`set value by js: ${value}`, async (element) => {
            await element.executeScript(`return (function(element, text) {
                        var maxlength = element.getAttribute('maxlength') === null
                            ? -1
                            : parseInt(element.getAttribute('maxlength'));
                        element.value = maxlength === -1
                            ? text
                            : text.length <= maxlength
                                ? text
                                : text.substring(0, maxlength);
                        return null;
                    })(arguments[0], arguments[1]);`, String(value));
        });
        js.type = (keys) => utils_1.lambda(`type by js (append value): ${keys}`, async (element) => {
            await element.executeScript(`return (function(element, textToAppend) {
                        var text = element.getAttribute('value') + textToAppend
                        var maxlength = element.getAttribute('maxlength') === null
                            ? -1
                            : parseInt(element.getAttribute('maxlength'));
                        element.value = maxlength === -1
                            ? text
                            : text.length <= maxlength
                                ? text
                                : text.substring(0, maxlength);
                        return null;
                    })(arguments[0], arguments[1]);`, String(keys));
        });
        js.scrollIntoView = utils_1.lambda('scroll into view', async (element) => element.executeScript(// todo: is ensuring visibility covered here?
        'return (function(element) { element.scrollIntoView(true); })(arguments[0]);'));
    })(js = command.js || (command.js = {}));
})(command = exports.command || (exports.command = {}));
//# sourceMappingURL=commands.js.map