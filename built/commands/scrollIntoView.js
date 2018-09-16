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
class ScrollIntoView {
    async perform(element, ...args) {
        const webelement = await element.getWebElement();
        /* tslint:disable:no-string-literal */
        const driver = element['driver'];
        /* tslint:enable:no-string-literal */
        await driver.executeScript('arguments[0].scrollIntoView(true);', webelement);
    }
}
exports.ScrollIntoView = ScrollIntoView;
//# sourceMappingURL=scrollIntoView.js.map