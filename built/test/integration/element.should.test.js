"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const lib_1 = require("../../lib");
/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */
describe('Element.should', () => {
    it('waits for element condition (like be.visible) to be matched', async () => {
        const started = new Date().getTime();
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        await base_1.browser.element('button').should(lib_1.be.visible);
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
    });
    it('fails on timeout during waiting for element condition (like be.visible) if yet not matched', async () => {
        const started = new Date().getTime();
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.biggerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        await base_1.browser.element('button').should(lib_1.be.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes visible'))
            .catch(async (error) => {
            expect(new Date().getTime() - started)
                .toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(await (await base_1.webelement('button')).isDisplayed())
                .toBe(false);
        });
    });
    it('returns same element for chainable calls', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none' disabled>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].disabled = false;', base_1.data.timeouts.byDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        await (await base_1.browser.element('button').should(lib_1.be.visible)).should(lib_1.be.enabled);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
        expect(await (await base_1.webelement('button')).isEnabled())
            .toBe(true);
    });
});
//# sourceMappingURL=element.should.test.js.map