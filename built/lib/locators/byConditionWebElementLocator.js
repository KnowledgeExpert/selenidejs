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
const queries_1 = require("../queries");
class ElementByConditionWebElementLocator {
    constructor(condition, collection) {
        this.condition = condition;
        this.collection = collection;
        this.condition = condition;
        this.collection = collection;
    }
    async find() {
        const arrayOfCachedElements = await this.collection.getAsCashedArray();
        for (const element of arrayOfCachedElements) {
            if (await element.matching(this.condition)) {
                return element.getWebElement();
            }
        }
        const outerHTMLs = [];
        for (const element of arrayOfCachedElements) {
            outerHTMLs.push(await queries_1.query.outerHtml(element)); // todo: can it fail with "stale element error"?
        }
        throw new Error(`Cannot find element by condition «${this.condition}» ` +
            `from webelements collection:\n[${outerHTMLs}]`);
    }
    toString() {
        return `${this.collection.toString()}.elementBy(${this.condition})`;
    }
}
exports.ElementByConditionWebElementLocator = ElementByConditionWebElementLocator;
//# sourceMappingURL=byConditionWebElementLocator.js.map