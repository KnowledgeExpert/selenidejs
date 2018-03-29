import {Condition} from "./condition";
import {Collection} from "../base-entities/collection";

export class CollectionCondition extends Condition<Collection> {
    readonly matches: (entity: Collection) => Promise<Collection>;
}