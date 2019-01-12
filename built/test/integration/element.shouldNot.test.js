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
describe('Element.shouldNot', () => {
    it('waits for element condition (like be.visible) to be NOT matched', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:none";', base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
        await base_1.browser.element('button').shouldNot(lib_1.be.visible);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
    });
    it('fails on timeout during waiting for negated element condition (like be.visible) if yet matched', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:none";', base_1.data.timeouts.biggerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
        await base_1.browser.element('button').shouldNot(lib_1.be.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes not visible'))
            .catch(async (error) => expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true));
    });
    it('returns same element for chainable calls', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button disabled>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:none";', base_1.data.timeouts.smallerThanDefault);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].disabled = true;', base_1.data.timeouts.byDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
        await (await base_1.browser.element('button').shouldNot(lib_1.be.visible)).shouldNot(lib_1.be.enabled);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        expect(await (await base_1.webelement('button')).isEnabled())
            .toBe(false);
    });
});
//# sourceMappingURL=element.shouldNot.test.js.map