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

import { browser, GIVEN, data, WHEN, driver, webelement } from './base';
import { be } from '../../lib';
import { By } from 'selenium-webdriver';

/* short reminder ;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Element.should*', () => {

    it('waits for element condition (like be.visible) to be matched', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);

        await browser.element('button').should(be.visible);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);
    });

    it('fails on timeout during waiting for element condition (like be.visible) if yet not matched', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.biggerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);

        await browser.element('button').should(be.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes visible'))
            .catch(async error =>
                expect(await (await webelement('button')).isDisplayed())
                    .toBe(false));
    });

    fit('returns same element for chainable calls', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style='display:none' disabled>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].disabled = false;',
            data.timeouts.byDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);

        await (await
              browser.element('button').should(be.visible)).should(be.enabled);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);
        expect(await (await webelement('button')).isEnabled())
            .toBe(true);
    });

    /*

    it('for element should throw correct error if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');

        await Browser.element('#test').should(have.exactText('Invalid')).then(
            () => fail('Expected should to be failed'),
            error => expect(error.message).toBe(
                "browser.find(By(css selector, #test)) should have exact text 'Invalid', but was 'Test'. " +
                'Wait timed out after 1ms.'
            )
        );
    });
     */
});
