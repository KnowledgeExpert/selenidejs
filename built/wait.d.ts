import { Condition } from './conditions/condition';
export declare namespace Wait {
    const WAIT_MS: () => any;
    const HARD_WAIT_MS: () => any;
    function hard(intervalInMilliseconds?: any): Promise<void>;
    function shouldMatch<T>(entity: T, condition: Condition<T>, timeout?: any): Promise<T>;
    function isMatch<T>(entity: T, condition: Condition<T>, timeout?: any): Promise<boolean>;
}
