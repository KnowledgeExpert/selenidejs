import { By } from 'selenium-webdriver';
export declare namespace have {
    const visibleElement: (locator: By) => import("../../wait").Query<import("../../element").Element, void>;
    const exactText: (value: string) => import("../../wait").Query<import("../../element").Element, void>;
    const text: (value: string) => import("../../wait").Query<import("../../element").Element, void>;
    const attribute: (name: string) => import("../../wait").Query<import("../../element").Element, void>;
    const attributeWithValue: (attributeName: string, attributeValue: string) => import("../../wait").Query<import("../../element").Element, void>;
    const attributeWithValueContaining: (attributeName: string, attributeValue: string) => import("../../wait").Query<import("../../element").Element, void>;
    const value: (value: string) => import("../../wait").Query<import("../../element").Element, void>;
    const valueContaining: (expected: string) => import("../../wait").Query<import("../../element").Element, void>;
    const cssClass: (cssClass: string) => import("../../wait").Query<import("../../element").Element, void>;
    const size: (size: number) => import("../../wait").Query<import("../../collection").Collection, void>;
    const sizeLessThan: (size: number) => import("../../wait").Query<import("../../collection").Collection, void>;
    const sizeLessThanOrEqual: (size: number) => import("../../wait").Query<import("../../collection").Collection, void>;
    const sizeGreaterThan: (size: number) => import("../../wait").Query<import("../../collection").Collection, void>;
    const sizeGreaterThanOrEqual: (size: number) => import("../../wait").Query<import("../../collection").Collection, void>;
    const texts: (...texts: string[]) => import("../../wait").Query<import("../../collection").Collection, void>;
    const exactTexts: (...texts: string[]) => import("../../wait").Query<import("../../collection").Collection, void>;
    const url: (url: string) => import("../../wait").Query<import("../../browser").Browser, void>;
    const urlContaining: (urlPart: string) => import("../../wait").Query<import("../../browser").Browser, void>;
    const title: (expected: string) => import("../../wait").Query<import("../../browser").Browser, void>;
    const titleContaining: (titlePart: string) => import("../../wait").Query<import("../../browser").Browser, void>;
    const tabsNumber: (num: number) => import("../../wait").Query<import("../../browser").Browser, void>;
    const tabsNumberLessThan: (num: number) => import("../../wait").Query<import("../../browser").Browser, void>;
    const tabsNumberMoreThan: (num: number) => import("../../wait").Query<import("../../browser").Browser, void>;
    const jsReturnedTrue: (script: string) => import("../../wait").Query<import("../../browser").Browser, void>;
}
