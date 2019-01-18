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
const timeoutError_1 = require("./errors/timeoutError");
const conditionDoesNotMatchError_1 = require("./errors/conditionDoesNotMatchError");
/*
 * todo: here, condition is just a predicate... i.e. (entity: T) => Promise<boolean>
 *     but in fact, we mean under condition - (entity: T) => Promise<boolean | throws>
 *     should we refactor it to at least be as (entity: T) => Promise<boolean | Error> ?
 */
var Condition;
(function (Condition) {
    Condition.not = (condition, description) => {
        const desc = description || `not ${condition}`;
        const notCondition = async (entity) => {
            try {
                if (!(await condition(entity))) {
                    return true;
                }
            }
            catch (error) {
                return true;
            }
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${desc}? = false`);
        };
        notCondition.toString = () => desc;
        return notCondition;
    };
    Condition.toBoolean = (condition) => (entity) => condition(entity).then(res => true, err => false);
})(Condition = exports.Condition || (exports.Condition = {}));
class Wait {
    constructor(entity, timeout, onFailureHooks) {
        this.entity = entity;
        this.timeout = timeout;
        this.onFailureHooks = onFailureHooks;
        this.entity = entity;
        this.timeout = timeout;
        this.onFailureHooks = onFailureHooks;
    }
    async until(fn, timeout = this.timeout) {
        // const query = (entity: T) => {
        //     fn(entity).
        // };
        // todo: Condition<T> is in fact Query<T, R | Exception>, how to deal exception?
        return this.query(fn, timeout).then(res => true, err => false);
    }
    async command(fn, timeout = this.timeout) {
        await this.query(fn, timeout);
    }
    async query(fn, timeout = this.timeout) {
        const finishTime = new Date().getTime() + timeout;
        while (true) {
            try {
                return await fn(this.entity);
            }
            catch (error) {
                if (new Date().getTime() > finishTime) {
                    throw new timeoutError_1.TimeoutError(// todo: should we move this error formatting to the Error class definition?
                    '\n' +
                        `\tTimed out after ${timeout}ms, while waiting for:\n` +
                        `\t${this.entity.toString()}.${fn.toString()}\n` +
                        'Reason:\n' +
                        `\t${error.message}`);
                }
            }
        }
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map