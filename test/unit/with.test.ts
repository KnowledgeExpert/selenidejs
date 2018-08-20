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

import { Describe, It } from 'jasmine-cookies';
import { With } from '../../lib/index';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('Locator', () => {

    It('with type should build valid locator object', async () => {
        expect(With.type('test').toString()).toBe('By(xpath, //*[@type = "test"])');
    });

    It('with value should build valid locator object', async () => {
        expect(With.value('test').toString()).toBe('By(xpath, //*[@value = "test"])');
    });

    It('with partialId should build valid locator object', async () => {
        expect(With.partialId('test').toString()).toBe('By(xpath, //*[contains(@id, "test")])');
        expect(With.partialId('first', 'second').toString()).toBe(
            'By(xpath, //*[contains(@id, "first") and contains(@id, "second")])'
        );
    });

    It('with text should build valid locator object', async () => {
        expect(With.text('test').toString()).toBe(
            'By(xpath, //*/text()[contains(' +
            'normalize-space(translate(string(.), "\t\n\r\u00a0", "    "))' +
            ', "test")]/parent::*)'
        );
    });

    It('with exactText should build valid locator object', async () => {
        expect(With.exactText('test').toString()).toBe(
            'By(xpath, //*/text()[' +
            'normalize-space(translate(string(.), "\t\n\r\u00a0", "    "))' +
            ' = "test"]/parent::*)'
        );
    });

    It('with id should build valid locator object', async () => {
        expect(With.id('test').toString()).toBe('By(css selector, *[id="test"])');
    });

    It('with name should build valid locator object', async () => {
        expect(With.name('test').toString()).toBe('By(css selector, *[name="test"])');
    });

    It('with className should build valid locator object', async () => {
        expect(With.className('test').toString()).toBe('By(css selector, .test)');
    });

    It('with xpath should build valid locator object', async () => {
        expect(With.xpath('//*[@attr = "val"]').toString()).toBe('By(xpath, //*[@attr = "val"])');
    });

    It('with css should build valid locator object', async () => {
        expect(With.css('.test').toString()).toBe('By(css selector, .test)');
    });

    It('with attribute should build valid locator object', async () => {
        expect(With.attribute('key', 'val').toString()).toBe('By(xpath, .//*[contains(@key, "val")])');
    });

    It('with exact attribute should build valid locator object', async () => {
        expect(With.exactAttribute('key', 'val').toString()).toBe('By(xpath, .//*[@key = "val"])');
    });

});
