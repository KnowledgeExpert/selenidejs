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
import { browser, GIVEN } from './base';

describe('By', () => {

    it('js should find elements in root with function', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><span>second</span>');
        await browser.element(by.js(() => document.getElementsByTagName('span')[0]))
            .getWebElement()
            .then(element => element.getText().then(text => expect(text).toBe('first')));
        await browser.all(by.js(() => document.getElementsByTagName('span')))
            .getWebElements()
            .then(async (elements) => {
                expect(elements.length).toBe(2);
                expect(await elements[0].getText()).toBe('first');
                expect(await elements[1].getText()).toBe('second');
            });
    });

    it('js should find elements in root with string', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><span>second</span>');
        await browser.element(by.js('return document.getElementsByTagName("span")[0]'))
            .getWebElement()
            .then(element => element.getText().then(text => expect(text).toBe('first')));
        await browser.all(by.js('return document.getElementsByTagName("span")'))
            .getWebElements()
            .then(async (elements) => {
                expect(elements.length).toBe(2);
                expect(await elements[0].getText()).toBe('first');
                expect(await elements[1].getText()).toBe('second');
            });
    });

    it('js should find nested elements with function', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><div><span>second</span><span>third</span></div>');
        await browser.element('div')
            // @ts-ignore
            .element(by.js(() => element.getElementsByTagName('span')[0]))
            .getWebElement()
            .then(element => element.getText().then(text => expect(text).toBe('second')));
        await browser.element('div')
            // @ts-ignore
            .all(by.js(() => element.getElementsByTagName('span')))
            .getWebElements()
            .then(async (elements) => {
                expect(elements.length).toBe(2);
                expect(await elements[0].getText()).toBe('second');
                expect(await elements[1].getText()).toBe('third');
            });
    });

    it('js should find nested elements with string', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><div><span>second</span><span>third</span></div>');
        await browser.element('div')
            .element(by.js('return element.getElementsByTagName("span")[0]'))
            .getWebElement()
            .then(element => element.getText().then(text => expect(text).toBe('second')));
        await browser.element('div')
            .all(by.js('return element.getElementsByTagName("span")'))
            .getWebElements()
            .then(async (elements) => {
                expect(elements.length).toBe(2);
                expect(await elements[0].getText()).toBe('second');
                expect(await elements[1].getText()).toBe('third');
            });
    });

    it('js should throw correct error when script returns invalid type', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><div><span>second</span><span>third</span></div>');
        await browser.element(by.js(() => 12), { timeout: 1 })
            .click()
            .then(
                () => { throw new Error('element should not be found'); },
                err => {
                    expect(err.message).toContain('browser.element(() => 12)');
                    expect(err.message).toContain('You should return HTMLElement object from script, but was: 12');
                }
            );
        await browser.element(by.js(() => document.getElementsByTagName('span')), { timeout: 1 })
            .click()
            .then(
                () => { throw new Error('element should not be found'); },
                err => {
                    expect(err.message).toContain("browser.element(() => document.getElementsByTagName('span'))");
                    expect(err.message).toContain('You should return HTMLElement object from script, but was: [object Object],[object Object],[object Object]');
                }
            );
        await browser.all(by.js(() => 12), { timeout: 1 })
            .should(have.texts(''))
            .then(
                () => { throw new Error('elements should not be found'); },
                err => {
                    expect(err.message).toContain('browser.all(() => 12)');
                    expect(err.message).toContain('You should return an array of HTMLElement objects from script, but was: 12');
                }
            );
        await browser.all(by.js(() => document.getElementsByTagName('span')[0]), { timeout: 1 })
            .should(have.texts(''))
            .then(
                () => { throw new Error('elements should not be found'); },
                err => {
                    expect(err.message).toContain("browser.all(() => document.getElementsByTagName('span')[0]).");
                    expect(err.message).toContain('You should return an array of HTMLElement objects from script, but was: [object Object]');
                }
            );
        await browser.element('div').element(by.js(() => 12), { timeout: 1 })
            .click()
            .then(
                () => { throw new Error('element should not be found'); },
                err => {
                    expect(err.message).toContain('browser.element(By(css selector, div)).element(() => 12)');
                    expect(err.message).toContain('You should return HTMLElement object from script, but was: 12');
                }
            );
    });
});

