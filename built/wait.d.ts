import { Collection } from './collection';
import { Condition } from './conditions/condition';
import { Configuration } from './configuration';
import { Driver } from './driver';
import { Element } from './element';
export declare class Wait<T extends Driver | Element | Collection> {
    readonly configuration: Configuration;
    readonly entity: T;
    constructor(entity: T, config: Configuration);
    shouldMatch(condition: Condition<T>, timeout?: number): Promise<T>;
    isMatch(condition: Condition<T>, timeout?: number): Promise<boolean>;
    private until;
}
