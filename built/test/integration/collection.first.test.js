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
/* tslint:disable:no-magic-numbers */
/* tslint:disable:align */
const something = async (entity) => { };
describe('Collection first element', () => {
    it('should not be found on creation', async () => {
        const collection = base_1.browser.all('.not-existing').first;
        expect(collection.toString()).toBeTruthy();
    });
    it('search is postponed until asking actual element data like "has specific text?"', async () => {
        const element = base_1.browser.all('li').first;
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        // todo: change here and below to raw webdriver assert implementation
        expect(await element.matching(lib_1.have.text('Bob'))).toBe(true);
    });
    it('search through .then(find.first) ' +
        'is postponed until asking actual element data like "has specific texts?"', async () => {
        const element = await base_1.browser.all('li').perform(something).then(lib_1.find.first);
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        // todo: change here and below to raw webdriver assert implementation
        expect(await element.matching(lib_1.have.text('Bob'))).toBe(true);
    });
});
//# sourceMappingURL=collection.first.test.js.map