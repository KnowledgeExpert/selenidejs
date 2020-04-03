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

import { by } from '../../lib';
import { browser, GIVEN } from './base';

describe('By', () => {

    it('js should find elements in root', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><span>second</span>');
        await browser.element({ script: context => context.getElementsByTagName('span')[0] })
            .getWebElement()
            .then(element => element.getText().then(text => expect(text).toBe('first')));
        await browser.all({ script: context => context.getElementsByTagName('span') })
            .getWebElements()
            .then(async (elements) => {
                expect(elements.length).toBe(2);
                expect(await elements[0].getText()).toBe('first');
                expect(await elements[1].getText()).toBe('second');
            });
    });

    it('js should find nested elements', async () => {
        await GIVEN.openedEmptyPageWithBody('<span>first</span><div><span>second</span><span>third</span></div>');
        await browser.element('div')
            .element({ script: element => element.getElementsByTagName('span')[0] })
            .getWebElement()
            .then(element => element.getText().then(text => expect(text).toBe('second')));
        await browser.element('div')
            .all({ script: element => element.getElementsByTagName('span') })
            .getWebElements()
            .then(async (elements) => {
                expect(elements.length).toBe(2);
                expect(await elements[0].getText()).toBe('second');
                expect(await elements[1].getText()).toBe('third');
            });
    });

    it('js should have correct toString', () => {
        expect(browser.element({ script: document => document.body }).toString())
            .toBe('browser.element(document => document.body)');
    });

});

