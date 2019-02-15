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
const utils_1 = require("./utils");
var Condition;
(function (Condition) {
    /**
     * Negates condition. Making the negated condition to:
     * - pass (return void) in case original condition would throw Error
     * - throw Error in case original condition would pass (return void)
     *
     * @param {Condition<T>} condition - original condition to be negated
     * @param {string} description - custom description if "not <original description>" version is not enough
     * @returns {Condition<T>}
     */
    Condition.not = (condition, description) => utils_1.lambda(description || `not ${condition}`, async (entity) => {
        try {
            await condition(entity);
        }
        catch (error) {
            return;
        }
        throw new conditionDoesNotMatchError_1.ConditionNotMatchedError();
    });
    /**
     * Combines conditions by logical AND
     *
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    Condition.and = (...conditions) => utils_1.lambda(conditions.map(utils_1.toString).join(' and '), async (entity) => {
        for (const condition of conditions) {
            await condition(entity);
        }
    });
    /**
     * Combines conditions by logical OR
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    Condition.or = (...conditions) => utils_1.lambda(conditions.map(utils_1.toString).join(' or '), async (entity) => {
        const errors = [];
        for (const condition of conditions) {
            try {
                await condition(entity);
                return;
            }
            catch (error) {
                errors.push(error);
            }
        }
        throw new Error(errors.map(utils_1.toString).join('; '));
    });
    /**
     * Changes condition's description to the new provided one.
     * Example:
     * ```
     *   const isBlank = Condition.named('is blank', Condition.and(has.exactText(''), has.value('')))
     * ```
     * @type {<F>(toString: string, fn: F) => F}
     */
    Condition.named = utils_1.lambda; // todo: consider renaming to Condition.as ...
    /**
     * Transforms Condition (returning (void | throws Error))
     * to async Predicate   (returning (true | false))
     * @param {Condition<T>} condition
     * @returns {(entity: T) => Promise<boolean>}
     */
    Condition.asPredicate = (condition) => (entity) => condition(entity).then(res => true, err => false);
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
                        `\t${this.entity.toString()}.${fn.toString()}\n` + // todo: if string has trailing
                        // and leading spaces it will not be readable
                        'Reason:\n' +
                        `\t${error.message}`);
                }
            }
        }
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map