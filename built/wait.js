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
class Wait {
    constructor(entity, config) {
        this.configuration = config;
        this.entity = entity;
    }
    async shouldMatch(condition, timeout = this.configuration.timeout) {
        return this.until(condition, timeout);
    }
    async isMatch(condition, timeout = this.configuration.timeout) {
        return this.until(condition, timeout).then(res => true, err => false);
    }
    async until(condition, timeout) {
        const finishTime = new Date().getTime() + timeout;
        let lastError;
        do {
            try {
                return await condition.matches(this.entity);
            }
            catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);
        lastError.message = `${this.entity.toString()} should ${lastError.message}. Wait timed out after ${timeout}ms`;
        for (const func of this.configuration.onFailureHooks) {
            try {
                await func(lastError, this.entity, condition);
            }
            catch (error) {
                /* tslint:disable:no-console */
                console.warn(`Cannot perform hook '${func.toString()}' function cause of:
                            Error message: ${error.message}
                            Error stacktrace: ${error.stackTrace}`);
                /* tslint:enable:no-console */
            }
        }
        throw lastError;
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map