import { Driver } from '../driver';
import { Element } from '../element';
export interface Command<T extends Driver | Element> {
    perform(entity: T, ...args: any[]): void | Promise<void>;
}
