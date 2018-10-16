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

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

import { Browser } from '../../lib/browser';

describe('Other - ', () => {

    it('element should be able to initialize without webdriver', async () => {
        expect(Browser.element('test')).toBeTruthy();
        expect(Browser.element('test').element('test2')).toBeTruthy();
        expect(Browser.element('test').all('test2')).toBeTruthy();
    });

    it('element should produce valid toString', async () => {
        expect(Browser.element('test').toString()).toBe('browser.find(By(css selector, test))');
        expect(Browser.element('test').element('test2').toString())
            .toBe('browser.find(By(css selector, test)).find(By(css selector, test2))');
        expect(Browser.element('test').all('test2').toString())
            .toBe('browser.find(By(css selector, test)).all(By(css selector, test2))');
    });


    it('collection should be able to initialize without webdriver', async () => {
        expect(Browser.all('test')).toBeTruthy();
        expect(Browser.all('test').get(0)).toBeTruthy();
    });

    it('collection should produce valid toString', async () => {
        expect(Browser.all('test').toString()).toBe('browser.all(By(css selector, test))');
        expect(Browser.all('test').get(0).toString()).toBe('browser.all(By(css selector, test)).get(0)');
    });
});
