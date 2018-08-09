import { Element } from '../baseEntities/element';
import { Command } from './command';
export declare class ClickByJs implements Command<Element> {
    perform(entity: Element, ...args: any[]): Promise<void>;
}
