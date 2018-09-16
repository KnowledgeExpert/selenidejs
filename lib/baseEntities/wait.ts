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

import { Condition } from '../conditions/condition';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { Driver } from './driver';
import { Element } from './element';


export class Wait<T extends Driver | Element | Collection> {

    private readonly entity: T;
    private readonly driver: Driver;
    private readonly configuration: Configuration;

    constructor(entity: T, driver: Driver) {
        this.driver = driver;
        this.configuration = driver.configuration;
        this.entity = entity;
    }

    async shouldMatch(condition: Condition<T>, timeout = this.configuration.timeout): Promise<T> {
        return this.until(condition, timeout);
    }

    async isMatch(condition: Condition<T>, timeout = this.configuration.timeout): Promise<boolean> {
        return this.until(condition, timeout).then(res => true, err => false);
    }

    private async until(condition: Condition<T>, timeout: number): Promise<T> {

        const finishTime = new Date().getTime() + timeout;
        let lastError: Error;

        do {
            try {
                return await condition.matches(this.entity);
            } catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);

        lastError.message = `${this.entity.toString()} should ${lastError.message}. Wait timed out after ${timeout}ms`;

        await this.executeOnFailureHooks(lastError);
        if (this.entity instanceof Element) {
            await this.executeOnElementFailureHooks(lastError, this.entity);
        } else if (this.entity instanceof Collection) {
            await this.executeOnCollectionFailureHooks(lastError, this.entity);
        }

        throw lastError;
    }

    private async executeOnFailureHooks(error: Error) {
        const hooks = this.configuration.onFailureHooks;
        const driver = this.driver;
        for (const onFailureHook of hooks) {
            await this.tryExecuteHook(onFailureHook, error, driver);
        }
    }

    private async executeOnElementFailureHooks(error: Error, element: Element) {
        const hooks = this.configuration.onElementFailureHooks;
        const driver = this.driver;
        for (const onElementFailureHook of hooks) {
            await this.tryExecuteHook(onElementFailureHook, error, driver, element);
        }
    }

    private async executeOnCollectionFailureHooks(error: Error, collection: Collection) {
        const hooks = this.configuration.onCollectionFailureHooks;
        const driver = this.driver;
        for (const onCollectionFailureHook of hooks) {
            await this.tryExecuteHook(onCollectionFailureHook, error, driver, collection);
        }
    }

    private async tryExecuteHook(hook, ...args: any[]) {
        try {
            await hook(...args);
        } catch (error) {
            /* tslint:disable:no-console */
            console.warn(
                `Cannot perform hook '${hook.toString()}' function cause of:
                            Error message: ${error.message}
                            Error stacktrace: ${error.stackTrace}`
            );
            /* tslint:enable:no-console */
        }
    }

}
