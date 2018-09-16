import { Element } from '../baseEntities/element';
import { Command } from './command';
export declare class ClickByJs implements Command<Element> {
    static getClickOnElementWithOffsetScript(offsetX: number, offsetY: number): string;
    perform(element: Element, ...args: any[]): Promise<void>;
}
