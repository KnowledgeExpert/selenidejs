import { Element } from "../baseEntities/element";
import { Driver } from "../baseEntities/driver";


export interface Query<T extends Driver | Element> {
    perform (entity: T, ...args: any[]): any | Promise<any>;
}