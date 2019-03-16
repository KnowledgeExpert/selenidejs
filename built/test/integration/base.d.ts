import { Browser } from '../../lib';
import { Gherkin } from '../utils/gherkin';
import { WebDriver } from 'selenium-webdriver';
export declare let browser: Browser;
export declare let GIVEN: Gherkin;
export declare let WHEN: Gherkin;
export declare namespace data.timeouts {
    const byDefault = 750;
    const step = 250;
    const smallest = 250;
    const smallerThanDefault: number;
    const biggerThanDefault: number;
}
export declare let driver: WebDriver;
export declare function webelement(cssSelector: string): import("selenium-webdriver").WebElementPromise;
export declare function textOf(cssSelector: string): PromiseLike<string>;
export declare function valueOf(cssSelector: string): PromiseLike<string>;
export declare function isAbsentInDom(cssSelector: string): import("selenium-webdriver").promise.Promise<boolean>;
export declare function webelements(cssSelector: string): import("selenium-webdriver").promise.Promise<import("selenium-webdriver").WebElement[]>;
