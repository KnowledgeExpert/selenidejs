"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const with_1 = require("../../locators/with");
class ByExtendedWebElementLocator {
    constructor(extendedSelector, searchContext) {
        this.extendedSelector = extendedSelector;
        this.searchContext = searchContext;
    }
    async find() {
        const context = this.searchContext ? (await this.searchContext.getWebElement()) : protractor_1.browser;
        if (this.cachedBy) {
            return (await context.findElements(this.cachedBy))[0];
        }
        let webelement;
        webelement = await this.returnFirst(context, with_1.With.id(this.extendedSelector));
        if (webelement)
            return webelement;
        webelement = await this.returnFirst(context, with_1.With.name(this.extendedSelector));
        if (webelement)
            return webelement;
        webelement = await this.returnFirst(context, with_1.With.className(this.extendedSelector));
        if (webelement)
            return webelement;
        webelement = await this.returnFirst(context, with_1.With.exactText(this.extendedSelector));
        if (webelement)
            return webelement;
        throw new Error(`No elements found using ${this.toString()}`);
    }
    async returnFirst(context, by) {
        const webelements = await context.findElements(by);
        if (webelements.length !== 0) {
            this.cachedBy = by;
        }
        return webelements[0];
    }
    toString() {
        return `${this.searchContext ? this.searchContext.toString() : 'browser'}.find(${this.cachedBy ? this.cachedBy : `extended selector: '${this.extendedSelector}'`})`;
    }
}
exports.ByExtendedWebElementLocator = ByExtendedWebElementLocator;
//# sourceMappingURL=byExtendedWebElementLocator.js.map