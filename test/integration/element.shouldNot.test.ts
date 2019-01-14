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

describe('Element.shouldNot', () => {

    it('waits for element condition (like be.visible) to be NOT matched', async () => {
        const started = new Date().getTime();
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.smallerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        await browser.element('button').shouldNot(be.visible);
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(data.timeouts.smallerThanDefault);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);
    });

    it('fails on timeout during waiting for negated element condition (like be.visible) if yet matched', async () => {
        const started = new Date().getTime();
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.biggerThanDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        await browser.element('button').shouldNot(be.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes not visible'))
            .catch(async error => {
                expect(new Date().getTime() - started)
                    .toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(await (await webelement('button')).isDisplayed())
                    .toBe(true);
            });
    });

    it('returns same element for chainable calls', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button disabled>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.smallerThanDefault
        );
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].disabled = true;',
            data.timeouts.byDefault
        );
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        await (await
              browser.element('button').shouldNot(be.visible)).shouldNot(be.enabled);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);
        expect(await (await webelement('button')).isEnabled())
            .toBe(false);
    });
});
