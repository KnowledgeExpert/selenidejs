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
const utils_1 = require("../../utils");
class ByWebElementLocator {
    constructor(by, searchContext) {
        this.by = by;
        this.searchContext = searchContext;
    }
    async find() {
        const context = utils_1.Utils.isDriver(this.searchContext)
            ? this.searchContext.webdriver
            : await this.searchContext.getWebElement();
        const elements = await context.findElements(this.by);
        if (elements.length === 0) {
            throw new Error(`No elements found using ${this.toString()}`);
        }
        return elements[0];
    }
    toString() {
        return `${utils_1.Utils.isDriver(this.searchContext) ? 'browser' : this.searchContext.toString()}.find(${this.by})`;
    }
}
exports.ByWebElementLocator = ByWebElementLocator;
//# sourceMappingURL=byWebElementLocator.js.map