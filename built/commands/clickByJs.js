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
class ClickByJs {
    static getClickOnElementWithOffsetScript(offsetX, offsetY) {
        return `arguments[0].dispatchEvent(new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true,
            'clientX': arguments[0].getClientRects()[0].left + ${offsetX},
            'clientY': arguments[0].getClientRects()[0].top + ${offsetY}
        }))`;
    }
    async perform(element, ...args) {
        const webelement = await element.getWebElement();
        /* tslint:disable:no-string-literal */
        const driver = element['driver'];
        /* tslint:enable:no-string-literal */
        await driver.executeScript(ClickByJs.getClickOnElementWithOffsetScript(0, 0), webelement);
    }
}
exports.ClickByJs = ClickByJs;
//# sourceMappingURL=clickByJs.js.map