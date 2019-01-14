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
describe('Element.waitUntil as "waiting predicate"', () => {
    it('waits for element condition (like be.visible) to be matched and returns true', async () => {
        const started = new Date().getTime();
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        expect(await base_1.browser.element('button').waitUntil(lib_1.be.visible)).toBe(true);
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
    });
    it('on timeout, if element condition (like be.visible) was not matched, returns false', async () => {
        const started = new Date().getTime();
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.biggerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        await base_1.browser.element('button').waitUntil(lib_1.be.visible)
            .then(async (resIfNoError) => {
            expect(resIfNoError).toBe(false);
            expect(await (await base_1.webelement('button')).isDisplayed())
                .toBe(false);
            expect(new Date().getTime() - started)
                .toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
        })
            .catch(async (error) => fail('should not fail on timeout before element becomes visible'));
    });
});
//# sourceMappingURL=element.waitUntil.test.js.map