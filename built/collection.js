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
const actions_1 = require("./actions");
const condition_1 = require("./condition");
const hookExecutor_1 = require("./hooks/hookExecutor");
const wait_1 = require("./wait");
class Collection {
    constructor(locator, driver) {
        this.locator = locator;
        this.driver = driver;
        this.wait = new wait_1.Wait(this, this.driver.configuration, new hookExecutor_1.HookExecutor(driver, this));
    }
    async should(condition, timeout) {
        return this.wait.shouldMatch(condition, timeout);
    }
    async shouldNot(condition, timeout) {
        return this.should(condition_1.Condition.not(condition), timeout);
    }
    async is(condition, timeout) {
        return this.wait.isMatch(condition, timeout);
    }
    async isNot(condition, timeout) {
        return this.is(condition_1.Condition.not(condition), timeout);
    }
    get(index) {
        return actions_1.Actions.nth(index)(this);
    }
    first() {
        return this.get(0);
    }
    filter(condition) {
        return actions_1.Actions.filtered(condition)(this);
    }
    filterBy(condition) {
        return this.filter(condition);
    }
    findBy(condition) {
        return actions_1.Actions.find(condition)(this);
    }
    async size() {
        return actions_1.Actions.size(this);
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