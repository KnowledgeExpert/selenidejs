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
describe('Conditions.element.hasText (via should*)', () => {
    it('is matched instantly for element that contains text', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button>hey, click me!</button>
        `);
        await base_1.browser.element('button').should(lib_1.have.text('click'));
        await base_1.browser.element('button').should(lib_1.have.text('hey, click me!'));
        await base_1.browser.element('button').shouldNot(lib_1.have.text(' hey, click me! '));
    });
    // todo: add test for invisible element with some text...
    it('fails to be matched with error for element that does not contain text', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button>hey, click me!</button>
        `);
        await base_1.browser.element('button').should(lib_1.have.text('pick'))
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, button)).has text: pick
Reason:
\tactual text: hey, click me!`);
        });
    });
});
//# sourceMappingURL=conditions.element.hasText.test.js.map