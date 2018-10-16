import { Condition } from './condition';
import { Element } from './element';
export declare namespace Conditions {
    const present: Condition<Element>;
    const absent: Condition<Element>;
    const focused: Condition<Element>;
    const visible: Condition<Element>;
    const hidden: Condition<Element>;
    function text(text: string | number): Condition<Element>;
    function exactText(text: string | number): Condition<Element>;
    function attribute(attributeName: string): Condition<Element>;
    const selected: Condition<{}>;
    function atributeWithValue(attributeName: string, attributeValue: string | number): Condition<{}>;
    function attributeWithExactValue(attributeName: string, attributeValue: string | number): Condition<{}>;
    function cssClass(cssClass: string): Condition<Element>;
    function size(size: number): Condition<{}>;
    function sizeGreaterThan(size: number): Condition<{}>;
    function texts(...texts: Array<string | number>): Condition<{}>;
    function exactTexts(...texts: Array<string | number>): Condition<{}>;
    function urlPart(urlPart: string): Condition<{}>;
    function url(url: string): Condition<{}>;
    function tabsSize(size: number): Condition<{}>;
    function tabsSizeGreaterThan(size: number): Condition<{}>;
}
