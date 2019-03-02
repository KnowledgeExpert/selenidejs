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
const byConditionWebElementLocator_1 = require("./locators/byConditionWebElementLocator");
const slicedWebElementsLocator_1 = require("./locators/slicedWebElementsLocator");
class Collection extends entity_1.Entity {
    constructor(locator, configuration) {
        // readonly configuration: Configuration) {
        super(configuration);
        this.locator = locator;
        this.configuration = configuration;
        this.locator = locator;
    }
    with(customConfig) {
        return new Collection(this.locator, new configuration_1.Configuration(Object.assign({}, this.configuration, customConfig)));
    }
    // todo: should not we move it to queries?, or rename to asCashedArray() ?
    async getAsCashedArray() {
        return (await this.getWebElements())
            .map((it, index) => new element_1.Element(new cashedWebElementLocator_1.CashedWebElementLocator(it, `${this}[${index}]`), this.configuration));
    }
    elementAt(index) {
        return new element_1.Element(new byIndexWebElementLocator_1.ByIndexWebElementLocator(index, this), this.configuration);
    }
    get first() {
        return this.elementAt(0);
    }
    /**
     * Represents a new collection sliced from 'start' element index to 'end' element index exclusive.
     * @param start The inclusive "start" index of collection to be sliced.
     * @param end The exclusive "end" index of collection to be sliced
     */
    sliced(start, end) {
        return new Collection(new slicedWebElementsLocator_1.SlicedWebElementsLocator(start, end, this), this.configuration);
    }
    filteredBy(...conditions) {
        return new Collection(new filteredByConditionWebElementsLocator_1.FilteredByConditionWebElementsLocator(wait_1.Condition.all(...conditions), this), this.configuration);
    }
    elementBy(...conditions) {
        return new element_1.Element(new byConditionWebElementLocator_1.ElementByConditionWebElementLocator(wait_1.Condition.all(...conditions), this), this.configuration);
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