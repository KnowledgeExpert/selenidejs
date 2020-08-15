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

import { by, have } from '../../lib';
import { browser, data, GIVEN, WHEN } from './base';

describe('Collection', () => {

    it('should not be found on creation', async () => {
        const collection = browser.all('.not-existing');

        expect(collection.toString()).toBeTruthy();
    });

    it('search is postponed until asking actual element data like "has specific texts?"', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                </ul>
        `);
        const collection = browser.all('li');

        await WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);

        // todo: change here and below to raw webdriver assert implementation
        expect(await collection.matching(have.texts('John', 'Bob', 'Kate'))).toBe(true);
    });

    it('is performed on each subsequent "ask"', async () => {
        await GIVEN.openedEmptyPage();
        const collection = browser.all('li');

        await WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li>Bob</li>
                </ul>
        `);
        expect(await collection.matching(have.texts('John', 'Bob'))).toBe(true);

        await WHEN.withBody(`
                <ul>Hello to:
                    <li>Bobby</li>
                    <li>John</li>
                    <li>Mary</li>
                </ul>
        `);
        expect(await collection.matching(have.texts('Bobby', 'John', 'Mary'))).toBe(true);
    });

    it('waits for matched condition (like have.texts) in should', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                </ul>
        `);
        const collection = browser.all('li');
        expect(await collection.matching(have.texts('John', 'Bob', 'Kate'))).toBe(false);

        const started = new Date().getTime();
        await WHEN.withBodyAfter(data.timeouts.smallest, `
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);

        await collection.should(have.texts('John', 'Bob', 'Kate'));
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(data.timeouts.smallest);
        expect(await collection.matching(have.texts('John', 'Bob', 'Kate'))).toBe(true);
    });

    it('fails on timeout with error during waiting to match condition in assert, if no visible elements', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li class='will-exist' style="display: none">Bob</li>
                </ul>
        `);
        const collection = browser.all('li');

        await WHEN.withBodyAfter(data.timeouts.biggerThanDefault, `
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist' style="display: block">Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        const started = new Date().getTime();

        await collection.should(have.texts('Bob', 'Kate'))
            .then(ifNoError => fail('should fail on timeout before matched condition'))
            .catch(async error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.all(By(css selector, li)).has texts Bob,Kate
Reason:
\tactual texts: ` // todo: seems weird a bit, the "emptiness" after colon, but in fact this is an actual result:)
                );
            });
    });

});

