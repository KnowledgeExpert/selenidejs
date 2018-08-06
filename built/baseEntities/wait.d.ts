import { Configuration } from "./config/configuration";
import { Condition } from "../conditions/condition";
import { Driver } from "./driver";
import { Element } from "./element";
import { Collection } from "./collection";
export declare class Wait<T extends Driver | Element | Collection> {
    readonly configuration: Configuration;
    readonly entity: T;
    readonly selenideDriver: Driver;
    constructor(entity: T, config: Configuration);
    shouldMatch(condition: Condition<T>, timeout?: number): Promise<T>;
    isMatch(condition: Condition<T>, timeout?: number): Promise<boolean>;
    private until(condition, timeout, throwError);
}
