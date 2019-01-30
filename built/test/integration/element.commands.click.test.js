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
/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */
describe('Element.* commands: click', () => {
    it('clicks on element once it is present in DOM and visible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.smallest, `
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("a")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        await base_1.browser.element('a').click();
        expect(await base_1.driver.getCurrentUrl()).toContain('second');
    });
    it('fails to click with error on not present in DOM element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.biggerThanDefault, `
                <a href='#second'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.browser.element('a').click()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await base_1.driver.getCurrentUrl()).not.toContain('second');
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, a)).click
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"a"}`);
        });
    });
    it('fails to click with error on not visible element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPageWithBodyAfter(base_1.data.timeouts.smallerThanDefault, `
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.browser.element('a').click()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await base_1.driver.getCurrentUrl()).not.toContain('second');
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, a)).click
Reason:
\telement not interactable`);
        });
    });
});
//# sourceMappingURL=element.commands.click.test.js.map