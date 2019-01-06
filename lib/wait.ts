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

import { OnFailureHook } from './refactor/onFailureHook';
import { TimeoutError } from './errors/timeoutError';
import { FailedToMatchConditionWithReasonError } from './errors/conditionDoesNotMatchError';

export type Query<T, R> = (entity: T) => Promise<R>;
export type Command<T> = Query<T, void>;

export type Condition<T> = Query<T, boolean>;

export namespace Condition {
    export const not = <T>(condition: Condition<T>, description?: string) => {
        const fn = async (entity: T): Promise<boolean> => {
            return !(await condition(entity));
        };
        fn.toString = () => description || `not ${condition}`;
        return fn;
    };

    export const toBoolean = <T>(condition: Condition<T>) =>
        (entity: T): Promise<boolean> => condition(entity).then(res => true, err => false);
}

export class Wait<T> {

    constructor(private readonly entity: T,
                private readonly timeout: number,
                private readonly onFailureHooks: OnFailureHook[]) {
        this.entity = entity;
        this.timeout = timeout;
        this.onFailureHooks = onFailureHooks;
    }

    async until(fn: Condition<T>, timeout: number = this.timeout): Promise<boolean> {
        // const query = (entity: T) => {
        //     fn(entity).
        // };
        // todo: Condition<T> is in fact Query<T, R | Exception>, how to deal exception?
        return this.query(fn, timeout).then(res => true, err => false);
    }

    async command(fn: Command<T>, timeout: number = this.timeout) {
        this.query(fn, timeout);
    }

    async query<R>(fn: Query<T, R>, timeout: number = this.timeout): Promise<R> {
        const finishTime = new Date().getTime() + timeout;

        while (true) {
            try {
                return await fn(this.entity);
            } catch (error) {
                if (new Date().getTime() > finishTime) {
                    throw new TimeoutError(
                        `Timed out after ${timeout}ms, 
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
