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
import { ConditionNotMatchedError } from './errors/conditionDoesNotMatchError';
import { lambda, toString } from './utils';

/* tslint:disable:prefer-template */


/**
 * We use queries to perform an async query on entity of type T, i.e. get something from entity.
 * So a query can pass and return something of type R or failed with Error correspondingly.
 */
export type Query<T, R> = (entity: T) => Promise<R>;

/**
 * Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T.
 * Command can pass or fail with Error correspondingly.
 */
export type Command<T> = Query<T, void>;

/**
 * Like Command<T>, i.e. can pass or fail with Error.
 * It is defined as separate type alias to differentiate the usage scenarios.
 * Conditions we use in context of matching condition on entity.
 * Condition is like a predicate but instead of (true | false) you get (passed | throws Error)
 *
 * Read "void" in Query<T, void> as "matched", or "passed".
 */
export type Condition<T> = Query<T, void>;

/*
 * todo: do we need Condition as class? so we can do have.text('foo').or(have.value('foo'))?
 * or is Condition.or(have.text('foo'), have.value('foo')) enough?
 */
export namespace Condition {
    /**
     * Negates condition. Making the negated condition to:
     * - pass (return void) in case original condition would throw Error
     * - throw Error in case original condition would pass (return void)
     *
     * @param {Condition<T>} condition - original condition to be negated
     * @param {string} description - custom description if "not <original description>" version is not enough
     * @returns {Condition<T>}
     */
    export const not = <T>(condition: Condition<T>, description?: string): Condition<T> =>
        lambda(description || `not ${condition}`, async (entity: T) => {
            try {
                await condition(entity);
            } catch (error) {
                return;
            }
            throw new ConditionNotMatchedError();
        });

    /**
     * Combines conditions by logical AND
     *
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    export const and = <T>(...conditions: Array<Condition<T>>): Condition<T> =>
        lambda(conditions.map(toString).join(' and '), async (entity: T) => {
            for (const condition of conditions) {
                await condition(entity);
            }
        });

    /**
     * Combines conditions by logical OR
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    export const or = <T>(...conditions: Array<Condition<T>>): Condition<T> =>
        lambda(conditions.map(toString).join(' or '), async (entity: T) => {
            const errors: Error[] = [];
            for (const condition of conditions) {
                try {
                    await condition(entity);
                    return;
                } catch (error) {
                    errors.push(error);
                }
            }
            throw new Error(errors.map(toString).join('; '));
        });

    /**
     * Changes condition's description to the new provided one.
     * Example:
     * ```
     *   const isBlank = Condition.named('is blank', Condition.and(has.exactText(''), has.value('')))
     * ```
     * @type {<F>(toString: string, fn: F) => F}
     */
    export const named = lambda;  // todo: consider renaming to Condition.as ...

    // todo: consider renaming to Condition.fromAll ...
    /**
     * Transforms conditions array provided as varargs to condition by applying Condition.and
     * @param {Array<Condition<T>>} conditions
     * @returns {Condition<T>}
     */
    export const all = <T>(...conditions: Array<Condition<T>>): Condition<T> => {
        if (conditions.length === 0) {
            throw new Error('at least one condition should be provided as argument to Condition.all');
        }

        return conditions.length > 1 ?
            Condition.and(...conditions) :
            conditions[0];
    };

    /**
     * Transforms conditions array provided as varargs to condition by applying Condition.and
     * @param {Array<Condition<T>>} conditions
     * @returns {Condition<T>}
     */
    export const allNot = <T>(...conditions: Array<Condition<T>>): Condition<T> => {
        if (conditions.length === 0) {
            throw new Error('at least one condition should be provided as argument to Condition.all');
        }
        const negated = conditions.map(c => Condition.not(c));

        return conditions.length > 1 ?
            Condition.and(...negated) :
            negated[0];
    };

    /**
     * Transforms Conditions (returning (void | throws Error)), combined by AND if more than one,
     * to async Predicate   (returning (true | false))
     * @param {Array<Condition<T>>} conditions
     * @returns {(entity: T) => Promise<boolean>}
     */
    export const asPredicate = <T>(...conditions: Array<Condition<T>>) =>
        (entity: T): Promise<boolean> =>
            Condition.all(...conditions)(entity).then(res => true, err => false);
}

export class Wait<T> {

    constructor(private readonly entity: T,
                private readonly timeout: number,
                private readonly onFailureHooks: OnFailureHook[]) {
        this.entity = entity;
        this.timeout = timeout;
        this.onFailureHooks = onFailureHooks;
    }

    async until(...conditions: Array<Condition<T>>): Promise<boolean> {
        return this.query(Condition.all(...conditions)).then(res => true, err => false);
    }

    async untilNot(...conditions: Array<Condition<T>>): Promise<boolean> {
        return this.query(Condition.allNot(...conditions)).then(res => true, err => false);
    }

    // todo: consider accepting ...fn: Array<Command<T>>
    async command(fn: Command<T>): Promise<void> {
        await this.query(fn);
    }

    async query<R>(fn: Query<T, R>): Promise<R> {
        const finishTime = new Date().getTime() + this.timeout;

        while (true) {
            try {
                return await fn(this.entity);
            } catch (error) {
                if (new Date().getTime() > finishTime) {
                    throw new TimeoutError(// todo: should we move this error formatting to the Error class definition?
                        '\n' +
                        `\tTimed out after ${this.timeout}ms, while waiting for:\n` +
                        `\t${this.entity.toString()}.${fn.toString()}\n` + // todo: if string has trailing
                                                                           // and leading spaces it will not be readable
                        'Reason:\n' +
                        `\t${error.message}`
                    );
                }
            }
        }

    }
}
