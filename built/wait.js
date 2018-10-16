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
/* tslint:disable:space-before-function-paren */
class Wait {
    constructor(entity, configuration, hookExecutor) {
        this.entity = entity;
        this.configuration = configuration;
        this.hookExecutor = hookExecutor;
    }
    async shouldMatch(condition, timeout = this.configuration.timeout) {
        return this.until(condition, timeout)
            .then(entity => entity, async (error) => {
            await this.hookExecutor.executeOnFailureHooks(error);
            throw error;
        });
    }
    async isMatch(condition, timeout = this.configuration.timeout) {
        return this.until(condition, timeout).then(res => true, err => false);
    }
    async until(condition, timeout) {
        const finishTime = new Date().getTime() + timeout;
        let lastError;
        do {
            try {
                await condition.matches(this.entity);
                return this.entity;
            }
            catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);
        throw new timeoutError_1.TimeoutError(`${lastError.message}. Wait timed out after ${timeout}ms.`);
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map