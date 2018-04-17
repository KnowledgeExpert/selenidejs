import { Condition } from "./conditions/condition";
export declare namespace Wait {
    let DEFAULT_WAIT_MS: number;
    let DEFAULT_HARD_WAIT_MS: number;
    function hard(intervalInMilliseconds?: number): Promise<void>;
    function shouldMatch<T>(entity: T, condition: Condition<T>, timeout?: number): Promise<T>;
    function isMatch<T>(entity: T, condition: Condition<T>, timeout?: number): Promise<boolean>;
}
