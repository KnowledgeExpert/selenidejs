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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const wait_1 = require("./wait");
const elementActionHooks_1 = require("./refactor/elementActionHooks");
class Entity {
    constructor(timeout, onFailureHooks) {
        this.timeout = timeout;
        this.onFailureHooks = onFailureHooks;
        this.wait = new wait_1.Wait(this, timeout, []);
    }
    /*
     * todo: consider assert or shouldMatch aliases for should
     * should is good for
     *   should(be.visible) style
     * but assert or shouldMatch is good for the "raw" condition case:
     *   assert(condition.element.isVisible)
     *   shouldMatch(condition.element.isVisible)
     * maybe someone will find this style better than be.* and have.*
     * the advantage is in having only one entry point to all conditions - condition.*
     * where it has conditions sorted by type - element, collection, browser -
     * so it might be easier to find the needed one...
     * while be.* and have.* are kind of bulk of mixed type conditions - all in one heap,
     * even two mixed heaps:)));
     */
    /* Assertable */
    async should(...conditions) {
        await this.wait.query(wait_1.Condition.all(...conditions));
        return this;
    }
    async shouldNot(...conditions) {
        await this.wait.query(wait_1.Condition.allNot(...conditions));
        return this;
    }
    /* Matchable */
    async waitUntil(...conditions) {
        return this.wait.until(...conditions);
    }
    async waitUntilNot(...conditions) {
        return this.wait.untilNot(...conditions);
    }
    async matching(...conditions) {
        return wait_1.Condition.asPredicate(...conditions)(this);
    }
    async matchingNot(...conditions) {
        return this.matching(...conditions.map(c => wait_1.Condition.not(c)));
    }
    /* Commands */
    async perform(command) {
        await this.wait.command(command);
        return this;
    }
    /* Queries */ // todo: do we need @ElementQueryHooks?
    async get(query) {
        return this.wait.query(query);
    }
}
__decorate([
    elementActionHooks_1.ElementActionHooks // todo: cover with tests
], Entity.prototype, "perform", null);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map