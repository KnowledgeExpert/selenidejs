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

import { Browser } from '../../lib/browser';
import { have } from '../../lib/helpers/have';
import { Given } from '../utils/given';
import './base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

describe('Find', () => {

    it('by filtered web elements should filter correctly', async () => {
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

    it('by filtered web elements should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.all('h1').filterBy(have.exactText('Valid')).toString())
            .toBe('browser.all(By(css selector, h1)).filteredBy(have exact text \'Valid\')');
    });

    it('by indexed web element should return correct element', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <h1>Invalid</h1>
                <h1>Valid</h1>
                <h1>Invalid</h1>
            `
        );

        expect(await Browser.all('h1').first().text()).toBe('Invalid');
        expect(await Browser.all('h1').get(1).text()).toBe('Valid');
        expect(await Browser.all('h1').findBy(have.exactText('Invalid')).text()).toBe('Invalid');
    });

    it('by indexed web element should throw error when trying to get element over length', async () => {
        await Given.openedEmptyPageWithBody('<h1>Valid</h1>');

        await Browser.all('h1').get(1).click()
            .catch(error => {
                expect(error.message).toBe(
                    'browser.all(By(css selector, h1)).get(1) should be visible. Wait timed out after 1ms.'
                );
            });
    });

    it('by indexed web element should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.all('h1').get(0).toString()).toBe('browser.all(By(css selector, h1)).get(0)');
    });

    it('by web element should return correct element', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <div id="top"><div>Test 2</div></div>
                <h1>Test</h1>
            `
        );

        expect(await Browser.element('h1').text()).toBe('Test');
        expect(await Browser.element('#top').element('div').text()).toBe('Test 2');
    });

    it('by web element should throw error when no elements match locator', async () => {
        await Given.openedEmptyPage();

        await Browser.element('h1').text().catch(
            error => expect(error.message).toBeTruthy()
            // todo not implemented yet
            // error => expect(error.message).toBe('No elements found using By(css selector, h1)')
        );
    });

    it('by web element should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.element('h1').toString()).toBe('browser.find(By(css selector, h1))');
    });

    it('by web elements should return correct elements', async () => {
        await Given.openedEmptyPageWithBody(
            `
                <h1 id="item">Test 1</h1>
                <h1 id="item">Test 2</h1>
                <div>
                    <h2 id="item">Test 3</h2>
                    <h2 id="item">Test 4</h2>
                    <h2 id="item">Test 5</h2>
                    <h2 id="item">Test 6</h2>
                </div>
            `
        );

        expect(await Browser.all('#item').size()).toBe(6);
        await Browser.all('h1').size().then(size => expect(size).toEqual(2));
        await Browser.element('div').all('h2').size().then(size => expect(size).toEqual(4));
    });

    it('by web elements should have correct toString', async () => {
        await Given.openedEmptyPage();

        expect(Browser.all('h1').toString()).toBe('browser.all(By(css selector, h1))');
    });

});
