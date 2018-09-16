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
const collection_1 = require("./collection");
const element_1 = require("./element");
class Wait {
    constructor(entity, driver) {
        this.driver = driver;
        this.configuration = driver.configuration;
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
        await this.executeOnFailureHooks(lastError);
        if (this.entity instanceof element_1.Element) {
            await this.executeOnElementFailureHooks(lastError, this.entity);
        }
        else if (this.entity instanceof collection_1.Collection) {
            await this.executeOnCollectionFailureHooks(lastError, this.entity);
        }
        throw lastError;
    }
    async executeOnFailureHooks(error) {
        const hooks = this.configuration.onFailureHooks;
        const driver = this.driver;
        for (const onFailureHook of hooks) {
            await this.tryExecuteHook(onFailureHook, error, driver);
        }
    }
    async executeOnElementFailureHooks(error, element) {
        const hooks = this.configuration.onElementFailureHooks;
        const driver = this.driver;
        for (const onElementFailureHook of hooks) {
            await this.tryExecuteHook(onElementFailureHook, error, driver, element);
        }
    }
    async executeOnCollectionFailureHooks(error, collection) {
        const hooks = this.configuration.onCollectionFailureHooks;
        const driver = this.driver;
        for (const onCollectionFailureHook of hooks) {
            await this.tryExecuteHook(onCollectionFailureHook, error, driver, collection);
        }
    }
    async tryExecuteHook(hook, ...args) {
        try {
            await hook(...args);
        }
        catch (error) {
            /* tslint:disable:no-console */
            console.warn(`Cannot perform hook '${hook.toString()}' function cause of:
                            Error message: ${error.message}
                            Error stacktrace: ${error.stackTrace}`);
            /* tslint:enable:no-console */
        }
    }
}
exports.Wait = Wait;
//# sourceMappingURL=wait.js.map