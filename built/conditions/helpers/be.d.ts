import { ElementCondition } from '../elementCondition';
import { Conditions } from '../conditions';
export declare namespace be {
    const selected: ElementCondition;
    const absent: ElementCondition;
    const present: ElementCondition;
    const visible: ElementCondition;
    const hidden: ElementCondition;
    const empty: typeof Conditions.elementHasEmptyText;
}
