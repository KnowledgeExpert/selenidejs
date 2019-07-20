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

import {browser, GIVEN, data, webelement} from './base';
import {be, have, perform, should} from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Element.should', () => {

    it('asserts element condition (like be.visible) instantly for correspondingly matched element', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if u see me</button>
        `);
        const started = new Date().getTime();

        await browser.element('button').should(be.visible);
        expect(new Date().getTime() - started)
            .toBeLessThan(data.timeouts.smallest);
        expect(await (await webelement('button')).isDisplayed()).toBe(true);
    });

    it('waits for element condition (like be.visible) to be matched', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );
        const started = new Date().getTime();
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);

        await browser.element('button').should(be.visible);
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(data.timeouts.smallerThanDefault);
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
        const started = new Date().getTime();
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);

        await browser.element('button').should(be.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes visible'))
            .catch(async error => {
                expect(new Date().getTime() - started)
                    .toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(await (await webelement('button')).isDisplayed())
                    .toBe(false);
            });
    });

    it('returns same element for chainable calls', async () => {
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
});
