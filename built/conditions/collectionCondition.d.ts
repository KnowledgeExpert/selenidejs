import { Collection } from '../collection';
import { Condition } from './condition';
export declare class CollectionCondition extends Condition<Collection> {
    readonly matches: (entity: Collection) => Promise<Collection>;
}
