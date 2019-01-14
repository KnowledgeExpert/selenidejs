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
describe('Conditions.element.isVisible (via should)', () => {
    it('is matched after waiting till timeout for element that becomes present, then visible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.smallest, `
                <button style='display:none'>click me if u see me</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        await base_1.browser.element('button').should(lib_1.be.visible);
        expect(await (await base_1.webelement('button')).isDisplayed()).toBe(true);
    });
    it('fails to be matched with error on not present in DOM element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.biggerThanDefault, `
                <button style='display:none'>click me if u see me</button>
        `);
        await base_1.browser.element('button').should(lib_1.be.visible)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await (await base_1.webelements('button')).length).toBe(0);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).shouldMatch(is visible)
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"button"}`);
        });
    });
    it('fails to be matched with error on present but not visible element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.smallerThanDefault, `
                <button style='display:none'>click me if u see me</button>
        `);
        await base_1.browser.element('button').should(lib_1.be.visible)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await (await base_1.webelements('button')).length).toBe(1);
            expect(await (await base_1.webelement('button')).isDisplayed()).toBe(false);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).shouldMatch(is visible)
Reason:
\tis visible? = false`);
        });
    });
});
//# sourceMappingURL=conditions.element.isVisible.test.js.map