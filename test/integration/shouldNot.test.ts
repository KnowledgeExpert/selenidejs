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

describe('should not', () => {

    it('for element should return element if successful', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');
        const elem = Browser.element('#test');

        expect(await elem.shouldNot(have.exactText('Invalid'))).toBe(elem);
    });

    it('for element should throw correct error if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');

        await Browser.element('#test').shouldNot(have.exactText('Test')).then(
            () => fail('Expected should to be failed'),
            error => expect(error.message).toBe(
                "browser.find(By(css selector, #test)) should not have exact text 'Test'. " +
                'Wait timed out after 1ms.'
            )
        );
    });

    it('for collection should return collection if successful', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');
        const collection = Browser.all('#test');

        expect(await collection.shouldNot(have.size(2))).toBe(collection);
    });

    it('for collection should throw correct error if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');

        await Browser.all('#test').shouldNot(have.size(1)).then(
            () => fail('Expected should to be failed'),
            error => expect(error.message).toBe(
                "browser.all(By(css selector, #test)) should not have size '1'. " +
                'Wait timed out after 1ms.'
            )
        );
    });

    it('for driver should return driver if successful', async () => {
        await Given.openedEmptyPage();
        const driver = Browser.driver;

        expect(await Browser.shouldNot(have.urlPart('invalid'))).toBe(driver);
    });

    it('for driver should throw correct error if failed', async () => {
        await Given.openedEmptyPage();

        await Browser.shouldNot(have.urlPart('localhost')).then(
            () => fail('Expected should to be failed'),
            error => expect(error.message).toBe(
                "browser should not have url part 'localhost'. " +
                'Wait timed out after 1ms.'
            )
        );
    });

});
