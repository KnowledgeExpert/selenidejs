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

import { have } from '../../lib';
import { browser, data, driver, GIVEN, WHEN } from './base';

describe('Browser', () => {

    it('waits for matched condition (like have.title) in should', async () => {
        await GIVEN.openedEmptyPage();
        expect(await driver.getTitle()).toBe('Empty Page');

        const started = new Date().getTime();
        await WHEN.executeScriptAfter(data.timeouts.smallest, `
                document.title = 'New Title';
        `);

        await browser.should(have.title('New Title'));
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(data.timeouts.smallest);
        expect(await driver.getTitle()).toBe('New Title');
    });

    it('fails on timeout with error during waiting to match condition in assert, if not matched', async () => {
        await GIVEN.openedEmptyPage();
        expect(await driver.getTitle()).toBe('Empty Page');

        const started = new Date().getTime();
        await WHEN.executeScriptAfter(data.timeouts.biggerThanDefault, `
                document.title = 'New Title';
        `);

        await browser.should(have.title('New Title'))
            .then(ifNoError => fail('should fail on timeout before matched condition'))
            .catch(async error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.has title New Title
Reason:
\tactual title: Empty Page`
                );
            });
    });
});
