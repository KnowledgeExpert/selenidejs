import { Command } from "./command";
import { Element } from "../baseEntities/element";
export declare class PressKey implements Command<Element> {
    perform(entity: Element, ...args: any[]): Promise<void>;
}
