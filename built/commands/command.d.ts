import { Element } from "../baseEntities/element";
import { Driver } from "../baseEntities/driver";
export interface Command<T extends Driver | Element> {
    perform(entity: T, ...args: any[]): void | Promise<void>;
}
