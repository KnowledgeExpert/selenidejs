import { OnFailureHook } from './refactor/onFailureHook';
export declare type Query<T, R> = (entity: T) => Promise<R>;
export declare type Command<T> = Query<T, void>;
export declare type Condition<T> = Query<T, boolean>;
export declare namespace Condition {
    const not: <T>(condition: Query<T, boolean>, description?: string) => (entity: T) => Promise<boolean>;
    const toBoolean: <T>(condition: Query<T, boolean>) => (entity: T) => Promise<boolean>;
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
