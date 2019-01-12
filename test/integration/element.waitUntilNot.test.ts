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

import { browser, GIVEN, data, webelement } from './base';
import { be } from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Element.waitUntilNot as "waiting predicate"', () => {

    it('waits for element condition (like be.visible) to be not matched and returns true', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.smallerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        expect(await browser.element('button').waitUntilNot(be.visible)).toBe(true);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);
    });

    it('on timeout, if element condition (like be.visible) was matched, returns false', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.biggerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        await browser.element('button').waitUntilNot(be.visible)
            .then(async resIfNoError => {
                expect(resIfNoError).toBe(false);
                expect(await (await webelement('button')).isDisplayed())
                    .toBe(true);
            })
            .catch(async error => fail('should not fail on timeout before element becomes not visible'));
    });
});
