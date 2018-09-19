import { Element } from '../element';
import { Command } from './command';
export declare class ClickByJs implements Command<Element> {
    static getClickOnElementWithOffsetScript(offsetX: number, offsetY: number): string;
    perform(entity: Element, ...args: any[]): Promise<void>;
}
