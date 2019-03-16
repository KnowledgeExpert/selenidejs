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

describe('Element.shouldNot', () => {

    it('instantly checks element condition (like be.visible) as not matched (reason: false)', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button style="display:none">click me if u see me</button>
        `);
        const started = new Date().getTime();

        await browser.element('button').should(be.not.visible);
        expect(new Date().getTime() - started)
            .toBeLessThan(data.timeouts.smallest);
        expect(await (await webelement('button')).isDisplayed()).toBe(false);
    });

    it('instantly checks element condition (like be.visible) as not matched (reason: error)', async () => {
        await GIVEN.openedEmptyPage();
        const started = new Date().getTime();

        await browser.element('button').should(be.not.visible);
        expect(new Date().getTime() - started)
            .toBeLessThan(data.timeouts.smallest);
        expect(await (await webelements('button')).length).toBe(0);
    });

    it('waits for element condition (like be.visible) to be NOT matched', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.smallerThanDefault
        );
        const started = new Date().getTime();
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        await browser.element('button').should(be.not.visible);
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(data.timeouts.smallerThanDefault);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);
    });

    it('fails on timeout during waiting for negated element condition (like be.visible) if yet matched', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("button")[0].style = "display:none";',
            data.timeouts.biggerThanDefault
        );
        const started = new Date().getTime();
        expect(await (await webelement('button')).isDisplayed())
            .toBe(true);

        await browser.element('button').should(be.not.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes not visible'))
            .catch(async error => {
                expect(await (await webelement('button')).isDisplayed())
                    .toBe(true);
                expect(new Date().getTime() - started)
                    .toBeGreaterThanOrEqual(data.timeouts.byDefault);
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
              browser.element('button').should(be.not.visible)).should(be.not.enabled);
        expect(await (await webelement('button')).isDisplayed())
            .toBe(false);
        expect(await (await webelement('button')).isEnabled())
            .toBe(false);
    });
});
