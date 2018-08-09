import { Driver } from '../baseEntities/driver';
import { Element } from '../baseEntities/element';
export interface Command<T extends Driver | Element> {
    perform(entity: T, ...args: any[]): void | Promise<void>;
}
