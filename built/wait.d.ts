import { Condition } from "./conditions/condition";
export declare namespace Wait {
    function hard(intervalInMilliseconds?: any): Promise<void>;
    function shouldMatch<T>(entity: T, condition: Condition<T>, timeout?: any): Promise<T>;
    function isMatch<T>(entity: T, condition: Condition<T>, timeout?: any): Promise<boolean>;
}
