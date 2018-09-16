import { Element } from '../element';
export declare type AfterElementActionHook = (error: Error, element: Element, actionName: string) => void | Promise<void>;
