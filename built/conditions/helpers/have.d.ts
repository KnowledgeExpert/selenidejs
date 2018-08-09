import { By } from 'selenium-webdriver';
import { CollectionCondition } from '../collectionCondition';
import { DriverCondition } from '../driverCondition';
import { ElementCondition } from '../elementCondition';
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
    function url(urlPart: string): DriverCondition;
    function exactTexts(...texts: string[]): CollectionCondition;
    function tabsSize(size: number): DriverCondition;
    function tabsSizeGreaterThan(size: number): DriverCondition;
}
