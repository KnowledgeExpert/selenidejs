import { Element } from '../element';
export declare type AfterElementActionHook = (actionError: Error, element: Element, actionName: string) => void | Promise<void>;
