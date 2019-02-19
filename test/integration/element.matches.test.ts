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

describe('Element.matches as condition based "predicate"', () => {

    it('on element condition (like be.visible) that is not matched (false), returns false (no waiting)', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);

        expect(await browser.element('button').matching(be.visible)).toBe(false);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);
    });

    it('on element condition (like be.visible) that is not matched (error), returns false (no waiting)', async () => {
        await GIVEN.openedEmptyPage();

        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );

        expect(await browser.element('button').matching(be.visible)).toBe(false);
        try {
            await webelement('button');
            // ifNoError
            fail('raw webdriver should fail');
        } catch (error) {
            expect(error.message).toContain(
                'no such element: Unable to locate element: {"method":"css selector","selector":"button"}'
            );
        }
    });

    it('on element condition (like be.visible) that is matched, returns true (no waiting)', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style='display:block'>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.biggerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        expect(await browser.element('button').matching(be.visible)).toBe(true);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);
    });
});
