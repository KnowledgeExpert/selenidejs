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
describe('Element.matchesNot as negated condition based "predicate"', () => {
    it('on element condition (like be.visible) that is not matched (false), returns true (no waiting)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        expect(await base_1.browser.element('button').matchingNot(lib_1.be.visible)).toBe(true);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
    });
    it('on element condition (like be.visible) that is not matched (error), returns true (no waiting)', async () => {
        await base_1.GIVEN.openedEmptyPage();
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        expect(await base_1.browser.element('button').matchingNot(lib_1.be.visible)).toBe(true);
        try {
            await base_1.webelement('button');
            // ifNoError
            fail('raw webdriver should fail');
        }
        catch (error) {
            expect(error.message).toContain('no such element: Unable to locate element: {"method":"css selector","selector":"button"}');
        }
    });
    it('on element condition (like be.visible) that is matched, returns false (no waiting)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:block'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:none";', base_1.data.timeouts.biggerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
        expect(await base_1.browser.element('button').matchingNot(lib_1.be.visible)).toBe(false);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
    });
});
//# sourceMappingURL=element.matchesNot.test.js.map