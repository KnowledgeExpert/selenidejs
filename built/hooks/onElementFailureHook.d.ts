import { Driver } from '../driver';
import { Element } from '../element';
export declare type OnElementFailureHook = (error: Error, driver: Driver, element: Element) => void | Promise<void>;
