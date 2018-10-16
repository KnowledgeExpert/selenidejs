import { Actions } from '../actions';
export declare namespace take {
    const visibility: (element: import("../element").Element) => Promise<boolean>;
    const presence: (element: import("../element").Element) => Promise<boolean>;
    const text: (element: import("../element").Element) => Promise<any>;
    const attribute: typeof Actions.attribute;
    const innerHtml: (element: any) => Promise<any>;
    const outerHtml: (element: any) => Promise<any>;
    const value: (element: any) => Promise<any>;
    const parent: (element: import("../element").Element) => import("../element").Element;
    const followingSibling: typeof Actions.followingSibling;
    const screenshot: typeof Actions.screenshot;
    const url: (driver: import("../driver").Driver) => Promise<any>;
    const title: (driver: import("../driver").Driver) => Promise<any>;
    const pageSource: (driver: import("../driver").Driver) => Promise<any>;
    const tabs: (driver: import("../driver").Driver) => Promise<any>;
    const element: typeof Actions.element;
    const all: typeof Actions.all;
    const filtered: typeof Actions.filtered;
    const filteredBy: typeof Actions.filtered;
    const find: typeof Actions.find;
    const findBy: typeof Actions.find;
    const size: (collection: import("../collection").Collection) => Promise<number>;
    const nth: typeof Actions.nth;
}
