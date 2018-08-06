import { Condition } from "./condition";
import { Element } from "../baseEntities/element";
export declare class ElementCondition extends Condition<Element> {
    readonly matches: (entity: Element) => Promise<Element>;
}
