import { Element } from '../element';
import { Command } from './command';
export declare class DoubleClick implements Command<Element> {
    perform(entity: Element, ...args: any[]): Promise<void>;
}
