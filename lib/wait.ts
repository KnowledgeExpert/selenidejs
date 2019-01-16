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
import { ConditionDoesNotMatchError, FailedToMatchConditionWithReasonError } from './errors/conditionDoesNotMatchError';

/* tslint:disable:prefer-template */

export type Query<T, R> = (entity: T) => Promise<R>;
export type Command<T> = Query<T, void>;

export type Condition<T> = Query<T, boolean>;
/*
 * todo: here, condition is just a predicate... i.e. (entity: T) => Promise<boolean>
 *     but in fact, we mean under condition - (entity: T) => Promise<boolean | throws>
 *     should we refactor it to at least be as (entity: T) => Promise<boolean | Error> ?
 */

export namespace Condition {
    export const not = <T>(condition: Condition<T>, description?: string) => {
        const desc = description || `not ${condition}`;
        const notCondition = async (entity: T): Promise<boolean> => {
            try {
                if (!(await condition(entity))) {
                    return true;
                }
            } catch (error) {
                return true;
            }
            throw new ConditionDoesNotMatchError(`${desc}? = false`);
        };
        notCondition.toString = () => desc;
        return notCondition;
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
        await this.query(fn, timeout);
    }

    async query<R>(fn: Query<T, R>, timeout: number = this.timeout): Promise<R> {
        const finishTime = new Date().getTime() + timeout;

        while (true) {
            try {
                return await fn(this.entity);
            } catch (error) {
                if (new Date().getTime() > finishTime) {
                    throw new TimeoutError(// todo: should we move this error formatting to the Error class definition?
                        '\n' +
                        `\tTimed out after ${timeout}ms, while waiting for:\n` +
                        `\t${this.entity.toString()}.${fn.toString()}\n` +
                        'Reason:\n' +
                        `\t${error.message}`
                    );
                }
            }
        }

    }
}
