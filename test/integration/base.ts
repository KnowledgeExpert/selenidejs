// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

import { Browser, Configuration } from '../../lib';
import { TestUtils } from '../utils/testUtils';
import { Gherkin } from '../utils/gherkin';
import { By, WebDriver } from 'selenium-webdriver';

export let browser: Browser;
export let GIVEN: Gherkin;
export let WHEN: Gherkin;

export namespace data.timeouts {
    export const byDefault = 750;
    export const step = 250;
    export const smallest = step;
    export const smallerThanDefault = byDefault - step;
    export const biggerThanDefault = byDefault + step;
}

export let driver: WebDriver;

export function webelement(cssSelector: string) {
    return driver.findElement(By.css(cssSelector));
}

export function textOf(cssSelector: string) {
    return webelement(cssSelector).then(it => it.getText());
}

export function valueOf(cssSelector: string) {
    return webelement(cssSelector).then(it => it.getAttribute('value'));
}

export function isAbsentInDom(cssSelector: string) {
    return driver.findElements(By.css(cssSelector)).then(it => it.length === 0);
}

export function webelements(cssSelector: string) {
    return driver.findElements(By.css(cssSelector));
}

beforeAll(async () => {
    driver = TestUtils.buildWebDriver();

    browser = Browser.configuredWith()
        .driver(driver)
        .timeout(data.timeouts.byDefault)
        .baseUrl(TestUtils.resourcesUrl())
        .build();

    GIVEN = new Gherkin(browser);
    WHEN = GIVEN;

    TestUtils.startServer();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterAll(async () => {
    await browser.quit();
    TestUtils.shutdownServer();
});
