import { Command } from "./command";
import { Element } from "../baseEntities/element";
export declare class PerformActionOnVisible implements Command<Element> {
    perform(element: Element, ...args: any[]): Promise<void>;
}
