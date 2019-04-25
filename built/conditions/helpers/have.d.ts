import { ElementCondition } from '../elementCondition';
import { CollectionCondition } from '../collectionCondition';
import { By } from 'selenium-webdriver';
import { BrowserCondition } from '../browserCondition';
export declare namespace have {
    function visibleElement(locator: By): ElementCondition;
    function exactText(value: string | number): ElementCondition;
    function text(value: string | number): ElementCondition;
    function attribute(attributeName: string, attributeValue?: string | number): ElementCondition;
    function exactAttribute(attributeName: string, attributeValue?: string | number): ElementCondition;
    function value(value: string | number): ElementCondition;
    function cssClass(cssClass: string): ElementCondition;
    function size(size: number): CollectionCondition;
    function texts(...texts: string[]): CollectionCondition;
    function exactTexts(...texts: string[]): CollectionCondition;
    function exactTextsInAnyOrder(...texts: string[]): CollectionCondition;
    function tabsSize(size: number): BrowserCondition;
    function tabsSizeGreaterThan(size: number): BrowserCondition;
    const alert: BrowserCondition;
    function alertText(text: string | number): BrowserCondition;
}
