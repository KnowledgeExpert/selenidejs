"use strict";
//Copyright 2018 Knowledge Expert SA
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
        this.selenideDriver = entity['driver'] ? entity['driver'] : entity;
    }
    async shouldMatch(condition, timeout = this.configuration.timeout) {
        return await this.until(condition, timeout, true);
    }
    async isMatch(condition, timeout = this.configuration.timeout) {
        return !!await this.until(condition, timeout, false);
    }
    async until(condition, timeout, throwError) {
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
        if (throwError) {
            lastError.message = `${this.entity.toString()}\n\tshould ${lastError.message}\n\tWait timed out after ${timeout}ms`;
            for (let func of this.configuration.onFailureHooks) {
                try {
                    await func(lastError, this.entity, condition);
                }
                catch (error) {
                    console.error(`Cannot perform hook '${func.toString()}' function cause of:\n\tError message: ${error.message}\n\tError stacktrace: ${error.stackTrace}`);
                }
            }
            throw lastError;
        }
        return this.entity;
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map