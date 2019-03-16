import { lambda } from './utils';
/**
 * We use queries to perform an async query on entity of type T, i.e. get something from entity.
 * So a query can pass and return something of type R or failed with Error correspondingly.
 */
export declare type Query<T, R> = (entity: T) => Promise<R>;
/**
 * Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T.
 * Command can pass or fail with Error correspondingly.
 */
export declare type Command<T> = Query<T, void>;
/**
 * Like Command<T>, i.e. can pass or fail with Error.
 * It is defined as separate type alias to differentiate the usage scenarios.
 * Conditions we use in context of matching condition on entity.
 * Condition is like a predicate but instead of (true | false) you get (passed | throws Error)
 *
 * Read "void" in Query<T, void> as "matched", or "passed".
 */
export declare type Condition<T> = Query<T, void>;
export declare namespace Condition {
    /**
     * Negates condition. Making the negated condition to:
     * - pass (return void) in case original condition would throw Error
     * - throw Error in case original condition would pass (return void)
     *
     * @param {Condition<T>} condition - original condition to be negated
     * @param {string} description - custom description if "not <original description>" version is not enough
     * @returns {Condition<T>}
     */
    const not: <T>(condition: Query<T, void>, description?: string) => Query<T, void>;
    /**
     * Combines conditions by logical AND
     *
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    const and: <T>(...conditions: Query<T, void>[]) => Query<T, void>;
    /**
     * Combines conditions by logical OR
     * @param {Condition<T>} conditions
     * @returns {Condition<T>}
     */
    const or: <T>(...conditions: Query<T, void>[]) => Query<T, void>;
    /**
     * Changes condition's description to the new provided one.
     * Example:
     * ```
     *   const isBlank = Condition.named('is blank', Condition.and(has.exactText(''), has.value('')))
     * ```
     * @type {<F>(toString: string, fn: F) => F}
     */
    const named: typeof lambda;
    /**
     * Transforms conditions array provided as varargs to condition by applying Condition.and
     * @param {Array<Condition<T>>} conditions
     * @returns {Condition<T>}
     */
    const all: <T>(...conditions: Query<T, void>[]) => Query<T, void>;
    /**
     * Transforms conditions array provided as varargs to condition by applying Condition.and
     * @param {Array<Condition<T>>} conditions
     * @returns {Condition<T>}
     */
    const allNot: <T>(...conditions: Query<T, void>[]) => Query<T, void>;
    /**
     * Transforms Conditions (returning (void | throws Error)), combined by AND if more than one,
     * to async Predicate   (returning (true | false))
     * @param {Array<Condition<T>>} conditions
     * @returns {(entity: T) => Promise<boolean>}
     */
    const asPredicate: <T>(...conditions: Query<T, void>[]) => (entity: T) => Promise<boolean>;
}
export declare type OnFailureHook<T> = (failure: Error, entity: T) => Promise<void | Error>;
export declare class Wait<T> {
    private readonly entity;
    private readonly timeout;
    private readonly onFailureHooks;
    constructor(entity: T, timeout: number, onFailureHooks: Array<OnFailureHook<T>>);
    until(...conditions: Array<Condition<T>>): Promise<boolean>;
    untilNot(...conditions: Array<Condition<T>>): Promise<boolean>;
    command(fn: Command<T>): Promise<void>;
    query<R>(fn: Query<T, R>): Promise<R>;
}
