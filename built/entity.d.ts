import { Command, Condition, Query, Wait } from './wait';
import { OnFailureHook } from './refactor/onFailureHook';
export interface Assertable {
    should(condition: Condition<this>): Promise<this>;
    shouldNot(condition: Condition<this>): Promise<this>;
}
export interface Matchable {
    waitUntil(...conditions: Array<Condition<this>>): Promise<boolean>;
    waitUntilNot(...conditions: Array<Condition<this>>): Promise<boolean>;
    matching(condition: Condition<this>): Promise<boolean>;
    matchingNot(condition: Condition<this>): Promise<boolean>;
}
export declare abstract class Entity implements Assertable, Matchable {
    private readonly timeout;
    private readonly onFailureHooks;
    protected readonly wait: Wait<this>;
    constructor(timeout: number, onFailureHooks: OnFailureHook[]);
    should(...conditions: Array<Condition<this>>): Promise<this>;
    shouldNot(...conditions: Array<Condition<this>>): Promise<this>;
    waitUntil(...conditions: Array<Condition<this>>): Promise<boolean>;
    waitUntilNot(...conditions: Array<Condition<this>>): Promise<boolean>;
    matching(...conditions: Array<Condition<this>>): Promise<boolean>;
    matchingNot(...conditions: Array<Condition<this>>): Promise<boolean>;
    perform(command: Command<this>): Promise<this>;
    get<R>(query: Query<this, R>): Promise<R>;
}
