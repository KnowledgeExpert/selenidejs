import { Condition } from "./condition";
import { Collection } from "../baseEntities/collection";
export declare class CollectionCondition extends Condition<Collection> {
    readonly matches: (entity: Collection) => Promise<Collection>;
}
