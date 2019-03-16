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
describe('element.element by selector', () => {
    it('should not be found on creation', async () => {
        const collection = base_1.browser.element('.not-existing').element('.inner');
        expect(collection.toString()).toBeTruthy();
    });
    it('search is postponed until asking actual element data like "has specific text?"', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                </ul>
        `);
        const element = base_1.browser.element('ul').element('.will-exist');
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        // todo: change here and below to raw webdriver assert implementation
        expect(await element.matching(lib_1.have.text('Bob'))).toBe(true);
    });
    it('is performed on each subsequent "ask"', async () => {
        await base_1.GIVEN.openedEmptyPage();
        const element = base_1.browser.element('ul').element('.will-exist');
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                </ul>
        `);
        expect(await element.matching(lib_1.have.text('Bob'))).toBe(true);
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bobby</li>
                </ul>
        `);
        expect(await element.matching(lib_1.have.text('Bobby'))).toBe(true);
    });
    it('waits for matched condition (like have.text) in should', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                </ul>
        `);
        const element = base_1.browser.element('ul').element('.will-exist');
        await base_1.WHEN.withBodyAfter(base_1.data.timeouts.smallest, `
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        await element.should(lib_1.have.text('Bob'));
        expect(await element.matching(lib_1.have.text('Bob'))).toBe(true);
    });
    // todo: consider testing it on click not on should
    it('fails on timeout with error during waiting to match condition in assert, if no matched element', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li id="queen">Mary</li>
                </ul>
        `);
        const element = base_1.browser.element('ul').element('.will-exist');
        await base_1.WHEN.withBodyAfter(base_1.data.timeouts.biggerThanDefault, `
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist' style="display: block">Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        const started = new Date().getTime();
        await element.should(lib_1.have.text('Bob'))
            .then(ifNoError => fail('should fail on timeout before matched condition'))
            .catch(async (error) => {
            expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, ul)).element(By(css selector, .will-exist)).has text: Bob
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":".will-exist"}`);
        });
    });
    it('fails on timeout with error during waiting to match condition in assert, if element is hidden', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist' style="display: none">Bob</li>
                </ul>
        `);
        const element = base_1.browser.element('ul').element('.will-exist');
        await base_1.WHEN.withBodyAfter(base_1.data.timeouts.biggerThanDefault, `
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist' style="display: block">Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        const started = new Date().getTime();
        await element.should(lib_1.have.text('Bob'))
            .then(ifNoError => fail('should fail on timeout before matched condition'))
            .catch(async (error) => {
            expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, ul)).element(By(css selector, .will-exist)).has text: Bob
Reason:
\tactual text: ` // todo: actually user will see on the screen Kate and will expect Kate as found element... o_O
            );
        });
    });
});
//# sourceMappingURL=element.element.bySelector.test.js.map