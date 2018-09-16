import { Condition } from '../conditions/condition';
import { Collection } from './collection';
import { Driver } from './driver';
import { Element } from './element';
export declare class Wait<T extends Driver | Element | Collection> {
    private readonly entity;
    private readonly driver;
    private readonly configuration;
    constructor(entity: T, driver: Driver);
    shouldMatch(condition: Condition<T>, timeout?: number): Promise<T>;
    isMatch(condition: Condition<T>, timeout?: number): Promise<boolean>;
    private until;
    private executeOnFailureHooks;
    private executeOnElementFailureHooks;
    private executeOnCollectionFailureHooks;
    private tryExecuteHook;
}
