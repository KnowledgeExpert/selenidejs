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

import {browser, GIVEN, data, WHEN} from './base';
import {have, be} from '../../lib';

describe('Collection filtered by condition', () => {

    it('should not be found on creation', async () => {
        const collection = browser.all('.not-existing').filteredBy(have.cssClass('black-hole'));

        expect(collection.toString()).toBeTruthy();
    });

    it('should filter by have no condition', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='test'>Bob</li>
                    <li class='test'>Kate</li>
                </ul>
        `);
        const collection = browser.all('li').filteredBy(have.no.cssClass('test'));

        expect(await collection.matching(have.texts('John'))).toBe(true);
    });

    it('should filter by be not condition', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li style="display: none">First</li>
                    <li>Second</li>
                    <li style="display: none">Third</li>
                </ul>
        `);
        const collection = browser.all('li').filteredBy(be.not.hidden);

        expect(await collection.matching(have.texts('Second'))).toBe(true);
        await collection.should(have.texts('Second'))
    });

    it('search is postponed until asking actual element data like "has specific texts?"', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        const collection = browser.all('li').filteredBy(have.cssClass('will-exist'));

        await WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);

        // todo: change here and below to raw webdriver assert implementation
        expect(await collection.matching(have.texts('Bob', 'Kate'))).toBe(true);
    });

    it('is performed on each subsequent "ask"', async () => {
        await GIVEN.openedEmptyPage();
        const collection = browser.all('li').filteredBy(have.cssClass('will-exist'));

        await WHEN.withBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                </ul>
        `);
        expect(await collection.matching(have.texts('Bob'))).toBe(true);

        await WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bobby</li>
                    <li>John</li>
                    <li>Mary</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        expect(await collection.matching(have.texts('Bobby', 'Kate'))).toBe(true);
    });

    it('waits for matched condition (like have.texts) in should', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                </ul>
        `);
        const collection = browser.all('li').filteredBy(have.cssClass('will-exist'));
        expect(await collection.matching(have.texts('Bob', 'Kate'))).toBe(false);

        const started = new Date().getTime();
        await WHEN.withBodyAfter(data.timeouts.smallest, `
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);

        await collection.should(have.texts('Bob', 'Kate'));
        expect(new Date().getTime() - started)
            .toBeGreaterThanOrEqual(data.timeouts.smallest);
        expect(await collection.matching(have.texts('Bob', 'Kate'))).toBe(true);
    });

    it('fails with correct error message on have-not-condition', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li>Ari</li>
                    <li class='will-exist' style="display: none">Bob</li>
                </ul>
        `);
        const collection = browser.all('li').filteredBy(have.no.attribute('class'))
        const started = new Date().getTime();

        await collection.should(have.texts('Bob'))
            .then(_ => fail('should fail on timeout before matched condition'))
            .catch(error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(error.message)
                    .toContain(`browser.all(By(css selector, li)).filteredBy(has no attribute 'class').has texts Bob`);
            });

    });

    it('fails on timeout with error during waiting to match condition in assert, if no visible elements', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li>John</li>
                    <li class='will-exist' style="display: none">Bob</li>
                </ul>
        `);
        const collection = browser.all('li').filteredBy(have.cssClass('will-exist'));

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
            .catch(error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.all(By(css selector, li)).filteredBy(has css class 'will-exist').has texts Bob,Kate
Reason:
\tactual texts: ` // todo: seems weird a bit, the "emptiness" after colon, but in fact this is an actual result:)
                );
            });
    });
});
