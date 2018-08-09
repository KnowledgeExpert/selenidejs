import { Collection } from '../baseEntities/collection';
import { Condition } from './condition';
export declare class CollectionCondition extends Condition<Collection> {
    readonly matches: (entity: Collection) => Promise<Collection>;
}
