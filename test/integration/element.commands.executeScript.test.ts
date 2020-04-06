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

import { browser, GIVEN } from './base';

describe('Element commands executeScript', () => {

    it('should pass correct context when use function', async () => {
        await GIVEN.openedEmptyPageWithBody('hello there');
        await browser.element('body')
            .executeScript(element => element.innerHTML)
            .then(html => expect(html).toBe('hello there'));
    });

    it('should pass correct context when use string', async () => {
        await GIVEN.openedEmptyPageWithBody('hello there');
        await browser.element('body')
            .executeScript('return element.innerHTML')
            .then(html => expect(html).toBe('hello there'));
    });

    it('should pass correct args when use function', async () => {
        await GIVEN.openedEmptyPageWithBody('hello there');
        await browser.element('body')
            .executeScript((element, args) => element.innerHTML + args[0], ' selenium')
            .then(html => expect(html).toBe('hello there selenium'));
    });

    it('should pass correct args when use string', async () => {
        await GIVEN.openedEmptyPageWithBody('hello there');
        await browser.element('body')
            .executeScript('return element.innerHTML + args[0]', ' selenium')
            .then(html => expect(html).toBe('hello there selenium'));
    });

    it('should pass correct window when use function', async () => {
        await GIVEN.openedEmptyPageWithBody('hello there');
        await browser.element('body')
            .executeScript((element, args, window) => window.document.body.innerHTML)
            .then(html => expect(html).toBe('hello there'));
    });

    it('should pass correct window when use string', async () => {
        await GIVEN.openedEmptyPageWithBody('hello there');
        await browser.element('body')
            .executeScript('return window.document.body.innerHTML')
            .then(html => expect(html).toBe('hello there'));
    });

});

