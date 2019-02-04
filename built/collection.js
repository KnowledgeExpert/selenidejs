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
const element_1 = require("./element");
const byIndexWebElementLocator_1 = require("./locators/byIndexWebElementLocator");
const cashedWebElementLocator_1 = require("./locators/cashedWebElementLocator");
const filteredByConditionWebElementsLocator_1 = require("./locators/filteredByConditionWebElementsLocator");
const wait_1 = require("./wait");
const queries_1 = require("./refactor/queries");
class Collection {
    constructor(locator, configuration) {
        this.locator = locator;
        this.configuration = configuration;
        this.locator = locator;
        this.configuration = configuration;
        this.wait = new wait_1.Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
    }
    async getAsCashedArray() {
        return (await this.getWebElements())
            .map((it, index) => new element_1.Element(new cashedWebElementLocator_1.CashedWebElementLocator(it, `${this}[${index}]`), this.configuration));
    }
    /* With Conditions */
    async should(condition, timeout = this.configuration.timeout) {
        this.wait.until(condition, timeout);
        return this;
    }
    async shouldNot(condition, timeout) {
        this.should(wait_1.Condition.not(condition), timeout);
        return this;
    }
    async waitUntil(condition, timeout = this.configuration.timeout) {
        return this.wait.until(condition, timeout);
    }
    async waitUntilNot(condition, timeout = this.configuration.timeout) {
        return this.wait.until(wait_1.Condition.not(condition), timeout);
    }
    async matches(condition) {
        return wait_1.Condition.asPredicate(condition)(this);
    }
    async matchesNot(condition) {
        return this.matches(wait_1.Condition.not(condition));
    }
    /* Others... */
    // todo: think on get(i+1) @s @li@s to [i] (is it even possible?)
    get(index) {
        return new element_1.Element(new byIndexWebElementLocator_1.ByIndexWebElementLocator(index, this), this.configuration);
    }
    first() {
        return this.get(0);
    }
    filterBy(condition) {
        return new Collection(new filteredByConditionWebElementsLocator_1.FilteredByConditionWebElementsLocator(condition, this), this.configuration);
    }
    findBy(condition) {
        return new Collection(new filteredByConditionWebElementsLocator_1.FilteredByConditionWebElementsLocator(condition, this), this.configuration)
            .get(0); // todo: implement through separate ByFind...Locator
    }
    // todo: do we need a count alias for size? or even count instead of size?
    /*
     * e.g. emails.size() sounds much more weird than emails.count() or emails.number()
     */
    async size() {
        return queries_1.query.collection.size(this);
    }
    // todo: do we need same get as element.get here for collection?
    async getWebElements() {
        return this.locator.find();
    }
    toString() {
        return this.locator.toString();
    }
}
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map