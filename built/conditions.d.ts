import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
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
    const selected: Condition<Element>;
    function atributeWithValue(attributeName: string, attributeValue: string | number): Condition<Element>;
    function attributeWithExactValue(attributeName: string, attributeValue: string | number): Condition<Element>;
    function cssClass(cssClass: string): Condition<Element>;
    function size(size: number): Condition<Collection>;
    function sizeGreaterThan(size: number): Condition<Collection>;
    function texts(...texts: Array<string | number>): Condition<Collection>;
    function exactTexts(...texts: Array<string | number>): Condition<Collection>;
    function title(title: string): Condition<Driver>;
    function urlPart(urlPart: string): Condition<Driver>;
    function url(url: string): Condition<Driver>;
    function tabsSize(size: number): Condition<Driver>;
    function tabsSizeGreaterThan(size: number): Condition<Driver>;
}
