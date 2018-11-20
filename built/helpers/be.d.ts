import { Condition } from '../condition';
import { Element } from '../element';
export declare namespace be {
    const selected: Condition<Element>;
    const absent: Condition<Element>;
    const present: Condition<Element>;
    const visible: Condition<Element>;
    const hidden: Condition<Element>;
    const focused: Condition<Element>;
}
