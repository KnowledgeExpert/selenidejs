import { Driver } from '../driver';
export declare type OnFailureHook = (error: Error, driver: Driver) => void | Promise<void>;
