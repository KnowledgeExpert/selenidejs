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
const configuration_1 = require("./configuration");
const element_1 = require("./element");
const byIndexWebElementLocator_1 = require("./locators/byIndexWebElementLocator");
const cashedWebElementLocator_1 = require("./locators/cashedWebElementLocator");
const filteredByConditionWebElementsLocator_1 = require("./locators/filteredByConditionWebElementsLocator");
const wait_1 = require("./wait");
const entity_1 = require("./entity");
class Collection extends entity_1.Entity {
    // private readonly wait: Wait<Collection>;
    constructor(locator, configuration) {
        super(configuration.timeout, configuration.onFailureHooks);
        this.locator = locator;
        this.configuration = configuration;
        this.locator = locator;
        this.configuration = configuration;
        // this.wait = new Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
    }
    configuredWith(custom) {
        return new Collection(this.locator, new configuration_1.Configuration(Object.assign({}, this.configuration, custom)));
    }
    // todo: should not we move it to queries?, or rename to asCashedArray() ?
    async getAsCashedArray() {
        return (await this.getWebElements())
            .map((it, index) => new element_1.Element(new cashedWebElementLocator_1.CashedWebElementLocator(it, `${this}[${index}]`), this.configuration));
    }
    elementAt(index) {
        return new element_1.Element(new byIndexWebElementLocator_1.ByIndexWebElementLocator(index, this), this.configuration);
    }
    /*
     * todo: should we implement collection.first() as getter? i.e. collection.first ?
     * here we should think, because in future we might want to implement method to return
     * a collection subset, i.e. "first n elements"...
     * then we might need first(count: number?)...
     * yet we can name it as take(count: number)
     * then no problem with first as getter... need to think... but probably define it before
     * release 1.0
     */
    first() {
        return this.elementAt(0);
    }
    filteredBy(...conditions) {
        if (conditions.length === 0) {
            return this; // todo: consider throwing error
        }
        const condition = conditions.length > 1 ?
            wait_1.Condition.and(...conditions) :
            conditions[0];
        return new Collection(new filteredByConditionWebElementsLocator_1.FilteredByConditionWebElementsLocator(condition, this), this.configuration);
    }
    elementBy(...conditions) {
        if (conditions.length === 0) {
            return this.first(); // todo: consider throwing error
        }
        const condition = conditions.length > 1 ?
            wait_1.Condition.and(...conditions) :
            conditions[0];
        return new Collection(new filteredByConditionWebElementsLocator_1.FilteredByConditionWebElementsLocator(condition, this), this.configuration)
            .elementAt(0); // todo: implement through separate ByFind...Locator
    }
    async getWebElements() {
        return this.locator.find();
    }
    toString() {
        return this.locator.toString();
    }
}
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map