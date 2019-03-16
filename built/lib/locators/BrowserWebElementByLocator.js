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
class BrowserWebElementByLocator {
    constructor(by, browser) {
        this.by = by;
        this.browser = browser;
        this.by = by;
        this.browser = browser;
    }
    async find() {
        return this.browser.driver.findElement(this.by);
    }
    toString() {
        return `${this.browser}.element(${this.by})`;
    }
}
exports.BrowserWebElementByLocator = BrowserWebElementByLocator;
//# sourceMappingURL=BrowserWebElementByLocator.js.map