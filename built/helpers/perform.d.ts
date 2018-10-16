import { Actions } from '../actions';
export declare namespace perform {
    const click: (element: import("../element").Element) => Promise<import("../element").Element>;
    const contextClick: (element: import("../element").Element) => Promise<import("../element").Element>;
    const doubleClick: typeof Actions.doubleClick;
    const hover: typeof Actions.hover;
    const pressKey: typeof Actions.pressKey;
    const pressEnter: (element: import("../element").Element) => Promise<any>;
    const pressEscape: (element: import("../element").Element) => Promise<any>;
    const pressTab: (element: import("../element").Element) => Promise<any>;
    const scrollTo: typeof Actions.scrollTo;
    const sendKeys: typeof Actions.sendKeys;
    const setValue: typeof Actions.setValue;
    const open: typeof Actions.open;
    const close: typeof Actions.close;
    const quit: typeof Actions.quit;
    const resizeWindow: typeof Actions.resizeWindow;
    const refresh: (driver: import("../driver").Driver) => Promise<any>;
    const acceptAlert: (driver: import("../driver").Driver) => Promise<any>;
    const executeScript: typeof Actions.executeScript;
    const nextTab: (driver: import("../driver").Driver) => Promise<any>;
    const previousTab: (driver: import("../driver").Driver) => Promise<any>;
    const switchToTab: typeof Actions.switchToTab;
    const switchToFrame: typeof Actions.switchToFrame;
    const switchToDefaultFrame: (driver: import("../driver").Driver) => Promise<any>;
    const clearCacheAndCookies: (driver: import("../driver").Driver) => Promise<any>;
}
