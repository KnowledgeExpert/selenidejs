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
class FilteredByConditionWebElementsLocator {
    constructor(condition, collection) {
        this.condition = condition;
        this.collection = collection;
        this.condition = condition;
        this.collection = collection;
    }
    async find() {
        const arrayOfCachedElements = await this.collection.getAsCashedArray();
        const filtered = [];
        for (const element of arrayOfCachedElements) {
            if (await element.matching(this.condition)) {
                filtered.push(await element.getWebElement());
            }
        }
        return filtered;
        // todo: why the following implementation does not work? o_O
        // const filtered = arrayOfCachedElements.filter(async element => element.matching(this.condition));
        // const filtered = await Promise.all(
        //     arrayOfCachedElements.filter(element => element.matching(this.condition))
        // );
        // return Promise.all(filtered.map(element => element.getWebElement()));
    }
    toString() {
        return `${this.collection.toString()}.filteredBy(${this.condition.toString()})`;
    }
}
exports.FilteredByConditionWebElementsLocator = FilteredByConditionWebElementsLocator;
//# sourceMappingURL=filteredByConditionWebElementsLocator.js.map