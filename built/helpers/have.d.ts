export declare namespace have {
    const exactText: (value: string | number) => import("../condition").Condition<import("../element").Element>;
    const text: (value: string | number) => import("../condition").Condition<import("../element").Element>;
    const attribute: (attributeName: string, attributeValue?: string | number) => import("../condition").Condition<{}>;
    const exactAttribute: (attributeName: string, attributeValue: string | number) => import("../condition").Condition<{}>;
    const value: (value: string | number) => import("../condition").Condition<{}>;
    const cssClass: (cssClass: string) => import("../condition").Condition<import("../element").Element>;
    const size: (size: number) => import("../condition").Condition<{}>;
    const sizeGreaterThan: (size: number) => import("../condition").Condition<{}>;
    const texts: (...texts: string[]) => import("../condition").Condition<{}>;
    const exactTexts: (...texts: string[]) => import("../condition").Condition<{}>;
    const url: (urlPart: string) => import("../condition").Condition<{}>;
    const urlPart: (urlPart: string) => import("../condition").Condition<{}>;
    const tabsSize: (size: number) => import("../condition").Condition<{}>;
    const tabsSizeGreaterThan: (size: number) => import("../condition").Condition<{}>;
}
