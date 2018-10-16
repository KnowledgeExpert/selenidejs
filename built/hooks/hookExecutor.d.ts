import { Driver } from '../driver';
export declare class HookExecutor<T> {
    private readonly driver;
    private readonly configuration;
    private readonly entity;
    constructor(driver: Driver, entity: T);
    executeOnFailureHooks(error: Error): Promise<void>;
    private executeCommonOnFailureHooks;
    private executeOnEntityFailureHooks;
    private executeOnCollectionFailureHooks;
    private executeOnElementFailureHooks;
    private tryExecuteHook;
    private logFailedHook;
}
