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

import { Describe, It } from 'jasmine-cookies';
import { Browser, have } from '../../lib';
import { Given } from '../utils/given';
import './base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('Find', () => {

    beforeAll(async () => {
        Browser.configuration.timeout = 1;
    });

    It('by filtered web elements should filter correctly', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <h1>Invalid</h1>
                <h1>Valid</h1>
                <h1>Invalid</h1>
            `
        );
        const filteredElements = Browser.all('h1').filterBy(have.exactText('Valid'));

        expect(await filteredElements.size()).toBe(1);
        await filteredElements.getWebElements()
            .then(async (elements) => expect(await elements[0].getText()).toBe('Valid'));
    });

    It('by filtered web elements should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.all('h1').filterBy(have.exactText('Valid')).toString())
            .toBe('browser.all(By(css selector, h1)).filteredBy(have exact text \'Valid\')');
    });

    It('by indexed web element should return correct element', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <h1>Invalid</h1>
                <h1>Valid</h1>
                <h1>Invalid</h1>
            `
        );

        expect(await Browser.all('h1').get(0).text()).toBe('Invalid');
        expect(await Browser.all('h1').get(1).text()).toBe('Valid');
        expect(await Browser.all('h1').get(2).text()).toBe('Invalid');
    });

    It('by indexed web element should throw error when trying to get element over length', async () => {
        await Given.openedEmptyPageWithBody('<h1>Valid</h1>');

        await Browser.all('h1').get(1).click()
            .catch(error =>
                expect(error.message).toBeTruthy()
                // todo not implemented yet
                // expect(error.message).toBe('Cannot get 1 element from webelements collection with length 1')
            );
    });

    It('by indexed web element should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.all('h1').get(0).toString()).toBe('browser.all(By(css selector, h1)).get(0)');
    });

    It('by web element should return correct element', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <div id="top"><div>Test 2</div></div>
                <h1>Test</h1>
            `
        );

        expect(await Browser.element('h1').text()).toBe('Test');
        expect(await Browser.element('#top').element('div').text()).toBe('Test 2');
    });

    It('by web element should throw error when no elements match locator', async () => {
        await Given.openedEmptyPage();

        await Browser.element('h1').text().catch(
            error => expect(error.message).toBeTruthy()
            // todo not implemented yet
            // error => expect(error.message).toBe('No elements found using By(css selector, h1)')
        );
    });

    It('by web element should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.element('h1').toString()).toBe('browser.find(By(css selector, h1))');
    });

    It('by web elements should return correct elements', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <h1>Test 1</h1>
                <h1>Test 2</h1>
                <h1>Test 3</h1>
                <div>
                    <h2>Test 4</h2>
                    <h2>Test 5</h2>
                    <h2>Test 6</h2>
                </div>
            `
        );

        expect(await Browser.all('h1').size()).toBe(3);
        await Browser.all('h1').texts()
            .then(texts => expect(texts).toEqual(['Test 1', 'Test 2', 'Test 3']));
        await Browser.element('div').all('h2').texts()
            .then(texts => expect(texts).toEqual(['Test 4', 'Test 5', 'Test 6']));
    });

    It('by web elements should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.all('h1').toString()).toBe('browser.all(By(css selector, h1))');
    });

});
