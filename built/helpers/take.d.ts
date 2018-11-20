import { Actions } from '../actions';
import { ElementsBuilder } from '../elementsBuilder';
export declare namespace take {
    const visibility: (element: import("../element").Element) => Promise<boolean>;
    const presence: (element: import("../element").Element) => Promise<boolean>;
    const text: (element: import("../element").Element) => Promise<any>;
    const attribute: typeof Actions.attribute;
    const innerHtml: (element: any) => Promise<any>;
    const outerHtml: (element: any) => Promise<any>;
    const value: (element: any) => Promise<any>;
    const screenshot: typeof Actions.screenshot;
    const url: (driver: import("../driver").Driver) => Promise<any>;
    const title: (driver: import("../driver").Driver) => Promise<any>;
    const pageSource: (driver: import("../driver").Driver) => Promise<any>;
    const tabs: (driver: import("../driver").Driver) => Promise<any>;
    const size: (collection: import("../collection").Collection) => Promise<number>;
    const element: typeof ElementsBuilder.element;
    const parent: (element: import("../element").Element) => import("../element").Element;
    const followingSibling: typeof ElementsBuilder.followingSibling;
    const all: typeof ElementsBuilder.all;
    const filtered: typeof ElementsBuilder.filtered;
    const filteredBy: typeof ElementsBuilder.filtered;
    const find: typeof ElementsBuilder.find;
    const findBy: typeof ElementsBuilder.find;
    const nth: typeof ElementsBuilder.nth;
    const executeScript: typeof Actions.executeScript;
}
