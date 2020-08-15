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
import { browser, data, GIVEN } from './base';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Conditions.element.hasText (via should*)', () => {

    it('is matched instantly for element that contains text', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>hey, click me!</button>
        `);

        await browser.element('button').should(have.text('click'));
        await browser.element('button').should(have.text('hey, click me!'));
        await browser.element('button').should(have.no.text(' hey, click me! '));
    });

    it('is matched instantly for element that matches text', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>hey, click me!</button>
        `);

        await browser.element('button').should(have.text(/.*click.*/g));
        await browser.element('button').should(have.text(/^hey, click me!$/g));
        await browser.element('button').should(have.no.text(/\s{2}click\s{2}/g));
    });

    // todo: add test for invisible element with some text...

    it('fails to be matched with error for element that does not contain text', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>hey, click me!</button>
        `);

        await browser.element('button').should(have.text('pick'))
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).has text: pick
Reason:
\tactual text: hey, click me!`
                );
            });
    });

});
