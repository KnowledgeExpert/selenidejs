import { Collection } from '../collection';
import { Driver } from '../driver';
export declare type OnCollectionFailureHook = (error: Error, driver: Driver, collection: Collection) => void | Promise<void>;
