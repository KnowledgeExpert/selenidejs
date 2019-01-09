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
var Condition;
(function (Condition) {
    Condition.not = (condition, description) => {
        const fn = async (entity) => {
            return !(await condition(entity));
        };
        fn.toString = () => description || `not ${condition}`;
        return fn;
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
        this.query(fn, timeout);
    }
    async query(fn, timeout = this.timeout) {
        const finishTime = new Date().getTime() + timeout;
        while (true) {
            try {
                /* tslint:disable:no-console */
                console.log('\ntrying to...');
                const res = await fn(this.entity);
                return res;
            }
            catch (error) {
                if (new Date().getTime() > finishTime) {
                    /* tslint:disable:no-console */
                    console.log('\ntimeout is over');
                    throw new timeoutError_1.TimeoutError(`Timed out after ${timeout}ms, 
                        while waiting for ${this.entity.toString()},
                        reason: ${error.message}`
                    /*
                        todo: consider adding custom "action" description
                        right now we say:
                        1. there was a wait... with timeout
                        2. wait for entity... with this description of entity
                        3. there was a fail, and here is the reason

                        but we don't say explicitly what the action was?
                        for predefined "queries" (queries/commands/conditions)
                        such information is included into "reason"
                        and that's ok
                        but when we pass just raw functions/lambdas - probably
                        there should be a way to provide a custom description of action,
                        and if it is provided, - include it into message of TimeoutError somehow...
                        see FailedToMatchConditionWithReasonError implementation
                        for some consistent implementation...
                            probably it should be some "wrapper" style...
                            with own implementation for command and own for query...
                     */
                    );
                }
            }
        }
        // todo: remove when refactored to DRY onFailureHooks mechanism
        // lastError.message =
        // `${this.entity.toString()} should ${lastError.message}. Wait timed out after ${timeout}ms`;
        //
        // for (const func of this.onFailureHooks) {
        //     try {
        //         await func(lastError, this.entity, condition);
        //     } catch (error) {
        //         /* tslint:disable:no-console */
        //         console.warn(
        //             `Cannot perform hook '${func.toString()}' function cause of:
        //                     Error message: ${error.message}
        //                     Error stacktrace: ${error.stackTrace}`
        //         );
        //         /* tslint:enable:no-console */
        //     }
        // }
        // throw lastError;
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map