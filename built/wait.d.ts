import { OnFailureHook } from './refactor/onFailureHook';
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
    const not: <T>(condition: Query<T, void>, description?: string) => Query<T, void>;
    /**
     * Transforms Condition (returning (passed | Error))
     * to async Predicate (returning (true | false))
     * @param {Condition<T>} condition
     * @returns {(entity: T) => Promise<boolean>}
     */
    const asPredicate: <T>(condition: Query<T, void>) => (entity: T) => Promise<boolean>;
}
export declare class Wait<T> {
    private readonly entity;
    private readonly timeout;
    private readonly onFailureHooks;
    constructor(entity: T, timeout: number, onFailureHooks: OnFailureHook[]);
    until(fn: Condition<T>, timeout?: number): Promise<boolean>;
    command(fn: Command<T>, timeout?: number): Promise<void>;
    query<R>(fn: Query<T, R>, timeout?: number): Promise<R>;
}
