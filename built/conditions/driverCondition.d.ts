import { Driver } from '../driver';
import { Condition } from './condition';
export declare class DriverCondition extends Condition<Driver> {
    readonly matches: (entity: Driver) => Promise<Driver>;
}
