import { Element } from '../element';
import { Command } from './command';
export declare class SetValue implements Command<Element> {
    perform(entity: Element, ...args: any[]): Promise<void>;
}
