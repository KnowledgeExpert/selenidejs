import { Browser } from '../browser';
import { Element } from '../element';
export interface Query<T extends Browser | Element> {
    perform(entity: T, ...args: any[]): any | Promise<any>;
}
