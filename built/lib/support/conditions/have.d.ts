import { By } from 'selenium-webdriver';
import { CollectionCondition, BrowserCondition, ElementCondition } from '../../conditions';
export declare namespace have {
    function visibleElement(locator: By): ElementCondition;
    function exactText(value: string): ElementCondition;
    function text(value: string): ElementCondition;
    function attribute(name: string): ElementCondition;
    function attributeWithValue(attributeName: string, attributeValue: string): ElementCondition;
    function attributeWithValueContaining(attributeName: string, attributeValue: string): ElementCondition;
    function value(value: string): ElementCondition;
    function cssClass(cssClass: string): ElementCondition;
    function size(size: number): CollectionCondition;
    function texts(...texts: string[]): CollectionCondition;
    function url(urlPart: string): BrowserCondition;
    function urlContaining(urlPart: string): BrowserCondition;
    function exactTexts(...texts: string[]): CollectionCondition;
    function tabsNumber(num: number): BrowserCondition;
    function tabsNumberLessThan(num: number): BrowserCondition;
    function tabsNumberMoreThan(num: number): BrowserCondition;
}
