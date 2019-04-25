import { ElementCondition } from './elementCondition';
import { BrowserCondition } from './browserCondition';
import { CollectionCondition } from './collectionCondition';
import { By } from 'selenium-webdriver';
export declare namespace Conditions {
    function visibleElement(locator: By): ElementCondition;
    const elementIsSelected: ElementCondition;
    const elementIsAbsent: ElementCondition;
    const elementIsPresent: ElementCondition;
    const elementIsVisible: ElementCondition;
    const elementIsHidden: ElementCondition;
    const elementHasEmptyText: ElementCondition;
    function elementHasText(text: string | number): ElementCondition;
    function elementHasExactText(text: string | number): ElementCondition;
    function elementHasAttribute(attributeName: string): ElementCondition;
    function elementHasAttributeWithValue(attributeName: string, attributeValue: string | number): ElementCondition;
    function elementHasAttributeWithExactValue(attributeName: string, attributeValue: string | number): ElementCondition;
    function elementHasClass(cssClass: string | number): ElementCondition;
    function collectionHasSize(size: number): CollectionCondition;
    function collectionHasSizeMoreThan(size: number): CollectionCondition;
    function collectionHasTexts(texts: string[] | number[]): CollectionCondition;
    function collectionHasExactTexts(texts: string[] | number[]): CollectionCondition;
    function collectionHasExactTextsInAnyOrder(texts: string[] | number[]): CollectionCondition;
    function browserUrlContains(url: string): BrowserCondition;
    function browserTabsHaveSize(size: number): BrowserCondition;
    function browserTabsHaveSizeGreaterThan(size: number): BrowserCondition;
    const browserHasAlert: BrowserCondition;
    function browserHasAlertWithText(text: string | number): BrowserCondition;
}
