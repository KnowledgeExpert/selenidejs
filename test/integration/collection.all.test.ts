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

import { find, have, their } from '../../lib';
import { browser, data, GIVEN, webelements, WHEN } from './base';

/* tslint:disable:no-magic-numbers */
/* tslint:disable:align */

const something = entity => entity;

describe('Collection all elements in each', () => {

    it('should not be found on creation', async () => {
        const collection = browser.all('.not-existing').all('span');

        expect(collection.toString()).toBeTruthy();
    });

    it('search is postponed until asking actual element data like "has specific texts?"', async () => {
        const collection = browser.all('div').all('span');

        await WHEN.withBody(`
            <div> <span>first</span> <span>second</span> </div>
            <div> <span>third</span> <span>fourth</span> </div>
        `);

        expect(await collection.get(their.size))
            .toBe(await webelements('div span').then(it => it.length));
    });

    it('search through .then(find.all(...)) is postponed until asking actual elements data like "have specific size?"', async () => {
        const collection = await browser.all('div')
            .perform(something)
            .then(find.all('span'));

        await WHEN.withBody(`
            <div> <span>first</span> <span>second</span> </div>
            <div> <span>third</span> <span>fourth</span> </div>
        `);

        expect(await collection.get(their.size))
            .toBe(await webelements('div span').then(it => it.length));
    });

    it('is performed on each subsequent "ask"', async () => {
        const collection = browser.all('div').all('span');

        await WHEN.withBody(`
            <div> <span>first</span> </div>
            <div> <span>third</span> </div>
        `);
        expect(await collection.matching(have.texts('first', 'third'))).toBe(true);

        await WHEN.withBody(`
            <div> <span>first</span> <span>second</span> </div>
            <div> <span>third</span> <span>fourth</span> </div>
        `);
        expect(await collection.matching(have.texts('first', 'second', 'third', 'fourth'))).toBe(true);
    });

    it('waits for matched condition (like have.texts) in should', async () => {
        await GIVEN.openedEmptyPage();
        await WHEN.executeScriptWithTimeout(
            'document.querySelector("body").innerHTML = ' +
            '"<div> <span>first</span> <span>second</span> </div>' +
            '<div> <span>third</span> <span>fourth</span> </div>"',
            data.timeouts.smallerThanDefault
        );

        expect(await browser.all('div').all('span').waitUntil(have.texts('first', 'second', 'third', 'fourth')))
            .toBe(true);
    });

});
