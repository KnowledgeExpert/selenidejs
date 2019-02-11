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

import { browser, GIVEN, data, webelement, WHEN, driver, webelements } from './base';
import { its } from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Element.* queries: text (as built in query with waiting for no error)', () => {

    it('waits until no error (unable to locate element)', async () => {
        await GIVEN.openedEmptyPage();
        await WHEN.withBodyAfter(data.timeouts.smallest, `
                <button>click me if you see me;)</button>
        `);
        try {
            await webelement('button');
            // ifNoError
            fail('raw webdriver should fail');
        } catch (error) {
            expect(error.message).toContain(
                'no such element: Unable to locate element: {"method":"css selector","selector":"button"}'
            );
        }

        expect(await browser.element('button').get(its.text)).toBe('click me if you see me;)');
        expect(await (await webelement('button')).getText()).toBe('click me if you see me;)');
    });

    it('returns "" if element invisible (no wait)', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style="display:none">click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallest
        );

        expect(await browser.element('button').get(its.text)).toBe('');
        expect(await (await webelement('button')).getText()).toBe('');
    });

    it('fails to query text with error on not present in DOM element (after timeout)', async () => {
        await GIVEN.openedEmptyPageWithBodyAfter(data.timeouts.biggerThanDefault, `
                <button>click me if you see me;)</button>
        `);

        await browser.element('button').get(its.text)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect (await (await webelements('button')).length).toBe(0);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).text
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"button"}`
                );
            });
    });

/*  so far not relevant...
    it('fails to query text of not visible element (after timeout)', async () => {
        await GIVEN.openedEmptyPageWithBodyAfter(data.timeouts.smallerThanDefault, `
                <button style='display:none'>click me if you see me;)</button>
        `);

        /!* tslint:disable:no-console *!/
        console.log(`text='${await browser.element('button').text()}'`);
        await browser.element('button').get(its.text)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect (await (await webelements('button')).length).toBe(0);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).text
Reason:
\t??? TODO`
                );
            });
    });*/
});
