import { Condition } from "./condition";
import { Driver } from "../baseEntities/driver";
export declare class DriverCondition extends Condition<Driver> {
    readonly matches: (entity: Driver) => Promise<Driver>;
}
