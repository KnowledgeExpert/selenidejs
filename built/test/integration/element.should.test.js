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
/* short reminder ;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */
describe('Element.should*', () => {
    it('waits for element condition (like be.visible) to be matched', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        await base_1.browser.element('button').should(lib_1.be.visible);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(true);
    });
    it('fails on timeout during waiting for element condition (like be.visible) if yet not matched', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <button style='display:none'>click me if you see me;)</button>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("button")[0].style = "display:block";', base_1.data.timeouts.biggerThanDefault);
        expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false);
        await base_1.browser.element('button').should(lib_1.be.visible)
            .then(ifNoError => fail('should fail on timeout before element becomes visible'))
            .catch(async (error) => expect(await (await base_1.webelement('button')).isDisplayed())
            .toBe(false));
    });
    fit('returns same element for chainable calls', async () => {
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
    /*

    it('for element should return element if successful', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');
        const elem = Browser.element('#test');

        expect(await elem.should(have.exactText('Test'))).toBe(elem);
    });

    it('for element should throw correct error if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test</span>');

        await Browser.element('#test').should(have.exactText('Invalid')).then(
            () => fail('Expected should to be failed'),
            error => expect(error.message).toBe(
                "browser.find(By(css selector, #test)) should have exact text 'Invalid', but was 'Test'. " +
                'Wait timed out after 1ms.'
            )
        );
    });
     */
});
//# sourceMappingURL=element.should.test.js.map