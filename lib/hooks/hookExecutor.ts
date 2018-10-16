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

import { Collection } from '../collection';
import { Configuration } from '../configuration';
import { Driver } from '../driver';
import { Element } from '../element';

export class HookExecutor<T> {
    private readonly driver: Driver;
    private readonly configuration: Configuration;
    private readonly entity: T;

    constructor(driver: Driver, entity: T) {
        this.driver = driver;
        this.configuration = driver.configuration;
        this.entity = entity;
    }

    async executeOnFailureHooks(error: Error) {
        await this.executeCommonOnFailureHooks(error);
        await this.executeOnEntityFailureHooks(error);
    }

    private async executeCommonOnFailureHooks(error: Error) {
        const hooks = this.configuration.onFailureHooks;
        const driver = this.driver;
        for (const onFailureHook of hooks) {
            await this.tryExecuteHook(onFailureHook, error, driver);
        }
    }

    private async executeOnEntityFailureHooks(error: Error) {
        if (this.entity instanceof Element) {
            await this.executeOnElementFailureHooks(error, this.entity);
        } else if (this.entity instanceof Collection) {
            await this.executeOnCollectionFailureHooks(error, this.entity);
        }
    }

    private async executeOnCollectionFailureHooks(error: Error, collection: Collection) {
        const hooks = this.configuration.onCollectionFailureHooks;
        const driver = this.driver;
        for (const onCollectionFailureHook of hooks) {
            await this.tryExecuteHook(onCollectionFailureHook, error, driver, collection);
        }
    }

    private async executeOnElementFailureHooks(error: Error, element: Element) {
        const hooks = this.configuration.onElementFailureHooks;
        const driver = this.driver;
        for (const onElementFailureHook of hooks) {
            await this.tryExecuteHook(onElementFailureHook, error, driver, element);
        }
    }

    private async tryExecuteHook(hook, ...args: any[]) {
        try {
            await hook(...args);
        } catch (error) {
            this.logFailedHook(error, hook);
        }
    }

    private logFailedHook(error: Error, hook) {
        /* tslint:disable:no-console */
        console.warn(
            `Cannot perform hook '${hook.toString()}' function cause of:` +
            `\n\tError message: ${error.message}` +
            `\n\tError stacktrace: ${error.stack}`
        );
        /* tslint:enable:no-console*/
    }

}
