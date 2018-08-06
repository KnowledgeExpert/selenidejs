import { Driver } from "./baseEntities/driver";
import { Collection } from "./baseEntities/collection";
import { Element } from "./baseEntities/element";
export declare namespace Utils {
    function savePageSource(selenideDriver: Driver, filePath: string): Promise<string>;
    function saveScreenshot(selenideDriver: Driver, filePath: string): Promise<string>;
    function getDriver(entity: Driver | Collection | Element): Driver;
    function isDriver(entity: Driver | Element): boolean;
}
