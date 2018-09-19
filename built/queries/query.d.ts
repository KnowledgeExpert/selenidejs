import { Driver } from '../driver';
import { Element } from '../element';
export interface Query<T extends Driver | Element> {
    perform(entity: T, ...args: any[]): any | Promise<any>;
}
