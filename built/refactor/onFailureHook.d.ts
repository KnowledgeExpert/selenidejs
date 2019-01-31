import { Condition } from '../wait';
export declare type OnFailureHook = (<T>(lastError: Error, entity: T, condition?: Condition<T>) => void | Promise<void>);
