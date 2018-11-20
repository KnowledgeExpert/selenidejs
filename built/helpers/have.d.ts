import { Collection } from '../collection';
import { Condition } from '../condition';
import { Driver } from '../driver';
import { Element } from '../element';
export declare namespace have {
    const exactText: (value: string | number) => Condition<Element>;
    const text: (value: string | number) => Condition<Element>;
    const attribute: (attributeName: string, attributeValue?: string | number) => Condition<Element>;
    const exactAttribute: (attributeName: string, attributeValue: string | number) => Condition<Element>;
    const value: (value: string | number) => Condition<Element>;
    const cssClass: (cssClass: string) => Condition<Element>;
    const size: (size: number) => Condition<Collection>;
    const sizeGreaterThan: (size: number) => Condition<Collection>;
    const texts: (...texts: string[]) => Condition<Collection>;
    const exactTexts: (...texts: string[]) => Condition<Collection>;
    const title: (title: string) => Condition<Driver>;
    const url: (urlPart: string) => Condition<Driver>;
    const urlPart: (urlPart: string) => Condition<Driver>;
    const tabsSize: (size: number) => Condition<Driver>;
    const tabsSizeGreaterThan: (size: number) => Condition<Driver>;
}
