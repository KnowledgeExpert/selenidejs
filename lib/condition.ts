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

import { ConditionDoesNotMatchError } from './errors/conditionDoesNotMatchError';

/* tslint:disable:space-before-function-paren */
export class Condition<T> {

    static create<T>(description: string, func: (T) => Promise<void>) {
        return new Condition<T>(description, func);
    }

    static not<T>(condition: Condition<T>) {
        const description = `not ${condition.description}`;
        const func = async (entity: T) => {
            await condition.func(entity).then(
                _ => {
                    throw new ConditionDoesNotMatchError();
                },
                ignored => {
                }
            );
        };
        return Condition.create(description, func);
    }

    private readonly func: (T) => Promise<void>;
    private readonly description;

    private constructor(description: string, func: (T) => Promise<void>) {
        this.func = func;
        this.description = description;
    }

    async matches(entity: T): Promise<void> {
        await this.func(entity).catch(error => {
            const message = error.message;

            if (!(error instanceof ConditionDoesNotMatchError) || !error.message) {
                // if selenium OR element finding error was thrown OR my error without message
                throw new ConditionDoesNotMatchError(`${entity.toString()} should ${this.toString()}`);
            }
            // im not satisfied and provide my custom error
            throw new ConditionDoesNotMatchError(`${entity.toString()} should ${this.toString()}, ${message}`);
        });
    }

    and(...conditions: Array<Condition<T>>): Condition<T> {
        const toStrings = [this.toString(), conditions.map(condition => condition.toString())];
        const allConditions = [this, ...conditions];
        const toString = toStrings.join(' AND ');
        const newFunc = async (entity: T) => {
            for (const condition of allConditions) {
                await condition.func(entity)
                    .catch(error => {
                        throw new ConditionDoesNotMatchError();
                    });
            }
        };
        return Condition.create(toString, newFunc);
    }

    toString() {
        return this.description;
    }

}
