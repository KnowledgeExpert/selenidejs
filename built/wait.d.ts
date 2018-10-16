import { Condition } from './condition';
import { Configuration } from './configuration';
import { HookExecutor } from './hooks/hookExecutor';
export declare class Wait<T> {
    private readonly entity;
    private readonly configuration;
    private readonly hookExecutor;
    constructor(entity: T, configuration: Configuration, hookExecutor: HookExecutor<T>);
    shouldMatch(condition: Condition<T>, timeout?: number): Promise<T>;
    isMatch(condition: Condition<T>, timeout?: number): Promise<boolean>;
    private until;
}
