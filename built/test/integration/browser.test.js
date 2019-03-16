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
describe('Browser', () => {
    it('waits for matched condition (like have.title) in should', async () => {
        await base_1.GIVEN.openedEmptyPage();
        expect(await base_1.driver.getTitle()).toBe('Empty Page');
        const started = new Date().getTime();
        await base_1.WHEN.executeScriptAfter(base_1.data.timeouts.smallest, `
                document.title = 'New Title';
        `);
        await base_1.browser.should(lib_1.have.title('New Title'));
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(base_1.data.timeouts.smallest);
        expect(await base_1.driver.getTitle()).toBe('New Title');
    });
    it('fails on timeout with error during waiting to match condition in assert, if not matched', async () => {
        await base_1.GIVEN.openedEmptyPage();
        expect(await base_1.driver.getTitle()).toBe('Empty Page');
        const started = new Date().getTime();
        await base_1.WHEN.executeScriptAfter(base_1.data.timeouts.biggerThanDefault, `
                document.title = 'New Title';
        `);
        await base_1.browser.should(lib_1.have.title('New Title'))
            .then(ifNoError => fail('should fail on timeout before matched condition'))
            .catch(async (error) => {
            expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.has title New Title
Reason:
\tactual title: Empty Page`);
        });
    });
});
//# sourceMappingURL=browser.test.js.map