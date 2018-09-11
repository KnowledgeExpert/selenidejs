import { Element } from '../element';
export declare type BeforeElementActionHook = (element: Element, actionName: string) => void | Promise<void>;
