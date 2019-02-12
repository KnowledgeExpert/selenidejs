import { Condition } from './wait';
export interface Assertable<T> {
    should(condition: Condition<T>, timeout?: number): Promise<T>;
    shouldNot(condition: Condition<T>, timeout?: number): Promise<T>;
}
