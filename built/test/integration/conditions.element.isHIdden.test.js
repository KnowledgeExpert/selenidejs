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
describe('Conditions.element.isHidden (via should)', () => {
    it('is matched instantly for element that is present but not visible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if u see me</button>
        `);
        await base_1.browser.element('button').should(lib_1.be.hidden);
        expect(await (await base_1.webelement('button')).isDisplayed()).toBe(false);
    });
    it('is matched instantly for element that is not present in DOM', async () => {
        await base_1.GIVEN.openedEmptyPage();
        await base_1.browser.element('button').should(lib_1.be.hidden);
        expect(await (await base_1.webelements('button')).length).toBe(0);
    });
    it('is matched after waiting till timeout for element that disappears from DOM, after was visible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:block'>click me if u see me</button>
        `);
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.smallest, '<p>bye bye!</p>');
        await base_1.browser.element('button').should(lib_1.be.hidden);
        expect(await (await base_1.webelements('button')).length).toBe(0);
    });
    it('is matched after waiting till timeout for element that becomes invisible, yet present in DOM', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:block'>click me if u see me</button>
        `);
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.smallest, '' +
            'document.getElementsByTagName("button")[0].style = "display:none";');
        await base_1.browser.element('button').should(lib_1.be.hidden);
        expect(await (await base_1.webelement('button')).isDisplayed()).toBe(false);
    });
    it('fails to be matched with error on visible element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button>click me if u see me</button>
        `);
        await base_1.browser.element('button').should(lib_1.be.hidden)
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await (await base_1.webelement('button')).isDisplayed()).toBe(true);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).is hidden
Reason:
\tcondition not matched`);
        });
    });
});
//# sourceMappingURL=conditions.element.isHIdden.test.js.map