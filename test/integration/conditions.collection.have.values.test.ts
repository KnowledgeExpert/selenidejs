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

import { have } from '../../lib';
import { browser, GIVEN } from './base';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Conditions.collection.have.attributt.values (via should*)', () => {

    it('is matched instantly for collection that have correct attributes', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <span attr='first'></span>
                <span attr='second'></span>
                <span attr='third'></span>
                <span attr='fourth'></span>
        `);

        await browser.all('span').should(have.attribute('attr').values('first', 'second', 'third', 'fourth'));
        await browser.all('span').should(have.attribute('attr').values('fi', 'sec', 'th', 'fou'));
    });

    it('throwr error witn correct text if values or size dont match', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <span attr='first'></span>
                <span attr='second'></span>
                <span attr='third'></span>
                <span attr='fourth'></span>
        `);

        await browser.all('span').should(have.attribute('attr').values('first'))
            .then(ifNoError => fail('should fail on timeout'))
            .catch(error => {
                expect(error.message).toContain(`browser.all(By(css selector, span)).have attribute 'attr' with values first`);
                expect(error.message).toContain('have values first,second,third,fourth');
            });
        await browser.all('span').should(have.attribute('attr').values('FAIL', 'sec', 'th', 'fou'))
            .then(ifNoError => fail('should fail on timeout'))
            .catch(error => {
                expect(error.message).toContain(`browser.all(By(css selector, span)).have attribute 'attr' with values FAIL,sec,th,fou`);
                expect(error.message).toContain('have values first,second,third,fourth');
            });
    });

});
