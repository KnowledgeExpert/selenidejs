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
const collection_1 = require("../collection");
const element_1 = require("../element");
class HookExecutor {
    constructor(driver, entity) {
        this.driver = driver;
        this.configuration = driver.configuration;
        this.entity = entity;
    }
    async executeOnFailureHooks(error) {
        await this.executeCommonOnFailureHooks(error);
        await this.executeOnEntityFailureHooks(error);
    }
    async executeCommonOnFailureHooks(error) {
        const hooks = this.configuration.onFailureHooks;
        const driver = this.driver;
        for (const onFailureHook of hooks) {
            await this.tryExecuteHook(onFailureHook, error, driver);
        }
    }
    async executeOnEntityFailureHooks(error) {
        if (this.entity instanceof element_1.Element) {
            await this.executeOnElementFailureHooks(error, this.entity);
        }
        else if (this.entity instanceof collection_1.Collection) {
            await this.executeOnCollectionFailureHooks(error, this.entity);
        }
    }
    async executeOnCollectionFailureHooks(error, collection) {
        const hooks = this.configuration.onCollectionFailureHooks;
        const driver = this.driver;
        for (const onCollectionFailureHook of hooks) {
            await this.tryExecuteHook(onCollectionFailureHook, error, driver, collection);
        }
    }
    async executeOnElementFailureHooks(error, element) {
        const hooks = this.configuration.onElementFailureHooks;
        const driver = this.driver;
        for (const onElementFailureHook of hooks) {
            await this.tryExecuteHook(onElementFailureHook, error, driver, element);
        }
    }
    async tryExecuteHook(hook, ...args) {
        try {
            await hook(...args);
        }
        catch (error) {
            this.logFailedHook(error, hook);
        }
    }
    logFailedHook(error, hook) {
        /* tslint:disable:no-console */
        console.warn(`Cannot perform hook '${hook.toString()}' function cause of:` +
            `\n\tError message: ${error.message}` +
            `\n\tError stacktrace: ${error.stack}`);
        /* tslint:enable:no-console*/
    }
}
exports.HookExecutor = HookExecutor;
//# sourceMappingURL=hookExecutor.js.map