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
describe('Element search', () => {
    it('does not perform actual search on creation', async () => {
        const element = base_1.browser.element('#not-existing-element');
        expect(element.toString()).toBeTruthy();
    });
    it('is postponed until asking actual element data like visibility', async () => {
        await base_1.GIVEN.openedEmptyPage();
        const element = base_1.browser.element('#will-be-existing-element');
        await base_1.WHEN.withBody('<h1 id="will-be-existing-element">Hello kitty:*</h1>');
        expect(await element.matching(lib_1.be.visible)).toBe(true);
    });
    it('is performed on each subsequent "ask"', async () => {
        await base_1.GIVEN.openedEmptyPage();
        const element = base_1.browser.element('#will-be-existing-element');
        await base_1.WHEN.withBody('<h1 id="will-be-existing-element">Hello kitty:*</h1>');
        expect(await element.matching(lib_1.be.visible)).toBe(true);
        await base_1.WHEN.withBody('<h1 id="will-be-existing-element" style="display:none">Hello kitty:*</h1>');
        expect(await element.matching(lib_1.be.visible)).toBe(false);
    });
    it('waits for element command like click to be possible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("a")[0].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        const started = new Date().getTime();
        await base_1.browser.element('a').click();
        expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.smallerThanDefault);
        expect(await base_1.driver.getCurrentUrl()).toContain('second');
    });
    it('waits with custom timeout for element command like click to be possible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("a")[0].style = "display:block";', base_1.data.timeouts.biggerThanDefault);
        const started = new Date().getTime();
        await base_1.browser.element('a')
            .with({ timeout: base_1.data.timeouts.biggerThanDefault + base_1.data.timeouts.step })
            .click();
        expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.biggerThanDefault);
        expect(await base_1.driver.getCurrentUrl()).toContain('second');
    });
    it('fails on timeout during waiting for action like click to be possible, if element invisible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("a")[0].style = "display:block";', base_1.data.timeouts.biggerThanDefault);
        const started = new Date().getTime();
        await base_1.browser.element('a').click()
            .then(ifNoError => fail('should fail on timeout before can be clicked'))
            .catch(async (error) => {
            expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(await base_1.driver.getCurrentUrl()).not.toContain('second');
        });
    });
});
//# sourceMappingURL=element.search.test.js.map