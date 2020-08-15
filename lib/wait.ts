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

import { ConditionNotMatchedError } from './errors/conditionDoesNotMatchError';
import { TimeoutError } from './errors/timeoutError';
import { toString } from './utils';

/* tslint:disable:prefer-template */

/**
 * Just a type alias to one-argument-async-function...
 */
export type Lambda<T, R> = (entity: T) => Promise<R>;

/**
 * An interface for the "object" version of Lambda
 */
export interface Fn<T, R> {
    call(entity: T): Promise<R>;
}


/**
 * We use queries to perform an async query on entity of type T, i.e. get something from entity.
 * So a query can pass and return something of type R or failed with Error correspondingly.
 */
export class Query<T, R> implements Fn<T, R> {

    private readonly description: string;
    private readonly fn: Lambda<T, R>;

    constructor(description, fn) {
        this.description = description;
        this.fn = fn;
    }

    async call(entity: T): Promise<R> {
        return this.fn(entity);
    }

    toString(): string {
        return this.description;
    }
}

/**
 * Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T.
 * Command can pass or fail with Error correspondingly.
 */
export class Command<T> extends Query<T, void> { }

// todo: updated tsdocs
/**
 * Like Command<T>, i.e. can pass or fail with Error.
 * It is defined as separate type alias to differentiate the usage scenarios.
 * Conditions we use in context of matching condition on entity.
 * Condition is like a predicate but instead of (true | false) you get (passed | throws Error)
 *
 * Read "void" in Query<T, void> as "matched", or "passed".
 */
export class Condition<E> implements Fn<E, void> {

    private readonly description: string;
    private readonly fn: Lambda<E, void>;

    constructor(description, fn) {
        this.description = description;
        this.fn = fn;
    }

    async call(entity: E): Promise<void> {
        await this.fn(entity);
    }

    and(condition: Condition<E>) {
        return Condition.and(this, condition);
    }

    or(condition: Condition<E>) {
        return Condition.or(this, condition);
    }

    toString(): string {
        return this.description;
    }
}

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
    export const not = <T>(condition: Condition<T>, description?: string): Condition<T> => {
        const [isOrHave, ...conditionName] = condition.toString().split(' ');
        return new Condition(
            description || `${isOrHave} ${'is' === isOrHave ? 'not' : 'no'} ${conditionName.join(' ')}`,
            async (entity: T) => {
                try {
                    await condition.call(entity);
                } catch (error) {
                    return;
                }
                throw new ConditionNotMatchedError();
            });
    };


    /**
     * Combines conditions by logical AND
     *
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    export const and = <T>(...conditions: Condition<T>[]): Condition<T> =>
        new Condition(conditions.map(toString).join(' and '), async (entity: T) => {
            for (const condition of conditions) {
                await condition.call(entity);
            }
        });

    /**
     * Combines conditions by logical OR
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    export const or = <T>(...conditions: Condition<T>[]): Condition<T> =>
        new Condition(conditions.map(toString).join(' or '), async (entity: T) => {
            const errors: Error[] = [];
            for (const condition of conditions) {
                try {
                    await condition.call(entity);
                    return;
                } catch (error) {
                    errors.push(error);
                }
            }
            throw new Error(errors.map(toString).join('; '));
        });

    /**
     * Transforms conditions array provided as varargs to condition by applying Condition.and
     * @param {Array<Condition<T>>} conditions
     * @returns {Condition<T>}
     */
    export const all = <T>(...conditions: Condition<T>[]): Condition<T> => {
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
    export const allNot = <T>(...conditions: Condition<T>[]): Condition<T> => {
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
    export const asPredicate = <T>(...conditions: Condition<T>[]) =>
        (entity: T): Promise<boolean> =>
            Condition.all(...conditions).call(entity).then(_ => true, _ => false);
}

export type OnFailureHook<T> = (failure: Error, entity: T) => Promise<void | Error>;

export class Wait<T> {

    private readonly entity: T;
    private readonly timeout: number;

    constructor(entity: T, timeout: number) {
        this.entity = entity;
        this.timeout = timeout;
    }

    async query<R>(fn: Lambda<T, R>): Promise<R> {
        return this.for(new Query(fn.toString(), fn)) as Promise<R>;
    }

    async command(fn: Lambda<T, void>): Promise<void> {
        return this.for(new Command(fn.toString(), fn));
    }

    async until<R>(fn: Fn<T, R>): Promise<boolean> {
        return this.for(fn).then(_ => true, _ => false);
    }

    async for<R>(fn: Fn<T, R>): Promise<R> {
        const finishTime = new Date().getTime() + this.timeout;

        while (true) {
            try {
                return await fn.call(this.entity);
            } catch (error) {
                if (new Date().getTime() > finishTime) {
                    // todo: should we move this error formatting to the Error class definition?
                    const failure = new TimeoutError(
                        '\n' +
                        `\tTimed out after ${this.timeout}ms, while waiting for:\n` +
                        `\t${this.entity.toString()}.${fn.toString()}\n` + // todo: if string has trailing
                        // and leading spaces it will not be readable
                        'Reason:\n' +
                        `\t${error.message}`
                    );

                    throw failure;
                }
            }
        }
    }
}
