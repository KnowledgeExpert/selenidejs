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

import { Condition } from './condition';
import { Configuration } from './configuration';
import { ConditionDoesNotMatchError } from './errors/conditionDoesNotMatchError';
import { TimeoutError } from './errors/timeoutError';
import { HookExecutor } from './hooks/hookExecutor';


/* tslint:disable:space-before-function-paren */
export class Wait<T> {

    private readonly entity: T;
    private readonly configuration: Configuration;
    private readonly hookExecutor: HookExecutor<T>;

    constructor(entity: T, configuration: Configuration, hookExecutor: HookExecutor<T>) {
        this.entity = entity;
        this.configuration = configuration;
        this.hookExecutor = hookExecutor;
    }

    async shouldMatch(condition: Condition<T>, timeout = this.configuration.timeout): Promise<T> {
        return this.until(condition, timeout)
            .then(
                entity => entity,
                async (error) => {
                    await this.hookExecutor.executeOnFailureHooks(error);
                    throw error;
                });
    }

    async isMatch(condition: Condition<T>, timeout = this.configuration.timeout): Promise<boolean> {
        return this.until(condition, timeout).then(res => true, err => false);
    }

    private async until(condition: Condition<T>, timeout: number): Promise<T> {

        const finishTime = new Date().getTime() + timeout;
        let lastError: ConditionDoesNotMatchError;

        do {
            try {
                await condition.matches(this.entity);
                return this.entity;
            } catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);

        throw new TimeoutError(`${lastError.message}. Wait timed out after ${timeout}ms.`);
    }

}
