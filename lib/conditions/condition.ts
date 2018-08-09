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

import { ConditionDoesNotMatchError } from '../errors/conditionDoesNotMatchError';

export class Condition<T> {

    static not<T>(condition: Condition<T>): Condition<T> {
        return new Condition<T>({
            toString() {
                return `not ${condition.toString()}`;
            },
            async matches(entity: T) {
                try {
                    await condition.matches(entity);
                } catch (error) {
                    return entity;
                }
                throw new ConditionDoesNotMatchError(this.toString());
            }
        });
    }

    readonly matches: (entity: T) => Promise<T>;
    readonly toString: () => string;

    constructor(params: { matches: (entity: T) => Promise<T>, toString: () => string }) {
        this.matches = params.matches;
        this.toString = params.toString;
    }

    and<T>(...conditions: Array<Condition<T>>): Condition<T> {
        return new Condition<T>({
            toString() {
                return conditions.map(condition => condition.toString()).join(' AND ');
            },
            async matches(entity: T) {
                try {
                    await Promise.all(conditions.map(condition => condition.matches(entity)));
                    return entity;
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(this.toString());
            }
        });
    }
}
