import { Driver } from '../baseEntities/driver';
import { Element } from '../baseEntities/element';
export interface Query<T extends Driver | Element> {
    perform(entity: T, ...args: any[]): any | Promise<any>;
}
