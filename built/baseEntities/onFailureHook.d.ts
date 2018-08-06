import { Element } from "./element";
import { Driver } from "./driver";
import { Collection } from "./collection";
import { Condition } from "../index";
export declare type OnFailureHook = (<T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => void | Promise<void>);
