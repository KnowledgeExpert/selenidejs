import { Browser } from '../../lib';
import { Gherkin } from '../utils/gherkin';
import { WebDriver } from 'selenium-webdriver';
export declare let browser: Browser;
export declare let driver: WebDriver;
export declare let GIVEN: Gherkin;
export declare let WHEN: Gherkin;
export declare namespace data.timeouts {
    const byDefault = 3000;
    const step = 1000;
    const smallerThanDefault: number;
    const biggerThanDefault: number;
}
export declare function webelement(cssSelector: string): import("selenium-webdriver").WebElementPromise;
