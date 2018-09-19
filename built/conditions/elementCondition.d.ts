import { Element } from '../element';
import { Condition } from './condition';
export declare class ElementCondition extends Condition<Element> {
    readonly matches: (entity: Element) => Promise<Element>;
}
