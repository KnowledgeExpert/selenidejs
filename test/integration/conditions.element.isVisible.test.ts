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

import { browser, GIVEN, data, webelement, webelements } from './base';
import { be } from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Conditions.element.isVisible (via should)', () => {

    it('is matched instantly for element that is visible', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if u see me</button>
        `);

        await browser.element('button').should(be.visible);
        expect(await (await webelement('button')).isDisplayed()).toBe(true);
    });

    it('is matched after waiting till timeout for element that becomes present, then visible', async () => {
        await GIVEN.openedEmptyPageWithBodyAfter(data.timeouts.smallest, `
                <button style='display:none'>click me if u see me</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );

        await browser.element('button').should(be.visible);
        expect(await (await webelement('button')).isDisplayed()).toBe(true);
    });

    it('fails to be matched with error on not present in DOM element (after timeout)', async () => {
        await GIVEN.openedEmptyPageWithBodyAfter(data.timeouts.biggerThanDefault, `
                <button style='display:none'>click me if u see me</button>
        `);

        await browser.element('button').should(be.visible)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(await (await webelements('button')).length).toBe(0);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).is visible
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"button"}`
                );
            });
    });

    it('fails to be matched with error on present but not visible element (after timeout)', async () => {
        await GIVEN.openedEmptyPageWithBodyAfter(data.timeouts.smallerThanDefault, `
                <button style='display:none'>click me if u see me</button>
        `);

        await browser.element('button').should(be.visible)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(await (await webelements('button')).length).toBe(1);
                expect(await (await webelement('button')).isDisplayed()).toBe(false);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).is visible
Reason:
\tcondition not matched`
                );
            });
    });

});
